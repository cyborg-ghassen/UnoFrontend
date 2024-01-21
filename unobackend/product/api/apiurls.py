from django.urls import path
from rest_framework import routers

from .viewsets import CategoryViewSet, ProductViewSet, BrandViewSet

router = routers.DefaultRouter()
router.register(r'category', CategoryViewSet, basename='category')
router.register(r'product', ProductViewSet, basename='product')
router.register("brand", BrandViewSet, basename='brand')

urlpatterns = [
    *router.urls,
    path('daily_deals/', ProductViewSet.as_view({'get': 'daily_deal'}), name='daily_deals'),
    path('best_products/', ProductViewSet.as_view({'get': 'best_products'}), name='best_products'),
    path('related_products/', ProductViewSet.as_view({'get': 'related_products'}), name='related_products'),
]
