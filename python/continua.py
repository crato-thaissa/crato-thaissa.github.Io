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
novamsg = []
for palavra in msg.split():
    novamsg.append(str(dic.get(palavra, palavra)))
    # if palavra in dic.keys():
    #    novamsg.append (str(dic[palavra]))
    # else:
    #    novamsg.append(palavra)
novamsg = ' '.join (novamsg)
print (novamsg)

dic = {
    "I'm" : "Eu estou",
    "green" : "verde",
    "apple" : "maçã",
    "eating" : "comendo",
}
msg = "I'm eating a green apple"
tradução = []
for palavra in msg.split():
    tradução.append(dic.get(palavra, palavra))
    # if palavra in dic.keys():
    #    tradução.append (dic[palavra])
    # else:
    #    tradução.append (palavra)
print (' '.join (tradução))
print (dic.values())
print (dic.items())

# Funções
def imprime(x):
    """
    x: qualquer coisa para print;
    retorna nada
    """
    print(x)

imprime ('===============#=============#===========')
imprime (2)
imprime ('Olá mundo')
imprime (dic)
imprime ((2,3))
imprime (None)
imprime ([True, False])

def distancia(a, b):
    """
    a, b: são listas, tuplas, etc com no mínimo dois elementos
    retorna distância Euclidiana ente "pontos 2D" a e b
    """
    return ((a[0] - b[0])**2 + (a[1] - b[1])**2)**0.5

imprime(distancia)
imprime(distancia( (0,0), (3,4)))
imprime(distancia( [0,0], [3,4]))
imprime(distancia( (0,0), [3,4,4,5,6,7,8,8,9,3,4]))

def divisãoInteira (x, y):
    """
    x, y são números
    retorna quociente, resto, flag maior que 1, flag denominador 0
    """
    if y != 0:
        return x//y, x%y, x > y, False
    else:
        return None, None, x>y, True

# quociente, resto = divisãoInteira (15, 8)
quociente, _, _, denominadorZero= divisãoInteira (15, 8)
_, resto, maiorque1, _ = divisãoInteira (15, 8)
print ('Quociente: ', quociente, 'Resto:', resto)
print ('>1: ', maiorque1, '/0:', denominadorZero)

def mapear (funcao, lista):
    """
    aplica função em cada elemento de lista;
    retorna lista com resutlados
    """
    return list (funcao(elemento) for elemento in lista)
 
def quadrado (x):
    """
    aplica o quadrado do número
    """
    return x**2

def raiz (x):
    """
    retorna raiz de x
    """
    return x**0.5

lista = list (i for i in range(11))
print (lista)
print (mapear (quadrado, lista))
print (mapear (raiz, lista))