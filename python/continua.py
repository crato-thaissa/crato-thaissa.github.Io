# Tipos de dados
a = None
if a is None:
    print ("Nada!")

b = list (i for i in range(5))
b = None
if not (b is None):
    print (b)

lista = [2,3,4,5]
a = tuple()
tupla = (2,3,4,5)
print (lista, tupla)

dic = dict()    # Dicionário vazio
dic = {
    'zero' : 0,
    'um' : 1,
    'dois' : 2,
    'três' : 3,
}
print (dic['dois'])
msg = 'Custa dois reais'
for i in msg.split():