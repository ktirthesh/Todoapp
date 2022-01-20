from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import TaskSerializers
from .models import Task

# Create your views here.
@api_view(['GET'])
def taskList(request):
    tasks = Task.objects.all()
    serializer = TaskSerializers(tasks, many = True)
    return Response(serializer.data)
"""
This Function going to display Detailed view of one perticuler task with the help of pk.
"""
@api_view(['GET'])
def taskDetail(request, pk):
    tasks = Task.objects.get(id=pk)
    serializer = TaskSerializers(tasks, many = False)
    return Response(serializer.data)

@api_view(['POST'])
def taskUpdate(request,pk):
    task=Task.objects.get(id=pk)
    serializer=TaskSerializers(instance=task,data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

@api_view(['POST'])
def taskCreate(request):
    serilizer=TaskSerializers(data=request.data)
    if serilizer.is_valid():
        serilizer.save()
    return Response(serilizer.data)
    
@api_view(["DELETE"])
def taskDelete(request,pk):
    task=Task.objects.get(id=pk)
    task.delete()
    return Response("Task deleted Successfully!")