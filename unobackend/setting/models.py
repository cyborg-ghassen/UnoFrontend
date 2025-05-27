from django.contrib.sites.models import Site
from django.db import models
from django.template.context_processors import static
from django.utils.translation import gettext_lazy as _

from product.models import Category


# Create your models here.
class SiteSetting(models.Model):
    name = models.CharField(max_length=100, verbose_name=_('Name'))
    banner_best_products = models.ImageField(upload_to="banner_best_products", verbose_name=_('Best products Picture'), null=True, blank=True)
    site = models.OneToOneField(Site, on_delete=models.CASCADE, verbose_name=_('Site'))

    class Meta:
        verbose_name = _('Side Banner')
        verbose_name_plural = _('Side Banners')

    def __str__(self):
        return self.name


class PosterSetting(models.Model):
    name = models.CharField(max_length=100, verbose_name=_('Name'))
    image = models.ImageField(upload_to="poster", verbose_name=_('Image'))
    position = models.CharField(max_length=100, verbose_name=_('Position'), choices=(('top', 'Top'), ('bottom', 'Bottom')))
    site = models.ForeignKey(Site, on_delete=models.CASCADE, verbose_name=_('Site'))

    class Meta:
        verbose_name = _('Poster Setting')
        verbose_name_plural = _('Poster Settings')

    def __str__(self):
        return self.name


class Link(models.Model):
    name = models.CharField(max_length=100, verbose_name=_('Name'))

    def __str__(self):
        return self.name


class SubLink(models.Model):
    name = models.CharField(max_length=100, verbose_name=_('Name'))
    categories = models.ManyToManyField(Category, verbose_name=_('Categories'), blank=True)
    link = models.ForeignKey(Link, on_delete=models.CASCADE, verbose_name=_('Link'))

    @property
    def link_name(self):
        return self.link.name if self.link else ''

    def __str__(self):
        return self.name
