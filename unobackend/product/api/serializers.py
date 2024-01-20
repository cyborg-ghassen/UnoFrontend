from rest_framework import serializers

from product.models import Category, Product, Brand


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'


class BrandSerializer(serializers.ModelSerializer):
    class Meta:
        model = Brand
        fields = '__all__'


class ProductSerializer(serializers.ModelSerializer):
    category_names = serializers.SerializerMethodField()
    image_url = serializers.SerializerMethodField()

    class Meta:
        model = Product
        fields = '__all__'

    def get_category_names(self, obj):
        return [cat.name for cat in obj.category.all()]

    def get_image_url(self, obj):
        return obj.image_url
