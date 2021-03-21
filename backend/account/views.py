
from django.http import request, JsonResponse
from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from django.contrib.auth.models import User
from rest_framework.decorators import api_view, permission_classes, authentication_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from .accountSerlizer import AccountSerlizers
from django.contrib.auth import get_user_model
from rest_framework.authtoken.models import Token
from django.views.decorators.csrf import csrf_exempt
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.authentication import JWTAuthentication
import jwt ,datetime
User = get_user_model()

@csrf_exempt
@api_view(['POST'])
def CreateUser(request):
    if request.method == 'POST':
        serilized = AccountSerlizers(data=request.data)
        if serilized.is_valid():
            serilized.save()
        
        else:
            return JsonResponse({'error':serilized.errors})
        results = User.objects.all()
        output_serializer = AccountSerlizers(results, many=True)  
        
    return Response({
        'User_Registered':'User Registed Suceesfully'
        })
@csrf_exempt
@api_view(['POST'])
def login(request):
    
    user_email = request.data['email']
    user_password = request.data['password']

    user = User.objects.get(email = user_email)
    
    
    if user.check_password(user_password):
    
        refresh = RefreshToken.for_user(user)
    else:
        return Response('InCorrect Password')
    # token.set_exp(lifetime=datetime.timedelta(days=10))
    return Response({
        'refresh': str(refresh),
        'access': str(refresh.access_token),
        'username':str(user.username),
        'userid':str(user.id),
        'password':str(user.password),
            
        })

@csrf_exempt
@api_view(['POST'])
@authentication_classes([JWTAuthentication])
def logout(request):
    
    try:
        request.user.auth_token.delete()
    except:
         return Response('User Not Deleted')
    
    return Response({
        "user":"Successfully logged out."
    })
    
    
    
