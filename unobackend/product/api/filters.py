import django_filters

from product.models import Product


class ProductFilter(django_filters.FilterSet):
    price = django_filters.NumberFilter(field_name="price", lookup_expr="lt")
    brand = django_filters.CharFilter(method="filter_brand")
    category = django_filters.CharFilter(method="filter_category")

    class Meta:
        model = Product
        exclude = ['image', 'brand', 'category']

    def filter_brand(self, queryset, name, value):
        values = value.split(',')
        return queryset.filter(brand__in=values)

    def filter_category(self, queryset, name, value):
        values = value.split(',')
        return queryset.filter(category__in=values)
