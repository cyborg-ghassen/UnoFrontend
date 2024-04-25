from rest_framework import serializers

from setting.models import SiteSetting, PosterSetting, SubLink, Link

from product.api.serializers import CategorySerializer


class SiteSettingSerializer(serializers.ModelSerializer):
    class Meta:
        model = SiteSetting
        fields = '__all__'


class PosterSettingSerializer(serializers.ModelSerializer):
    class Meta:
        model = PosterSetting
        fields = '__all__'


class SubLinkSerializer(serializers.ModelSerializer):
    categories_set = CategorySerializer(many=True, read_only=True, source='categories')
    link_name = serializers.SerializerMethodField()

    class Meta:
        model = SubLink
        fields = "__all__"

    def get_link_name(self, obj):
        return obj.link_name


class LinkSerializer(serializers.ModelSerializer):
    sublink_set = SubLinkSerializer(many=True, read_only=True)

    class Meta:
        model = Link
        fields = "__all__"
