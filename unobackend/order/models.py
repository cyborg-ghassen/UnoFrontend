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
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    type = models.CharField(max_length=100, choices=ORDER_TYPES, default='physic')
    status = models.CharField(max_length=100, choices=ORDER_STATUS, default='draft')
    full_name = models.CharField(max_length=100)
    email = models.EmailField()
    address = models.CharField(max_length=100)
    phone = models.CharField(max_length=100)
    notes = models.TextField()
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
