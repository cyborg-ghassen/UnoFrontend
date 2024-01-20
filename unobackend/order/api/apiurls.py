from rest_framework import routers

from.viewsets import OrderItemViewSet, OrderViewSet

router = routers.DefaultRouter()

router.register(r'items', OrderItemViewSet, basename='items')
router.register(r'order', OrderViewSet, basename='order')

urlpatterns = router.urls
