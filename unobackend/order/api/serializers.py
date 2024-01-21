from rest_framework import serializers

from order.models import Order, OrderItem
from django.utils.translation import gettext_lazy as _


class OrderItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderItem
        fields = ["product", "quantity"]


class OrderSerializer(serializers.ModelSerializer):
    items = OrderItemSerializer(many=True, write_only=True)

    class Meta:
        model = Order
        fields = '__all__'

    def validate(self, attrs):
        items = attrs.get("items", None)

        errors = {}

        if not items or len(items) <= 0:
            errors.update({"items": _("Enter at least one item.")})

        if items:
            for item in items:
                print(item)
                item = OrderItemSerializer(data={"product": item['product'].id, "quantity": item['quantity']})
                if not item.is_valid():
                    errors.update(item.errors)

        if errors:
            raise serializers.ValidationError(errors)

        return attrs

    def create(self, validated_data):
        items = validated_data.pop("items", None)
        order = Order.objects.create(**validated_data)
        for item in items:
            OrderItem.objects.create(order=order, **item)

        return order

    def update(self, instance, validated_data):
        items = validated_data.pop("items", None)

        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()

        if items:
            OrderItem.objects.filter(coli=instance).delete()

            for product in items:
                OrderItem.objects.create(coli=instance, **product)

        return instance

