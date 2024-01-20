from rest_framework import routers

from .viewsets import RegistrationViewSet, LoginViewSet, UserViewSet

router = routers.DefaultRouter()

router.register(r'register', RegistrationViewSet, basename="registration")
router.register(r'login', LoginViewSet, basename="login")
router.register("user", UserViewSet, basename="users")

urlpatterns = router.urls
