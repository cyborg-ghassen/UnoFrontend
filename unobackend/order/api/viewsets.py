from rest_framework import viewsets
from rest_framework.response import Response

from .serializers import OrderItemSerializer
from product.models import Product

from product.api.serializers import ProductSerializer


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
