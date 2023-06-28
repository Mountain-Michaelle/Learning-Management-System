from django.shortcuts import render
from rest_framework.views import APIView
from .models import Teacher
from .serializers import TeacherSerializer
from rest_framework import permissions
from rest_framework.response import Response
from rest_framework import generics

# Create your views here.

class TeacherList(generics.ListCreateAPIView):
    queryset = Teacher.objects.all()
    serializer_class = TeacherSerializer
    #permission_classes=[permissions.IsAuthenticated]

class TeacherDetail(generics.RetrieveUpdateAPIView):
    queryset = Teacher.objects.all()
    serializer_class = TeacherSerializer
    lookup_field = 'pk'
    #permission_classes=[permissions.IsAuthenticated]