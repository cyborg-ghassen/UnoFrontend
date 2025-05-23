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

for i in range(1, 25):
    base_url = f"https://sopen.tn/boutique/page/{i}/"

    driver.get(base_url)
    time.sleep(2)
    all_product_data = []
    soup = BeautifulSoup(driver.page_source, "lxml")
    product_links = [a["href"] for a in soup.select(".product-wrapper .product-element-bottom .wd-entities-title a")]
    print(product_links)
    for product_url in product_links:
        driver.get(product_url)
        time.sleep(2)

        soup = BeautifulSoup(driver.page_source, "lxml")
        product_data = {
            "name": soup.select_one(".elementor-container .elementor-widget-wrap .elementor-widget-container .product_title").text.strip() if soup.select_one(".elementor-container .elementor-widget-wrap .elementor-widget-container .product_title") else "",
            "slogan": soup.select_one(".woocommerce-product-details__short-description").text.strip() if soup.select_one(".woocommerce-product-details__short-description") else "",
            "price": soup.select_one(".elementor-widget-container .price .woocommerce-Price-amount bdi").text.strip()[:5].replace(',', '.') if soup.select_one(".elementor-widget-container .price .woocommerce-Price-amount bdi") else 0,
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
