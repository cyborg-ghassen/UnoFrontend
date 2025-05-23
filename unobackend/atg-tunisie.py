import os
import time
from urllib.parse import urljoin

import django
import requests
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service
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

base_url = "https://sodet.com.tn/"

driver.get(base_url)
time.sleep(2)

soup = BeautifulSoup(driver.page_source, "lxml")
category_links = [a["href"] for a in soup.select("#menu-item-322 .sub-menu a")]

all_product_data = []
print(category_links)
for category_url in category_links:
    driver.get(category_url)
    time.sleep(2)

    soup = BeautifulSoup(driver.page_source, "lxml")
    product_links = [a["href"] for a in soup.select(".box-image .image-zoom_in a")]
    print(product_links)
    for product_url in product_links:
        driver.get(product_url)
        time.sleep(2)

        soup = BeautifulSoup(driver.page_source, "lxml")
        categories = soup.select(".product-info .product_meta span a")

        brand = soup.select_one(".product-info h1").text.strip() if soup.select_one(".product-info h1") else ""
        print(brand)
        if Brand.objects.filter(name=brand).exists():
            brand_instance = Brand.objects.filter(name=brand).first()
        else:
            brand_instance = Brand.objects.create(name=brand)
        product_data = {
            "name": soup.select_one(".product-info h1").text.strip() if soup.select_one(".product-info h1") else "",
            "description": soup.select_one(".product-info .product-short-description p").text.strip() if soup.select_one(".product-info .product-short-description p") else "",
            "price": 0,
            "slogan": "",
            "reviews": 0,
            "stock": 0,
            "promotion": 0,
            "brand": brand_instance,
        }
        if Product.objects.filter(**product_data).exists():
            product = Product.objects.filter(**product_data).first()
            print(f"Product already exists: {product_data['name']}")
            continue
        else:
            product = Product.objects.create(**product_data)
            for category in categories:
                category_name = category.text.strip()
                if not Category.objects.filter(name=category_name).exists():
                    category_instance = Category.objects.create(name=category_name)
                else:
                    category_instance = Category.objects.get(name=category_name)
                product.category.add(category_instance)
            img_tag = soup.select_one(".woocommerce-product-gallery__wrapper .woocommerce-product-gallery__image a img")
            img_url = urljoin(product_url, img_tag["src"])
            img_response = requests.get(img_url)
            if img_response.status_code == 200:
                img_temp = NamedTemporaryFile(delete=True)
                img_temp.write(img_response.content)
                img_temp.flush()

                # Save to a Django model

                # Assuming your model has an ImageField called 'image'
                product.image.save(f"{soup.select_one('.product-info h1').text.strip()}.jpg", ContentFile(img_response.content), save=True)
        print(product_data)
        all_product_data.append(product_data)
