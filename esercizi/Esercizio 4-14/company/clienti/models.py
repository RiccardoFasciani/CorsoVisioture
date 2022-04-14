from django.db import models

# Create your models here.

class Clienti(models.Model):
    nome = models.CharField(max_length=100)
    indirizzo = models.CharField(max_length=1024)
    telefono = models.CharField(max_length=100)
    agente = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'clienti'
