from product.api.serializers import ProductSerializer
from product.models import Product
from rest_framework import viewsets, status
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework.response import Response

from .serializers import OrderItemSerializer, OrderSerializer
from order.models import Order

from utils.views import reformat_number
from django.utils.translation import gettext_lazy as _


class OrderItemViewSet(viewsets.ViewSet):
    def create(self, request):
        serializer = OrderItemSerializer(data=request.data, many=True)
        serializer.is_valid(raise_exception=True)

        total_price = 0
        products_data = []
        for item_data in serializer.validated_data:
            product = item_data['product']
            quantity = item_data['quantity']

            product = Product.objects.get(pk=product.pk)
            individual_price = int(product.price_promoted) * quantity
            total_price += individual_price

            product_data = {
                'product': ProductSerializer(product).data,
                'quantity': quantity,
                'individual_price': reformat_number(individual_price),
            }
            products_data.append(product_data)

        response_data = {
            'total_price': reformat_number(total_price),
            'products': products_data,
        }
        return Response(response_data)


class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.order_by("-created_at")
    serializer_class = OrderSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        order = Order.objects.get(pk=serializer.data.get('id'))
        if self.request.user.is_authenticated:
            order.user = self.request.user
            order.save()
            headers = self.get_success_headers(serializer.data)
            return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)
        else:
            return Response({"detail": _("You do not have permission to perform this action")},
                            status=status.HTTP_401_UNAUTHORIZED)
