# Generated by Django 4.1.5 on 2023-06-28 09:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('lms_api', '0003_teacher_confirm_password'),
    ]

    operations = [
        migrations.AlterField(
            model_name='teacher',
            name='address',
            field=models.TextField(blank=True),
        ),
        migrations.AlterField(
            model_name='teacher',
            name='mobile_no',
            field=models.CharField(blank=True, max_length=12),
        ),
        migrations.AlterField(
            model_name='teacher',
            name='postCode',
            field=models.CharField(blank=True, max_length=10),
        ),
    ]