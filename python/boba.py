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