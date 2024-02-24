from django.contrib.sites.models import Site
from django.db import models
from django.template.context_processors import static
from django.utils.translation import gettext_lazy as _


# Create your models here.
class SiteSetting(models.Model):
    name = models.CharField(max_length=100, verbose_name=_('Name'))
    slogan = models.CharField(max_length=100, verbose_name=_('Slogan'))
    home_cover = models.ImageField(upload_to="home_cover", verbose_name=_('Home cover'),
                                   default=static("clean_boutique_desk.jpg"), null=True, blank=True)
    product_cover = models.ImageField(upload_to="product_cover", verbose_name=_('Product cover'), null=True, blank=True,
                                      default=static("CleanProducts.jpg"))
    banner_best_products = models.ImageField(upload_to="banner_best_products", verbose_name=_('Best products Picture'), null=True, blank=True)
    about_me = models.TextField(verbose_name=_('About'))
    site = models.OneToOneField(Site, on_delete=models.CASCADE, verbose_name=_('Site'))

    class Meta:
        verbose_name = _('Site Setting')
        verbose_name_plural = _('Site Settings')

    def __str__(self):
        return self.name


class PosterSetting(models.Model):
    name = models.CharField(max_length=100, verbose_name=_('Name'))
    image = models.ImageField(upload_to="poster", verbose_name=_('Image'))
    site = models.ForeignKey(Site, on_delete=models.CASCADE, verbose_name=_('Site'))

    class Meta:
        verbose_name = _('Poster Setting')
        verbose_name_plural = _('Poster Settings')

    def __str__(self):
        return self.name


class ServiceSetting(models.Model):
    name = models.CharField(max_length=100, verbose_name=_('Name'))
    svg_code = models.TextField(verbose_name=_('Svg Code'))
    site = models.ForeignKey(Site, on_delete=models.CASCADE, verbose_name=_('Site'))

    class Meta:
        verbose_name = _('Service Setting')
        verbose_name_plural = _('Service Settings')

    def __str__(self):
        return self.name


class TestimonialSetting(models.Model):
    name = models.CharField(max_length=100, verbose_name=_('Name'))
    image = models.ImageField(upload_to="photo", verbose_name=_('Image'))
    slogan = models.CharField(max_length=100, verbose_name=_('Slogan'))
    comment = models.TextField(verbose_name=_('Comment'))
    site = models.ForeignKey(Site, on_delete=models.CASCADE, verbose_name=_('Site'))

    class Meta:
        verbose_name = _('Testimonial Setting')
        verbose_name_plural = _('Testimonials')

    def __str__(self):
        return self.name


class MagazineSetting(models.Model):
    name = models.CharField(max_length=100, verbose_name=_('Name'))
    image = models.ImageField(upload_to="magazine", verbose_name=_('Image'))
    description = models.TextField(verbose_name=_('Description'))
    site = models.ForeignKey(Site, on_delete=models.CASCADE, verbose_name=_('Site'))

    class Meta:
        verbose_name = _('Magazine Setting')
        verbose_name_plural = _('Magazines')

    def __str__(self):
        return self.name
