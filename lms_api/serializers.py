from rest_framework import serializers
from . import models 


class TeacherSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Teacher
        fields = [
                  'id',
                  'full_name', 'email', 
                  'password', 'password2', 'skills', 'postal_code', 'qualification'
                ]

class CourseCategorySerilizer(serializers.ModelSerializer):
  class Meta:
    model = models.CourseCategory
    fields = [
       'id',
      'title',
      'description'
    ]
  
class CourseListSerializer(serializers.ModelSerializer):
   class Meta:
      model = models.Course
      fields = [
         'category', 'topic', 'teacher', 'course_image', 'description', 'course_duration', 'time',
      ]




# class Base64ImageField(serializers.ImageField):

#    def to_internal_value(self, data):
#       from django.core.files.base import ContentFile
#       import base64
#       import six
#       import uuid 

#       if isinstance(data, six.string_types):
#          #
#          if 'data' in data and ';base64,' in data:
#             #Break out the header from the base64 content
#             header, data  = data.split(';base64,')

#             #Try to decode the file. Return validation error if it fails
#             try:
#                decoded_file = base64.b16decode(data)
#             except TypeError:
#                self.fail('invalid image')

#             #Generate a filename
#             file_name = str(uuid.uuid64())[:12] # 12 Characters a more than enough
#             #Get the file name extension
#             file_extension = self.get_file_extension(file_name, decoded_file)

#             complete_file_name = "%s, %s" % (file_name, file_extension)
#             data = ContentFile(decoded_file, name=complete_file_name)
#       return super(Base64ImageField, self).to_internal_value(data)
#    def get_file_extension(self, file_name, decoded_file):
#       import imghdr
#       extension = imghdr.what(file_name, decoded_file)
#       extension = "jpg" if extension == "jpeg" else extension
#       return extension



# class ImageSerializer(serializers.ModelSerializer):
#    image = Base64ImageField(
#       max_length=None, use_url=True,
#    )
#    class Meta:
#       model = models.Course.course_image