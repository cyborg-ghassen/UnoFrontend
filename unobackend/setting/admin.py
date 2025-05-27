from django.contrib import admin

from .models import SiteSetting, PosterSetting, Link, SubLink


# Register your models here.
@admin.register(SiteSetting)
class SiteSettingAdmin(admin.ModelAdmin):
    list_display = ('name', 'site')


@admin.register(PosterSetting)
class PosterSettingAdmin(admin.ModelAdmin):
    list_display = ('name', 'site')


class LinkInline(admin.TabularInline):
    model = SubLink
    extra = 0


@admin.register(Link)
class LinkAdmin(admin.ModelAdmin):
    list_display = ('name',)
    inlines = [LinkInline]


@admin.register(SubLink)
class SubLinkAdmin(admin.ModelAdmin):
    list_display = ('name', 'link')

    def display_categories(self, obj):
        return ', '.join([category.name for category in obj.categories.all()])

    display_categories.short_description = 'Categories'
