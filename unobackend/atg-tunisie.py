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

from product.models import Product, Category, Brand

options = Options()
options.add_argument('--headless')
options.add_argument('--no-sandbox')
options.add_argument('--disable-dev-shm-usage')
driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=options)
base_url = "https://atg-tunisie.com/fr/"

driver.get(base_url)
time.sleep(2)

soup = BeautifulSoup(driver.page_source, "lxml")
category_links = [a["href"] for a in soup.select(".sections-contaier a")]

all_product_data = []
print(category_links)

for category_url in category_links:
    driver.get(category_url)
    time.sleep(2)

    while True:
        soup = BeautifulSoup(driver.page_source, "lxml")
        category = soup.select_one("#category-description h2").text.strip() if soup.select_one("#category-description h2") else ""
        category, created = Category.objects.get_or_create(name=category)
        product_links = [a["href"] for a in soup.select(".item .left-product a") if a["href"].startswith(base_url)]
        print(product_links)
        for product_url in product_links:
            driver.get(product_url)
            time.sleep(2)

            soup = BeautifulSoup(driver.page_source, "lxml")
            brand = soup.select_one("#product-details a")["href"].split("/")[-1].split('-')[1].capitalize() if soup.select_one("#product-details a") else ""
            brand, created = Brand.objects.get_or_create(name=brand)
            print(brand)
            product_data = {
                "title": soup.select_one(".h1").text.strip(),
                "slogan": soup.select_one(".product-information h2").text.strip() if soup.select_one(".product-information h2") else "",
                "price": soup.select_one(".product-prices .current-price span")["content"],
                "description": soup.select_one(".product-information p").text.strip(),
                "reviews": 0,
                "stock": 0,
                "promotion": 0,
                "category": category,
                "brand": brand,
            }
            img_tag = soup.select_one(".product-image img")
            img_url = urljoin(product_url, img_tag["src"])
            img_response = requests.get(img_url)
            if img_response.status_code == 200:
                img_temp = NamedTemporaryFile(delete=True)
                img_temp.write(img_response.content)
                img_temp.flush()

                # Save to Django model
                product = Product(**product_data)
                # Assuming your model has an ImageField called 'image'
                product.image.save(f"{product_data.get('title')[:50].replace(' ', '_')}.jpg", ContentFile(img_response.content), save=True)
            print(product_data)
            all_product_data.append(product_data)
            driver.back()
        try:
            # Wait for pagination to be present (max 3 seconds)
            WebDriverWait(driver, 3).until(
                EC.presence_of_element_located((By.CSS_SELECTOR, ".pagination"))
            )
            next_btn = driver.find_elements(By.CSS_SELECTOR, ".pagination .next")
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
