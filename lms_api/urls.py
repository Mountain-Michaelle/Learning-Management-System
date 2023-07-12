from django.urls import path 
from . import views

urlpatterns = [
   path('teachers/', views.TeacherList.as_view() ),
   # Login in the browsable django API 
   path('teachers/<int:pk>/', views.TeacherDetail.as_view()),
   path('teacher-login/', views.teacher_login, name='teacher-login'),
   path('course-category/', views.CourseCategoryList.as_view(), name="course-category"),
   path('courses/', views.CourseList.as_view(), name="courses"),
   path('teacher-course/<int:teacher_id>/', views.TeacherCourse.as_view(), name="teacher-course"),
]
