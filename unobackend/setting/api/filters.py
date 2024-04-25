import django_filters

from setting.models import SiteSetting, PosterSetting, ServiceSetting, TestimonialSetting


class SiteSettingFilter(django_filters.FilterSet):
    class Meta:
        model = SiteSetting
        fields = ['name', 'site']


class PosterSettingFilter(django_filters.FilterSet):
    class Meta:
        model = PosterSetting
        fields = ['name', 'site', 'position']


class ServiceSettingFilter(django_filters.FilterSet):
    class Meta:
        model = ServiceSetting
        fields = ['name', 'site']


class TestimonialSettingFilter(django_filters.FilterSet):
    class Meta:
        model = TestimonialSetting
        fields = ['name', 'site']
