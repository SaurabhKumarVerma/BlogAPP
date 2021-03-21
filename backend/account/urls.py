from django.urls import path,include
from . import views
from rest_framework_jwt.views import obtain_jwt_token,refresh_jwt_token
urlpatterns = [

    path('registation/',views.CreateUser),
    path('login/',views.login),
    path('api/v1/auth/obtain_token/', obtain_jwt_token),
    path('api/v1/auth/refresh_token/', refresh_jwt_token),
     path('logout/',views.logout),
    
]
