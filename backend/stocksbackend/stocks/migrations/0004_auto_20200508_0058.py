# Generated by Django 3.0.6 on 2020-05-07 22:58

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('stocks', '0003_price_volume'),
    ]

    operations = [
        migrations.RenameField(
            model_name='price',
            old_name='ticker',
            new_name='symbol',
        ),
        migrations.RenameField(
            model_name='stock',
            old_name='ticker',
            new_name='symbol',
        ),
    ]