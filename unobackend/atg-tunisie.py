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

base_url = "http://www.codifa.net/codifa/en/category/products/"

driver.get(base_url)
time.sleep(5)

all_product_data = []

soup = BeautifulSoup(driver.page_source, "lxml")
category_links = [f'{a["href"]}' if a['href'].startswith('http') else f'{base_url}{a["href"]}' for a in soup.select(".list-prod ul li a")]

products = soup.select(".filter-list .gallery-item")
print(category_links)

for category_url in category_links:
    driver.get(category_url)
    time.sleep(5)
    soup = BeautifulSoup(driver.page_source, "lxml")
    category = soup.select(".titre-frame span")[0].text.strip() if soup.select(".titre-frame span") else ""
    if Category.objects.filter(name=category).exists():
        category = Category.objects.filter(name=category).first()
        print(f"Category already exists: {category}")
    else:
        category = Category.objects.create(name=category)
    print(category)

    product_links = soup.select(".list-prod ul li")
    for product_url in product_links:
        product_data = {
            "name": product_url.select_one(".bloc-des").text.strip(),
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
            product.category.add(category)
            img_tag = product_url.select_one(".bloc-img img")
            img_url = urljoin(f'{product_url.select_one("a")["href"]}', f'{img_tag["src"]}')
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
