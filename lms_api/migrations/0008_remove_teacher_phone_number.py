# Generated by Django 4.1.5 on 2023-07-12 10:40

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('lms_api', '0007_alter_course_teacher'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='teacher',
            name='phone_number',
        ),
    ]