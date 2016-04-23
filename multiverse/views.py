from django.shortcuts import render
from django.http import HttpResponse
from django.template import Context, loader

app = 'multiverse/'

# Create your views here.
def index(request):
    #return HttpResponse('Hello from Python!')
    return render(request, app+'index.html')