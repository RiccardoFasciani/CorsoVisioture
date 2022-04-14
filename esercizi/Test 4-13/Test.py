from Persona import Persona
from Lavoratore import Lavoratore
from Studente import Studente
#IMPORTANTE per il test sulla classe lavoratore soltanto 'artigiano' o 'poliziotto' daranno ristultati fruibili
class Test:
    def testclassi(self):
        classedatestare=int(input('Inserisci il numero della classe da testare : 1(Persona),2(Studente),3(Lavoratore)\n'))
        if (classedatestare>3) or (classedatestare<1):
            print('Non è un numero valido, ritenta')
        elif classedatestare == 1:
            nome=input('Inserisci il nome della Persona\n')
            cognome=input('Inserisci il cognome della Persona\n')
            annonascita=int(input("Inserisci l'anno di nascita della Persona\n"))
            personatest=Persona(nome,cognome,annonascita)
            personatest.ismaggiorenne()
            print(personatest)
        elif classedatestare == 2:
            nome=input('Inserisci il nome dello Studente\n')
            cognome=input('Inserisci il cognome dello Studente\n')
            annonascita=int(input("Inserisci l'anno di nascita dello Studente\n"))
            matricola= int(input('Inserisci la matricola dello Studente\n'))
            
            studentetest=Studente(nome,cognome,annonascita,matricola)
            votiinput=input('Inserisci i voti dello studente separati da una virgola\n').split(',')
            voti=[]
            for voto in votiinput:
                voti.append(int(voto))
            studentetest.mediavoti(voti)
            print(studentetest)
        elif classedatestare == 3:
            nome=input('Inserisci il nome dell Lavoratore\n')
            cognome=input('Inserisci il cognome dell Lavoratore\n')
            annonascita=int(input("Inserisci l'anno di nascita dell Lavoratore\n"))
            lavoro= input('Inserisci il lavoro dell Lavoratore\n')
            lavoratoretest=Lavoratore(nome,cognome,annonascita,lavoro)
            lavoratoretest.isPensionabile()
            print(lavoratoretest)     

test=Test()
test.testclassi()