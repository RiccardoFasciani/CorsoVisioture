from re import template
from django.http import HttpResponse
from django.shortcuts import render
from django.views.generic import ListView
from .models import Clienti
from django.db.models import Count

# Create your views here.
def index(request):
    return render(request,'index.html')

class NumClientiPerAgente(ListView):
    model= Clienti
    template_name='clientiperagente.html'
    def get_queryset(self):
        risult=Clienti.objects.all().values('agente').annotate(totale=Count('nome')).order_by('totale')
        return risult

class ClientiByAgente(ListView):
    model= Clienti
    template_name='clientibyagente.html'
    
    def get_queryset(self):
        inputagente=self.request.GET.get('inputagente')
        object_list=Clienti.objects.filter(agente=inputagente)
        return object_list