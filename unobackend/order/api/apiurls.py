from rest_framework import routers

from.viewsets import OrderItemViewSet

router = routers.DefaultRouter()

router.register(r'items', OrderItemViewSet, basename='items')

urlpatterns = router.urls
