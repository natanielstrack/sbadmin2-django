from django.shortcuts import render
from django.http import HttpResponse
from django.template import Context, loader

app = 'sbadmin/'

# Create your views here.
def index(request):
    return render(request, app+'index.html')

def ui_general(request):
    return render(request, app+'ui_general.html')

def ui_buttons(request):
    return render(request, app+'ui_buttons.html')

def ui_tabs_accordions(request):
    return render(request, app+'ui_tabs_accordions.html')

def ui_sliders(request):
    return render(request, app+'ui_sliders.html')

def ui_nestable_list(request):
    return render(request, app+'ui_nestable_list.html')

def ui_typography(request):
    return render(request, app+'ui_typography.html')

def ui_google_maps(request):
    return render(request, app+'ui_google_maps.html')

def ui_grid(request):
    return render(request, app+'ui_grid.html')

def form_components(request):
    return render(request, app+'form_components.html')

def form_layouts(request):
    return render(request, app+'form_layouts.html')

def form_validation(request):
    return render(request, app+'form_validation.html')

def form_wizard(request):
    return render(request, app+'form_wizard.html')

def tables_static(request):
    return render(request, app+'tables_static.html')

def tables_dynamic(request):
    return render(request, app+'tables_dynamic.html')

def tables_responsive(request):
    return render(request, app+'tables_responsive.html')

def charts(request):
    return render(request, app+'charts.html')