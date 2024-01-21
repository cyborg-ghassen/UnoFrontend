from django.contrib import admin

from .models import SiteSetting, PosterSetting, ServiceSetting, TestimonialSetting, MagazineSetting


# Register your models here.
@admin.register(SiteSetting)
class SiteSettingAdmin(admin.ModelAdmin):
    list_display = ('name', 'site')


@admin.register(PosterSetting)
class PosterSettingAdmin(admin.ModelAdmin):
    list_display = ('name', 'site')


@admin.register(ServiceSetting)
class ServiceSettingAdmin(admin.ModelAdmin):
    list_display = ('name', 'site')


@admin.register(TestimonialSetting)
class TestimonialSettingAdmin(admin.ModelAdmin):
    list_display = ('name', 'slogan', 'site')


@admin.register(MagazineSetting)
class MagazineSettingAdmin(admin.ModelAdmin):
    list_display = ('name', 'site')
