import datetime
from Persona import Persona

class Lavoratore(Persona):
    def __init__(self,nome,cognome,annonascita,lavoro):
        super().__init__(nome,cognome,annonascita)
        self.lavoro=lavoro.lower().capitalize()
#Considera solo due categorie di lavoro per le quali ho cercato l'età pensionabile
    def isPensionabile(self):
        eta=(datetime.datetime.now().year)-self.annonascita 
        if self.lavoro=='Artigiano':
            if eta>= 67:
                print(f'{self.nome} {self.cognome} è pensionabile.')
            else:
                print(f'{self.nome} {self.cognome} non è pensionabile.')  
        elif self.lavoro=='Poliziotto':
             if eta>= 60:
                print(f'{self.nome} {self.cognome} è pensionabile.')
             else:
                print(f'{self.nome} {self.cognome} non è pensionabile.')  
        else:
            print(f"Non conosciamo l'età pensionabile di un {self.lavoro}")

    def __str__(self):
     return super().__str__()+ f' Lavoro: {self.lavoro}'    

