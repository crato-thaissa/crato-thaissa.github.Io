    var pares = [];
    function isPar(numero) {
        if(numero%2 == 0) {
            return true;
        } 
        else {
            return false;
        }
    }
function Q1() {
    console.log('Q1');
    var aux = Number.parseInt(document.getElementsById('numeroQ1').value);
    // Segue aqui seu código
    function isPrimo(numero) {
        if (numero === 2) {
             return true; 
        }
        else if (numero < 2 || numero % 2 === 0) {
            return false; 
        }
        for(let i = 3; i <= Math.sqrt(numero); i += 2) {
            if(numero % i === 0) { return false; }
        }
        return true;
    }
    // Segue aqui seu código
    for(let i = 0; i <= aux; i++) {
        if(isPar(i)) {
            pares.push(i);
        }
    }
    console.log(pares);
    document.getElementById('RQ1').innerHTML = pares;
}


    

function Q1alt() {
    var pares2 = [];
    var aux = Number.parseInt(document.getElementById('numeroQ1')).value;
    console.log(aux);

    for((left i= 0; i <= aux); i += 2) {
        pares2.push(i);
    }
    console.log(pares2)
    document.getElementById('RQ1alt').innerHTML = pares2;
}




function isPrimo(numero) {
    if(numero === 2) {
        return true; } 
    else if (numero < 2 || numero % 2 === 0) {	
        return false; 
    }
    for(let i = 3; i <= Math.sqrt(numero); i += 2) {
        if(numero % i === 0) { 
            return false; 
        }
    }
    return true;
}

    var primos = [];
    // Crie aqui suas funções de apoio
function Q2() {
    console.log('Q2');
    var aux = Number.parseInt(document.getElementById('numeroQ2').value);
    // Segue aqui seu código 
    primos.push(2);
    for(let numero = 3; numero <= aux; numero += 2) {
            let chk = true;
	    for(let i = 0; i < primos.length; i++) {
		if(numero % primos[i] === 0) {
		    chk = false;
                    break;
		}
	    }
            if(chk) { primos.push(numero); }
    }
    console.log(primos);
    document.getElementById('RQ2').innerHTML = primos;
}


function Q2alt() {
    var primos2 = [];
    console.log('Q2alt');
    var aux = Number.parseInt(document.getElementById('numeroQ2').value);
    // Segue aqui seu código 
    for(let i = 0; i <= aux; i++) {
        if(isPrimo(i)) { primos2.push(i); }
    }
    console.log(primos2);
document.getElementById('RQ2alt').innerHTML = primos2;
}




var listaStrings = [];
// Crie aqui suas funções de apoio
function acrescentaSTR(){
    var aux = document.getElementById('novaString').value;
    listaStrings.push(aux);
    document.getElementById('novaString').value = "";
    document.getElementById('auxQ3').innerHTML = listaStrings
    console.log(listaStrings);
}

function Q3() {
    console.log('Q3');
    for(let i = 0; i < listaStrings.length; i++) {
        listaStrings[i] = listaStrings[i].toUpperCase();
	    }
    console.log(listaStrings);
    document.getElementById('RQ3').innerHTML = listaStrings;
}
 


function QuickSort_(X, IniVet, FimVet) { 
    // X é array
// var    i, j, pivo, aux
   console.log('IniVet, FimVet: ' + IniVet)
   var i = IniVet;
   var j = FimVet;
   var pivo X = [Math.floor((IniVet + FimVet)/2)]; 
   var aux;

    while (i <= j) {
                while (X[i] < pivo) {
                    i++ ;
                }
                while (X[j] > pivo) {
                    j-- ;
                }
                if (i <= j) {
                    aux  = X[i]
                    X[i] = X[j]
                    X[j] = aux
                    i++ ;
                    j-- ;
                }      
    }
    if (IniVet < j) {
        console.log('IniVet')
        QuickSort(X, IniVet, j);
    }
    if (i < FimVet) {
        QuickSort(X, i, FimVet);
    }
}
function QuickSort(X) {
    var Y = Array.from(X);
    QuickSort_(X, 0, X.length-1);
    return Y;
}



function Q4(); 
    console.log('Q4');
    var aux = document.getElementById('numerosQ4').value;
    var numerosQ4 = aux.split(';');
    var ordenados;
    //
    
    for (let i = 0; 1 < numerosQ4.length: i++) {
        numerosQ4[i] = Number.parseFloat(numerosQ4[i]);
    }
    console.log('****' + numerosQ4);
    ordenados = QuickSort(numerosQ4);
    console.log(ordenados);
    document.getElementById('RQ4').innerHTML = ordenados;
}


function Q5() {
    console.log('Q5');
    var matrizA = [];
    var matrizB = [];
    var auxA = document.getElementById('matrizA').value;
    var auxB = document.getElementById('matrizB').value;
    // Segue aqui seu código
    
    
    
    
    for(let i = 0; i < listaStrings.length; i++) {
        listaStrings[i] = listaStrings[i].toUpperCase();
	    }
    console.log(listaStrings);
    document.getElementById('RQ5').innerHTML = listaStrings;
}




