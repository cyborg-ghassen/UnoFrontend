import django_filters

from product.models import Product


class ProductFilter(django_filters.FilterSet):
    price = django_filters.NumberFilter(field_name="price", lookup_expr="lt")

    class Meta:
        model = Product
        exclude = ['image']
