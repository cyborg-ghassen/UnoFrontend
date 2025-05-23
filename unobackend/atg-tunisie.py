import os
import time
from urllib.parse import urljoin

import django
import requests
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from webdriver_manager.chrome import ChromeDriverManager

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "unobackend.settings")
django.setup()

from django.core.files.base import ContentFile
from django.core.files.temp import NamedTemporaryFile

from product.models import Product, Brand, Category

options = Options()
options.add_argument('--headless')
options.add_argument('--no-sandbox')
options.add_argument('--disable-dev-shm-usage')
driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=options)

base_url = "https://www.sofpince.com.tn/product-category/"

driver.get(base_url)
time.sleep(2)

all_product_data = []
for category in ["chair", "desk"]:
    driver.get(f"{base_url}{category}")
    time.sleep(2)

    soup = BeautifulSoup(driver.page_source, "lxml")

    products = soup.select(".products .product")
    while True:
        for product_url in products:
            time.sleep(2)
            product_data = {
                "name": product_url.select_one("h4 a").text.strip() if product_url.select_one("h4 a") else "",
                "description": "",
                "price": 0,
                "slogan": "",
                "reviews": 0,
                "stock": 0,
                "promotion": 0,
            }
            if Product.objects.filter(**product_data).exists():
                product = Product.objects.filter(**product_data).first()
                print(f"Product already exists: {product_data['name']}")
                continue
            else:
                product = Product.objects.create(**product_data)
                img_tag = soup.select_one("a img")
                img_url = urljoin(product_url.select_one("h4 a")['href'], img_tag["src"])
                img_response = requests.get(img_url)
                if img_response.status_code == 200:
                    img_temp = NamedTemporaryFile(delete=True)
                    img_temp.write(img_response.content)
                    img_temp.flush()

                    # Save to a Django model

                    # Assuming your model has an ImageField called 'image'
                    product.image.save(f"{product_data['name']}.jpg", ContentFile(img_response.content), save=True)
            print(product_data)
            all_product_data.append(product_data)
        try:
            # Wait for pagination to be present (max 3 seconds)
            WebDriverWait(driver, 3).until(
                EC.presence_of_element_located((By.CSS_SELECTOR, ".woocommerce-pagination ul li"))
            )
            next_btn = driver.find_elements(By.CSS_SELECTOR, ".woocommerce-pagination ul li .next")
            if next_btn and next_btn[0].is_enabled() and next_btn[0].is_displayed():
                next_btn[0].click()
                time.sleep(2)
            else:
                print("No next button or not enabled/visible.")
                break
        except Exception as e:
            print(f"Pagination not found or next button not clickable")
            break
