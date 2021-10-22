from django.contrib import admin
from django.urls import include, path
from django.conf.urls import url
from django.contrib import admin
from django.conf.urls import include 
from taller import views

urlpatterns = [
    path('', include('taller.urls')),
    path('admin/', admin.site.urls),
]