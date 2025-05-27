from django.contrib.auth.models import User
from django.db import models

from product.models import Product
from django.utils.translation import gettext_lazy as _

# Create your models here.

ORDER_STATUS = (
    ('draft', _('Draft')),
    ('approved', _('Approved')),
    ('rejected', _('Rejected'))
)


class Order(models.Model):
    user = models.ForeignKey(User, null=True, on_delete=models.SET_NULL, verbose_name=_("User"))
    status = models.CharField(max_length=100, choices=ORDER_STATUS, default='draft', null=True, blank=True, verbose_name=_("Status"))
    full_name = models.CharField(max_length=100, verbose_name=_("Full name"))
    email = models.EmailField(null=True, blank=True, verbose_name=_("Email"))
    address = models.CharField(max_length=100, verbose_name=_("Address"))
    phone = models.CharField(max_length=100, verbose_name=_("Phone"))
    notes = models.TextField(null=True, blank=True, verbose_name=_("Notes"))
    payment_method = models.CharField(max_length=100, null=True, blank=True, verbose_name=_("Payment Method"), choices=[
        ('tpe', _('TPE à la livraison')),
        ('cash_on_delivery', _('Cash à la livraison')),
    ], default='cash_on_delivery')
    shipment_method = models.CharField(max_length=100, null=True, blank=True, verbose_name=_("Shipment Method"), choices=[
        ('domicile', _('Livraison à domicile')),
        ('magasin', _('Livraison au magasin')),
    ], default='domicile')
    created_at = models.DateTimeField(auto_now_add=True, verbose_name=_("Creation Date"))
    updated_at = models.DateTimeField(auto_now=True, verbose_name=_("Update Date"))

    class Meta:
        verbose_name = _("Order")
        verbose_name_plural = _("Orders")

    @property
    def total_cost(self):
        total = 0
        for item in self.orderitem_set.all():
            total += item.total

        return total

    def __str__(self):
        return f"{_('Order')} {self.get_status_display()}"


class OrderItem(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE, verbose_name=_("Order"))
    product = models.ForeignKey(Product, on_delete=models.CASCADE, verbose_name=_("Order"))
    quantity = models.IntegerField(verbose_name=_("Quantity"))

    @property
    def total(self):
        return self.product.price_promoted * self.quantity if self.product else 0

    def __str__(self):
        return f'{self.product.name if self.product else ""} - {self.quantity}'
