from django.shortcuts import render
from rest_framework.views import APIView
from .models import Teacher, Course, CourseCategory
from .serializers import TeacherSerializer, CourseCategorySerilizer, CourseListSerializer
from django.http import JsonResponse, HttpResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework import permissions
from rest_framework import generics

# Create your views here.

class TeacherList(generics.ListCreateAPIView):
    queryset = Teacher.objects.all()
    serializer_class = TeacherSerializer
    #permission_classes=[permissions.IsAuthenticated]

class TeacherDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Teacher.objects.all()
    serializer_class = TeacherSerializer
    lookup_field = 'pk'
    #permission_classes=[permissions.IsAuthenticated]

@csrf_exempt
def teacher_login(request):
    email = request.POST['email']
    password = request.POST['password']
    teacher_data = Teacher.objects.filter().get(email=email, password=password)
    if teacher_data:
        return JsonResponse({'login': True, 'teacher_id': teacher_data.id,
                             'teacher_name': teacher_data.full_name, 'teacher_course': teacher_data.skills})
    else:
        return JsonResponse({'login': False})
    
class CourseCategoryList(generics.ListCreateAPIView):
    queryset = CourseCategory.objects.all()
    serializer_class = CourseCategorySerilizer
    # Permission classes here  


class CourseList(generics.ListCreateAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseListSerializer
    # Permission class here


# Courses specific to a teacher
class TeacherCourse(generics.ListAPIView):
    serializer_class = CourseListSerializer
    
    def get_queryset(self):
        teacher_id = self.kwargs['teacher_id']
        teacher = Teacher.objects.get(pk=teacher_id)
        return Course.objects.filter(teacher=teacher)