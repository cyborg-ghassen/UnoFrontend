import django_filters

from setting.models import SiteSetting, PosterSetting


class SiteSettingFilter(django_filters.FilterSet):
    class Meta:
        model = SiteSetting
        fields = ['name', 'site']


class PosterSettingFilter(django_filters.FilterSet):
    class Meta:
        model = PosterSetting
        fields = ['name', 'site', 'position']
