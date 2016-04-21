from django.conf import settings

def global_vars(request):
    return {'baseurl': 'hello/'}