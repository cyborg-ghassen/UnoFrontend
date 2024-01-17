from rest_framework import routers

from .viewsets import CategoryViewSet, ProductViewSet, BrandViewSet

router = routers.DefaultRouter()
router.register(r'category', CategoryViewSet, basename='category')
router.register(r'product', ProductViewSet, basename='product')
router.register("brand", BrandViewSet, basename='brand')

urlpatterns = router.urls
