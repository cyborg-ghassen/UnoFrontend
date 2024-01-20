from django.conf import settings
from rest_framework.permissions import BasePermission


class ViewAdmin(BasePermission):
    def has_permission(self, request, view):
        if request.user.is_authenticated and (
                settings.ADMIN_GROUP_NAME in [obj.name for obj in request.user.groups.all()] or
                request.user.is_superuser):
            return True

        return False


class ViewUser(BasePermission):
    def has_permission(self, request, view):
        if request.user.is_authenticated and (
                settings.USER_GROUP_NAME in [obj.name for obj in request.user.groups.all()]):
            return True

        return False
