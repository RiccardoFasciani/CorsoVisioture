from django.urls import path
from . import views
from .views import NumClientiPerAgente,ClientiByAgente
urlpatterns = [
    path('',views.index,name='index'),
    path('clientiperagente/',NumClientiPerAgente.as_view(),name='clientiperagente'),
    path('clientibyagente',ClientiByAgente.as_view(),name='clientibyagente')
]
