from rest_framework import serializers

from product.models import Category, Product


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'


class ProductSerializer(serializers.ModelSerializer):
    category_names = serializers.SerializerMethodField()

    class Meta:
        model = Product
        fields = '__all__'

    def get_category_names(self, obj):
        return [cat.name for cat in obj.category.all()]
