from django.urls import path
from . import views

urlpatterns=[
    path('task-list/',views.taskList,name='Task-List'),
    path('task-detail/<str:pk>/',views.taskDetail,name='Task-Details'),
    path('task-update/<str:pk>/',views.taskUpdate,name='Task-Update'),
    path('task-create/',views.taskCreate,name="Task-Create"),
    path('task-delete/<str:pk>/',views.taskDelete,name='Task-Delete'),
]