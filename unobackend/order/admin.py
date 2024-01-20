from django.contrib import admin

from .models import Order, OrderItem

from .forms import OrderItemInlineFormSet


# Register your models here.
class OrderItemInline(admin.TabularInline):
    model = OrderItem
    extra = 1
    formset = OrderItemInlineFormSet


@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = ('user', 'status', 'full_name', 'email', 'phone')
    inlines = [OrderItemInline]
