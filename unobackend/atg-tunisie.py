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

base_url = "http://www.codifa.net/codifa/en/category/products/"

driver.get(base_url)
time.sleep(2)

soup = BeautifulSoup(driver.page_source, "lxml")
category_links = [a["href"] for a in soup.select(".list-prod li a")]

all_product_data = []
print(category_links)
for category_url in category_links:
    driver.get(f"{base_url}{category_url}")
    time.sleep(2)

    sub_category_links = [a["href"] for a in soup.select("#bas .list-prod li a")]
    print(sub_category_links)
    for sub_category_url in sub_category_links:
        driver.get(f"{base_url}{sub_category_url}")
        time.sleep(2)

        soup = BeautifulSoup(driver.page_source, "lxml")
        product_links = [a["href"] for a in soup.select(".list-prod li a")]
        print(product_links)
        for product_url in product_links:
            driver.get(product_url)
            time.sleep(2)

            soup = BeautifulSoup(driver.page_source, "lxml")
            product_data = {
                "name": soup.select_one(".col-detail-right .titre-detail").text.strip() if soup.select_one(".col-detail-right .titre-detail") else "",
                "description": soup.select(".col-detail-right .table-detail .bg-col2 td")[1].text.strip() if soup.select(".col-detail-right .table-detail .bg-col2 td") else "",
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
                img_tag = soup.select_one(".col-detail-left img")
                img_url = urljoin(product_url, img_tag["src"])
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
