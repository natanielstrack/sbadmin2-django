import json
from django.shortcuts import render
from django.http import HttpResponse
from django.template import Context, loader

app = 'multiverse/'

# Create your views here.
def index(request):
    #variavelView = ['um', 'dois', 'tres']
    title = '<strong>Multi</strong>Verse'
    breadCrumb = json.loads(open(app+"static/multiverse/data/tempBreadCrumb.json", "r").read())
    breadCrumbButtons = json.loads(open(app+"static/multiverse/data/tempBreadCrumbButtons.json", "r").read())
    header = json.loads(open(app+"static/multiverse/data/tempHeader.json", "r").read())
    variavelView = json.loads('[{"id":"um"},{"id":"dois"}]')
    return render(request, app+'index.html', {'title':title, 'variavelTemplate':variavelView, 'breadCrumb':breadCrumb, 'breadCrumbButtons':breadCrumbButtons, 'header':header})
