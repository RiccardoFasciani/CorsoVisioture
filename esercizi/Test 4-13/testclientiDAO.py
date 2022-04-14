from ClientiDao import ClientiDAO

class TestclientiDao:
    def __init__(self):
        __clientidao = ClientiDAO()
        inp=int(input('Scegli quale operazione eseguire 1-numero clienti per agente, 2-clienti appartenenti ad un agente'))
        if (inp!=1) and (inp!=2):
            print('Il numero non corrisponde ad un operazione,ritenta')
        elif inp==1:
            __clientidao.getnumeroclientiperagente()
        else:
            __clientidao.getclientibyagente()

test=TestclientiDao()                    