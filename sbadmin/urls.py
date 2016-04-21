from django.conf.urls import patterns, include, url

from sbadmin import views

urlpatterns = patterns('',
    url(r'^$', views.index, name='index'),
    url(r'^index$', views.index, name='index'),
    url(r'^tracker$', views.tracker, name='tracker'),
    url(r'^kanban$', views.kanban, name='kanban'),
    url(r'^$', views.backlog, name='backlog'),
    url(r'^backlog$', views.backlog, name='backlog'),
    url(r'^ui_general$', views.ui_general, name='ui_general'),
    url(r'^ui_buttons$', views.ui_buttons, name='ui_buttons'),
    url(r'^ui_tabs_accordions$', views.ui_tabs_accordions, name='ui_tabs_accordions'),
    url(r'^ui_sliders$', views.ui_sliders, name='ui_sliders'),
    url(r'^ui_nestable_list$', views.ui_nestable_list, name='ui_nestable_list'),
    url(r'^ui_typography$', views.ui_typography, name='ui_typography'),
    url(r'^ui_google_maps$', views.ui_google_maps, name='ui_google_maps'),
    url(r'^ui_grid$', views.ui_grid, name='ui_grid'),
    url(r'^form_components$', views.form_components, name='form_components'),
    url(r'^form_layouts$', views.form_layouts, name='form_layouts'),
    url(r'^form_validation$', views.form_validation, name='form_validation'),
    url(r'^form_wizard$', views.form_wizard, name='form_wizard'),
    url(r'^tables_static$', views.tables_static, name='tables_static'),
    url(r'^tables_dynamic$', views.tables_dynamic, name='tables_dynamic'),
    url(r'^tables_responsive$', views.tables_responsive, name='tables_responsive'),
    url(r'^charts$', views.charts, name='charts'),
)