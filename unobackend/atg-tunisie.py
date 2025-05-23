import time

from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
import os
import django
import requests
from urllib.parse import urljoin

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "unobackend.settings")
django.setup()

from django.core.files.base import ContentFile
from django.core.files.temp import NamedTemporaryFile

from product.models import Product

options = Options()
options.add_argument('--headless')
options.add_argument('--no-sandbox')
options.add_argument('--disable-dev-shm-usage')
driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=options)
base_url = "https://sopen.tn/boutique/"

driver.get(base_url)
time.sleep(2)
all_product_data = []

while True:
    soup = BeautifulSoup(driver.page_source, "lxml")
    product_links = [a["href"] for a in soup.select(".product-wrapper a") if a["href"].startswith(base_url)]
    print(product_links)
    for product_url in product_links:
        driver.get(product_url)
        time.sleep(2)

        soup = BeautifulSoup(driver.page_source, "lxml")
        product_data = {
            "name": soup.select_one(".elementor-container h1").text.strip() if soup.select_one(".h1") else "",
            "slogan": soup.select_one(".woocommerce-product-details__short-description").text.strip() if soup.select_one(".woocommerce-product-details__short-description") else "",
            "price": soup.select_one(".elementor-widget-container .woocommerce-Price-amount amount bdi").text.strip() if soup.select_one(".elementor-widget-container .woocommerce-Price-amount amount bdi") else "",
            "description": "",
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
            img_tag = soup.select_one(".wd-carousel-item a img")
            img_url = urljoin(product_url, img_tag["src"])
            img_response = requests.get(img_url)
            if img_response.status_code == 200:
                img_temp = NamedTemporaryFile(delete=True)
                img_temp.write(img_response.content)
                img_temp.flush()

                # Save to Django model

                # Assuming your model has an ImageField called 'image'
                product.image.save(f"{soup.select_one('.h1').text.strip().replace(' ', '_')}.jpg", ContentFile(img_response.content), save=True)
        print(product_data)
        all_product_data.append(product_data)
        driver.back()
    try:
        # Wait for pagination to be present (max 3 seconds)
        WebDriverWait(driver, 3).until(
            EC.presence_of_element_located((By.CSS_SELECTOR, ".wd-pagination"))
        )
        next_btn = driver.find_elements(By.CSS_SELECTOR, ".wd-pagination .next")
        if next_btn and next_btn[0].is_enabled() and next_btn[0].is_displayed():
            next_btn[0].click()
            time.sleep(2)
        else:
            print("No next button or not enabled/visible.")
            break
    except Exception as e:
        print(f"Pagination not found or next button not clickable")
        break

driver.quit()
for product in all_product_data:
    print(product)
