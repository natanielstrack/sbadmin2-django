from django.conf.urls import include, url

from django.contrib import admin
admin.autodiscover()

import multiverse.views
import sbadmin.urls, multiverse.urls

# Examples:
# url(r'^$', 'gettingstarted.views.home', name='home'),
# url(r'^blog/', include('blog.urls')),

urlpatterns = [
    url(r'^$', multiverse.views.index, name='index'),
	url(r'^sbadmin/', include(sbadmin.urls)),
    url(r'^admin/', include(admin.site.urls)),
	url(r'^multiverse/', include(multiverse.urls)),
]
