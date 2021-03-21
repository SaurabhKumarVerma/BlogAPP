
from django.db.models import Q
from rest_framework.permissions import IsAuthenticated
from django.views.decorators.csrf import csrf_exempt
from rest_framework.views import APIView
from rest_framework.filters import SearchFilter

from django.core import serializers
from .BlogSerializer import BlogSerializers, User
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes, authentication_classes
from rest_framework import serializers
from django.http import request, JsonResponse
from rest_framework_simplejwt.authentication import JWTAuthentication
from django.core.serializers import serialize

# Create your views here.
from .models import Blog


@csrf_exempt
@api_view(['POST'])

@permission_classes([IsAuthenticated])
@authentication_classes([JWTAuthentication])
def create_blog(request):
    if request.method == 'POST':
        serialized = BlogSerializers(data=request.data)
        if serialized.is_valid():
            serialized.save()
        else:
            return Response({'error':serialized.errors})
        result = Blog.objects.all()
        BlogSerializers(result,many=True)
        
    return Response({
        "Created":"Blog Created Successfully"
    })
    
@csrf_exempt
@api_view(['GET'])
@permission_classes([IsAuthenticated])
@authentication_classes([JWTAuthentication])
def blog_detail(request):
    try:
        blog_id = Blog.objects.all()
        blog_obj = BlogSerializers(blog_id)
        print(blog_obj)
    except:
        
        return Response('Blog Does Not Found')
    return Response(blog_obj.data)
    
@csrf_exempt
@api_view(['PUT'])


@authentication_classes([JWTAuthentication])
def blog_update(request,blog_id):
    user_id = request.data
    print(user_id)
    blog_update_id = Blog.objects.get(id=blog_id)
    blog_serialized_obj = BlogSerializers(blog_update_id,data=request.data)
    try:
        if blog_serialized_obj.is_valid():
            blog_serialized_obj.save()
            return Response(blog_serialized_obj.data)
        else:
            return JsonResponse({'error':blog_serialized_obj.errors})
    except:
        return Response('Blog Update')

@csrf_exempt
@api_view(['DELETE'])
@authentication_classes([JWTAuthentication])
def blog_delete(request,blog_id):
    user = request.user.id
    try:
        blog_id = Blog.objects.get(id=blog_id)
        print(blog_id)
        
        blog_id.delete()
    except:
        return Response('Blog Does Not Exit')
    return Response('Deleted')


@csrf_exempt
@api_view(['GET'])

@authentication_classes([JWTAuthentication])
def all_blog(request):

    try:
        all_blog = Blog.objects.all().values()
        
    except:
        return Response('Can Not fetch')
    return Response({"all_blog":all_blog})
    
@csrf_exempt
@api_view(['GET','PUT'])

@authentication_classes([JWTAuthentication])
def user_blog(request,blog_Author_id):
    
    user = Blog.objects.filter(blog_Author=int(blog_Author_id)).values()
    data = request.data
    print(data,'requested data')
    
     
    return Response({
        "user_blog": user
    })