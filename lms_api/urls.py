from django.urls import path 
from . import views

urlpatterns = [
    path('teachers/', views.TeacherList.as_view() ),
   path('teachers/<int:pk>/', views.TeacherDetail.as_view()),
   path('teacher-login/', views.teacher_login, name='teacher-login')
   # Login in the browsable django API 
   
]
