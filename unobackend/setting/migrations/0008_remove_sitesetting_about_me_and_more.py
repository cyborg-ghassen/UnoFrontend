# Generated by Django 5.0.1 on 2024-04-25 20:46

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('setting', '0007_postersetting_position'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='sitesetting',
            name='about_me',
        ),
        migrations.RemoveField(
            model_name='sitesetting',
            name='home_cover',
        ),
        migrations.RemoveField(
            model_name='sitesetting',
            name='product_cover',
        ),
        migrations.RemoveField(
            model_name='sitesetting',
            name='slogan',
        ),
    ]