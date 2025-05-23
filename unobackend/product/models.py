from django.db import models
from django.utils.translation import gettext_lazy as _

from utils.views import reformat_number


# Create your models here.
class Category(models.Model):
    name = models.CharField(verbose_name=_("Name"), max_length=100)

    class Meta:
        verbose_name_plural = _("Categories")
        verbose_name = _("Category")

    def __str__(self):
        return self.name


class Brand(models.Model):
    name = models.CharField(verbose_name=_("Name"), max_length=100)

    class Meta:
        verbose_name_plural = _("Brands")
        verbose_name = _("Brand")

    def __str__(self):
        return self.name


class Product(models.Model):
    name = models.CharField(verbose_name=_("Name"), max_length=256)
    price = models.DecimalField(verbose_name=_("Price"), max_digits=7, decimal_places=3)
    category = models.ManyToManyField(verbose_name=_("Category"), to=Category, blank=True)
    brand = models.ForeignKey(Brand, on_delete=models.SET_NULL, null=True, blank=True,verbose_name=_("Brand"))
    description = models.TextField(verbose_name=_("Description"), null=True, blank=True)
    image = models.ImageField(upload_to='products', verbose_name=_("Image"), null=True, blank=True)
    reviews = models.IntegerField(default=0, verbose_name=_("Reviews"))
    slogan = models.CharField(max_length=256, verbose_name=_("Slogan"), null=True, blank=True)
    stock = models.IntegerField(default=0, verbose_name=_("Stock"))
    promotion = models.IntegerField(default=0, verbose_name=_("Promotion"))
    created_at = models.DateTimeField(auto_now_add=True, verbose_name=_("Creation Date"))
    updated_at = models.DateTimeField(auto_now=True, verbose_name=_("Update Date"))

    class Meta:
        verbose_name = _("Product")
        verbose_name_plural = _("Products")

    @property
    def price_promoted(self):
        return round(self.price - ((self.price * self.promotion) / 100), 3)

    @property
    def price_promotion(self):
        return reformat_number(self.price_promoted)

    @property
    def image_url(self):
        if self.image:
            return self.image.url

        return None

    def __str__(self):
        return self.name
