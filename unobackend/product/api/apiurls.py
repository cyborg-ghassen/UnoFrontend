from rest_framework import routers

from .viewsets import CategoryViewSet, ProductViewSet

router = routers.DefaultRouter()
router.register(r'category', CategoryViewSet, basename='category')
router.register(r'product', ProductViewSet, basename='product')

urlpatterns = router.urls
