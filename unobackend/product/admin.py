from django.contrib import admin

from .models import Product, Category, Brand


# Register your models here.
@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('name', 'price', 'stock')
    search_fields = ('name', 'category__name', 'brand__name', 'price', 'slogan', 'description', 'promotion', 'reviews', 'created_at', 'updated_at')
    list_filter = ('category', 'brand', 'created_at', 'updated_at')
    list_per_page = 20
    ordering = ('-created_at',)
    fieldsets = (
        (None, {
            'fields': ('name', 'price', 'category', 'brand', 'description', 'image', 'reviews', 'slogan', 'stock', 'promotion')
        }),
        ('Dates', {
            'fields': ('created_at', 'updated_at'),
            'classes': ('collapse',),
        }),
    )
    readonly_fields = ('created_at', 'updated_at')


admin.site.register(Category)
admin.site.register(Brand)
