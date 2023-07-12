# Generated by Django 4.1.5 on 2023-07-07 13:09

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='CourseCategory',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('description', models.TextField()),
            ],
            options={
                'verbose_name_plural': 'Course Categories',
            },
        ),
        migrations.CreateModel(
            name='Student',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('full_name', models.CharField(max_length=100)),
                ('email', models.EmailField(max_length=100)),
                ('password', models.CharField(max_length=100)),
                ('qualification', models.CharField(max_length=200)),
                ('mobile_no', models.CharField(max_length=20)),
                ('address', models.TextField()),
                ('interested_categories', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='Teacher',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('full_name', models.CharField(max_length=200)),
                ('email', models.EmailField(max_length=100)),
                ('password', models.CharField(max_length=100)),
                ('password2', models.CharField(max_length=100)),
                ('qualification', models.CharField(max_length=200)),
                ('nationality', models.CharField(max_length=50)),
                ('mobile_no', models.CharField(blank=True, max_length=12, null=True)),
                ('address', models.TextField(blank=True, null=True)),
                ('phone_number', models.PositiveIntegerField(max_length=15)),
                ('postal_code', models.CharField(blank=True, max_length=15, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Course',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('topic', models.CharField(max_length=200)),
                ('description', models.TextField()),
                ('course_duration', models.CharField(default='00:00:00', max_length=10)),
                ('time', models.TimeField(auto_now=True)),
                ('course_image', models.ImageField(blank=True, default=None, upload_to='course_image/%Y/%m/%d/')),
                ('course_video', models.FileField(blank=True, default=None, upload_to='course_video/%Y/%m/%d/')),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='lms_api.coursecategory')),
                ('teacher', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='lms_api.teacher')),
            ],
        ),
    ]
