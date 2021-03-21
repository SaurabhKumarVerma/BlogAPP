from rest_framework import serializers
from django.contrib.auth.models import User




class AccountSerlizers(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username','first_name','last_name','password','email']
    

    def validate(self, attrs):
        email = attrs.get('email','')
        if User.objects.filter(email=email).exists():
            raise serializers.ValidationError(
                {'email':'email is Already used'}
            )
        return attrs
    
    def create(self, validated_data):
        return User.objects.create_user(**validated_data)