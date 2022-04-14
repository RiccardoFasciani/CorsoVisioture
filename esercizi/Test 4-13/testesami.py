
filedaaprire= input('Inserire il nome del file da aprire(testesami):\n')
listanominativi=[]
listavoti=[]
with open(f'{filedaaprire}.txt','r')as file:
    lista=file.readlines()
    for item in range(0,len(lista)):
       if (item%3==0)or (item==0):
           listanominativi.append(lista[item].replace('\n',''))
       else:
           listavoti.append(int(lista[item].replace('\n','')))
print(listanominativi)
print(listavoti)           

dizionario={}
numerovoto=0
for item in range(0,len(listanominativi)):
 dizionario[listanominativi[item]]=((listavoti[numerovoto])+(listavoti[numerovoto+1]))//2
 numerovoto=numerovoto+2
print(dizionario) 

# with open('dizionario.bin','wb') as diz:
#     diz.write(dizionario)

for chiave,valore in dizionario.items():
    if valore>=18:
        print(f'Nominativo dipendente: {chiave} Media Voti:{valore} Esame Superato')
    else:
        print(f'Nominativo dipendente: {chiave} Media Voti:{valore} Esame Non Superato') 

print('-----Elenco Promossi-----')
for chiave,valore in dizionario.items():
    if valore>=18:
        print(f'{chiave}')
