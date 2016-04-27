from django.conf.urls import patterns, include, url

from multiverse import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^index$', views.index, name='index'),
]