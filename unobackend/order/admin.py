from django.contrib import admin

from .forms import OrderItemInlineFormSet
from .models import Order, OrderItem


# Register your models here.
class ItemInline(admin.TabularInline):
    model = OrderItem
    extra = 1
    formset = OrderItemInlineFormSet


@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = ('user', 'status', 'full_name', 'email', 'phone')
    inlines = [ItemInline]

    actions = ['approve_orders', 'reject_orders']

    search_fields = ['user__username', 'full_name', 'email', 'phone']
    list_filter = ['status']

    def approve_orders(self, request, queryset):
        # Update the status of selected orders to 'Approved'
        for order in queryset:
            order.status = 'approved'
            order.save()

    approve_orders.short_description = "Approve selected orders"

    def reject_orders(self, request, queryset):
        # Update the status of selected orders to 'Rejected'
        for order in queryset:
            order.status = 'rejected'
            order.save()

    reject_orders.short_description = "Reject selected orders"
