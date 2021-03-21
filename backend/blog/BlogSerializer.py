from rest_framework import fields, serializers
from .models import Blog
from django.contrib.auth import get_user_model

User = get_user_model()

class BlogSerializers(serializers.ModelSerializer):
    # blog_Author = serializers.ReadOnlyField(source='blog_Author.username')
    class Meta:
        model = Blog
        fields = ['blog_title','blog_Author','blog_text','blog_date']
        
