from django.contrib import admin

from .models import Product, Category, Brand


# Register your models here.
@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('name', 'price', 'stock')


admin.site.register(Category)
admin.site.register(Brand)
