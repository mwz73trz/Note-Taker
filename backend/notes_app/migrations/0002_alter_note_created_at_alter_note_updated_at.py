# Generated by Django 4.2.3 on 2023-07-23 13:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('notes_app', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='note',
            name='created_at',
            field=models.DateTimeField(auto_now_add=True),
        ),
        migrations.AlterField(
            model_name='note',
            name='updated_at',
            field=models.DateTimeField(auto_now=True),
        ),
    ]