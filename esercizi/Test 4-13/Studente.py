from Persona import Persona

class Studente(Persona):
    def __init__(self,nome,cognome,annonascita,matricola):
        super().__init__(nome,cognome,annonascita)
        self.matricola=matricola
#Prende come argomento una lista di voti e ne calcola la media
    def mediavoti(self,voti):
        totale=0
        for voto in voti:
          totale = totale+voto
          media = totale//len(voti)
        print(f'media:{media}')
    def __str__(self):
        return super().__str__()+f' Matricola:{self.matricola}'


