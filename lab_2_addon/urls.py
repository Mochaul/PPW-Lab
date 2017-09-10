from django.conf.urls import url
from .views import index_addon
#url for app, add your URL Configuration

urlpatterns = [
    url(r'^$', index_addon, name='index_addon'),
]
