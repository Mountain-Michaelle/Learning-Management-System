# Generated by Django 4.1.5 on 2023-07-07 14:18

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('lms_api', '0003_alter_teacher_phone_number'),
    ]

    operations = [
        migrations.AlterField(
            model_name='course',
            name='teacher',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='lms_api.teacher'),
            preserve_default=False,
        ),
    ]
