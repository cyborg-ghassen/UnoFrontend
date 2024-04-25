from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticatedOrReadOnly

from .filters import SiteSettingFilter, PosterSettingFilter
from .serializers import SiteSettingSerializer, PosterSettingSerializer, LinkSerializer, SubLinkSerializer
from setting.models import SiteSetting, PosterSetting, Link, SubLink


class SiteSettingViewSet(viewsets.ModelViewSet):
    queryset = SiteSetting.objects.order_by('-id')
    serializer_class = SiteSettingSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]
    filter_backends = [DjangoFilterBackend]
    filterset_class = SiteSettingFilter


class PosterSettingViewSet(viewsets.ModelViewSet):
    queryset = PosterSetting.objects.order_by('id')
    serializer_class = PosterSettingSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]
    filter_backends = [DjangoFilterBackend]
    filterset_class = PosterSettingFilter


class LinkViewSet(viewsets.ModelViewSet):
    queryset = Link.objects.order_by('id')
    serializer_class = LinkSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]


class SubLinkViewSet(viewsets.ModelViewSet):
    queryset = SubLink.objects.order_by('id')
    serializer_class = SubLinkSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]
