from rest_framework import routers

from .viewsets import RegistrationViewSet, LoginViewSet

router = routers.DefaultRouter()

router.register(r'register', RegistrationViewSet, basename="registration")
router.register(r'login', LoginViewSet, basename="login")

urlpatterns = router.urls
