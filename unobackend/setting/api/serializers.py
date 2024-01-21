from rest_framework import serializers

from setting.models import SiteSetting, PosterSetting, ServiceSetting, TestimonialSetting, MagazineSetting


class SiteSettingSerializer(serializers.ModelSerializer):
    class Meta:
        model = SiteSetting
        fields = '__all__'


class PosterSettingSerializer(serializers.ModelSerializer):
    class Meta:
        model = PosterSetting
        fields = '__all__'


class ServiceSettingSerializer(serializers.ModelSerializer):
    class Meta:
        model = ServiceSetting
        fields = "__all__"


class TestimonialSettingSerializer(serializers.ModelSerializer):
    class Meta:
        model = TestimonialSetting
        fields = "__all__"


class MagazineSettingSerializer(serializers.ModelSerializer):
    class Meta:
        model = MagazineSetting
        fields = "__all__"
