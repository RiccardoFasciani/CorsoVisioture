from MySqlConnection import MySqlConnection
class ClientiDAO(object):
    __db = None

    # costruttore
    def __init__(self):
        self.__db = MySqlConnection()

    def getnumeroclientiperagente(self):
        risultato=self.__db.query("SELECT count(*)as numero,agente FROM clienti group by agente").fetchall()
        for tupla in risultato:
            print(f'Agente: {tupla[1]},Numero clienti: {tupla[0]}') 

    def getclientibyagente(self):
        agente=input('Inserisci il codice agente di cui vuoi sapere i clienti\n')
        risultato=self.__db.query(f"SELECT nome  FROM clienti where agente='{agente}'").fetchall()
        print(f'-----Lista clienti agente {agente}-----')
        for cliente in risultato:
            print(cliente[0])


