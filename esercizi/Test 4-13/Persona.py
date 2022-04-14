import datetime
class Persona:

    def __init__(self,nome,cognome,annonascita):
        self.nome=nome.lower().capitalize()
        self.cognome=cognome.lower().capitalize()
        self.annonascita=annonascita
    def ismaggiorenne(self):
        annocorrente=datetime.datetime.now().year
        if (annocorrente - self.annonascita)>= 18:
            print(f'{self.nome} {self.cognome} è Maggiorenne')
        else:
            print(f'{self.nome} {self.cognome} non è Maggiorenne') 

    def __str__(self):
        annocorrente=datetime.datetime.now().year
        return f"Nome: {self.nome}, Cognome: {self.cognome}, Età: {annocorrente - self.annonascita}"         

