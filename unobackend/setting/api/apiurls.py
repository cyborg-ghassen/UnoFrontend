from rest_framework import routers
from .viewsets import *


router = routers.DefaultRouter()

router.register(r'site', SiteSettingViewSet, basename='sitesetting')
router.register(r'poster', PosterSettingViewSet, basename='postersetting')
router.register(r'service', ServiceSettingViewSet, basename='servicesetting')
router.register(r'testimonial', TestimonialSettingViewSet, basename='testimonialsettings')
router.register(r'magazine', MagazineSettingViewSet, basename='magazinesetting')
router.register(r'link', LinkViewSet, basename='link')
router.register(r'sublink', SubLinkViewSet, basename='sublink')

urlpatterns = router.urls
