"""
URL configuration for unobackend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
import os

from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include
from django.views.generic import RedirectView
from rest_framework_simplejwt.views import TokenObtainSlidingView, TokenRefreshSlidingView
from django.views.i18n import set_language
from django.utils.translation import gettext_lazy as _

urlpatterns = [
    path('', RedirectView.as_view(url='/admin/', permanent=False)),
    path('admin/', admin.site.urls),
    path('i18n/', set_language, name='set_language'),
    path('api/v1/product/', include(('product.api.apiurls', 'product'), namespace='product-api')),
    path('api/v1/order/', include(('order.api.apiurls', 'order'), namespace='order-api')),
    path('api/v1/setting/', include(('setting.api.apiurls', 'setting'), namespace='setting-api')),
    path('api/v1/auth/', include(('accounts.api.apiurls', 'accounts'), namespace='accounts-api')),
    path('api/v1/token/', TokenObtainSlidingView.as_view(), name='token_obtain'),
    path('api/v1/token/refresh/', TokenRefreshSlidingView.as_view(), name='token_refresh'),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT) if not os.environ.get(
    'USE_S3') == 'on' else []

admin.site.site_header = _("UNO Admin")
admin.site.site_title = _("UNO Admin Portal")
admin.site.index_title = _("Welcome to Uno Portal")
