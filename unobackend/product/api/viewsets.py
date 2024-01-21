from django_filters.rest_framework import DjangoFilterBackend
from product.models import Category, Product
from rest_framework import viewsets, filters, status
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework.response import Response

from .filters import ProductFilter
from .serializers import CategorySerializer, ProductSerializer, BrandSerializer
from ..models import Brand


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.order_by('-id')
    serializer_class = CategorySerializer
    permission_classes = [IsAuthenticatedOrReadOnly]


class BrandViewSet(viewsets.ModelViewSet):
    queryset = Brand.objects.order_by('-id')
    serializer_class = BrandSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]


class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.order_by('-created_at')
    serializer_class = ProductSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    filterset_class = ProductFilter
    search_fields = [
        'name',
        'slogan'
    ]

    def daily_deal(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())
        if queryset is not None:
            serializer = self.get_serializer(queryset.exclude(promotion=0).order_by("-updated_at"), many=True)
            return Response(serializer.data)

    def best_products(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())
        if queryset is not None:
            serializer = self.get_serializer(queryset.order_by("-reviews"), many=True)
            return Response(serializer.data)

    def related_products(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())
        try:
            product = Product.objects.get(id=request.GET.get("product"))
            if queryset:
                serializer = self.get_serializer(queryset.filter(category__in=product.category.all()).exclude(id=product.id), many=True)
                return Response(serializer.data, status=status.HTTP_200_OK)
        except Product.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
