from rest_framework import serializers
from . import models 


class TeacherSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Teacher
        fields = [
                  'id',
                  'full_name', 'email', 
                  'password', 'password2', 'qualification', 
                  'mobile_no', 'skills', 'nationality'
                ]