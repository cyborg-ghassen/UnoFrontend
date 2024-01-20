from product.api.serializers import ProductSerializer
from product.models import Product
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework.response import Response

from .serializers import OrderItemSerializer, OrderSerializer
from ..models import Order


class OrderItemViewSet(viewsets.ViewSet):
    def create(self, request):
        serializer = OrderItemSerializer(data=request.data, many=True)
        serializer.is_valid(raise_exception=True)

        total_price = 0
        products_data = []
        for item_data in serializer.validated_data:
            product_id = item_data['product_id']
            quantity = item_data['quantity']

            product = Product.objects.get(pk=product_id)
            individual_price = product.price * quantity
            total_price += individual_price

            product_data = {
                'product': ProductSerializer(product).data,
                'quantity': quantity,
                'individual_price': individual_price,
            }
            products_data.append(product_data)

        response_data = {
            'total_price': total_price,
            'products': products_data,
        }
        return Response(response_data)


class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.order_by("-created_at")
    serializer_class = OrderSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]
