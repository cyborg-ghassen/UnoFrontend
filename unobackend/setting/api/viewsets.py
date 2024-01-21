from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticatedOrReadOnly

from .filters import SiteSettingFilter, PosterSettingFilter, ServiceSettingFilter, TestimonialSettingFilter
from .serializers import SiteSettingSerializer, PosterSettingSerializer, ServiceSettingSerializer, \
    TestimonialSettingSerializer, MagazineSettingSerializer
from setting.models import SiteSetting, PosterSetting, ServiceSetting, TestimonialSetting, MagazineSetting


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


class ServiceSettingViewSet(viewsets.ModelViewSet):
    queryset = ServiceSetting.objects.order_by('id')
    serializer_class = ServiceSettingSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]
    filter_backends = [DjangoFilterBackend]
    filterset_class = ServiceSettingFilter


class TestimonialSettingViewSet(viewsets.ModelViewSet):
    queryset = TestimonialSetting.objects.order_by('id')
    serializer_class = TestimonialSettingSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]
    filter_backends = [DjangoFilterBackend]
    filterset_class = TestimonialSettingFilter


class MagazineSettingViewSet(viewsets.ModelViewSet):
    queryset = MagazineSetting.objects.order_by('-id')
    serializer_class = MagazineSettingSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]
