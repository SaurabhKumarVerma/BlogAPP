
from django.db import models

from django.contrib.auth.models import User
# Create your models here.


class Blog(models.Model):
    
    blog_title = models.CharField(max_length=100,null=False,default='Anynomyous')
    blog_Author = models.ForeignKey(User,on_delete=models.CASCADE,null=False)
    
    blog_text = models.TextField(null=False)
    blog_date = models.DateField(auto_now_add=True,null=True)
    
    def __str__(self):
        return self.blog_title

    