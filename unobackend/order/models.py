from django.contrib.auth.models import User
from django.db import models

from product.models import Product

# Create your models here.
ORDER_TYPES = (
    ('physic', 'Physical'),
    ('company', 'Company'),
    ('passenger', 'Passenger')
)

ORDER_STATUS = (
    ('draft', 'Draft'),
    ('approved', 'Approved'),
    ('rejected', 'Rejected')
)


class Order(models.Model):
    user = models.ForeignKey(User, null=True, on_delete=models.SET_NULL)
    type = models.CharField(max_length=100, choices=ORDER_TYPES, default='physic', null=True, blank=True)
    status = models.CharField(max_length=100, choices=ORDER_STATUS, default='draft', null=True, blank=True)
    full_name = models.CharField(max_length=100)
    email = models.EmailField(null=True, blank=True)
    address = models.CharField(max_length=100)
    phone = models.CharField(max_length=100)
    notes = models.TextField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"Order {self.type}"


class OrderItem(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.IntegerField()

    def __str__(self):
        return f'{self.product.name if self.product else ""} - {self.quantity}'
