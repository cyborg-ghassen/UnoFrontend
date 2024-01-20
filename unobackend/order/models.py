from django.contrib.auth.models import User
from django.db import models

from product.models import Product
from django.utils.translation import gettext_lazy as _

# Create your models here.
ORDER_TYPES = (
    ('physic', _('Physical')),
    ('company', _('Company')),
    ('passenger', _('Passenger'))
)

ORDER_STATUS = (
    ('draft', _('Draft')),
    ('approved', _('Approved')),
    ('rejected', _('Rejected'))
)


class Order(models.Model):
    user = models.ForeignKey(User, null=True, on_delete=models.SET_NULL, verbose_name=_("User"))
    type = models.CharField(max_length=100, choices=ORDER_TYPES, default='physic', null=True, blank=True, verbose_name=_("Type"))
    status = models.CharField(max_length=100, choices=ORDER_STATUS, default='draft', null=True, blank=True, verbose_name=_("Status"))
    full_name = models.CharField(max_length=100, verbose_name=_("Full name"))
    email = models.EmailField(null=True, blank=True, verbose_name=_("Email"))
    address = models.CharField(max_length=100, verbose_name=_("Address"))
    phone = models.CharField(max_length=100, verbose_name=_("Phone"))
    notes = models.TextField(null=True, blank=True, verbose_name=_("Notes"))
    created_at = models.DateTimeField(auto_now_add=True, verbose_name=_("Creation Date"))
    updated_at = models.DateTimeField(auto_now=True, verbose_name=_("Update Date"))

    class Meta:
        verbose_name = _("Order")
        verbose_name_plural = _("Orders")

    def __str__(self):
        return f"{_('Order')} {self.type}"


class OrderItem(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE, verbose_name=_("Order"))
    product = models.ForeignKey(Product, on_delete=models.CASCADE, verbose_name=_("Order"))
    quantity = models.IntegerField(verbose_name=_("Quantity"))

    def __str__(self):
        return f'{self.product.name if self.product else ""} - {self.quantity}'
