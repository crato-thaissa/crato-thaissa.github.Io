function Q1() {
    console.log('Q1');
    var x = Number.parseInt(document.getElementById('x').value);
    var y = Number.parseInt(document.getElementById('y').value);
    // Segue aqui seu código
    console.log('X / Y: ' + x + ' / ' + y);
    console.log('Quociente = ' + Math.floor(x/y));
    console.log('Resto = ' + (x%y));
}


function Q2() {
    console.log('Q2');
    var x = Number.parseFloat(document.getElementById('b').value);
    var y = Number.parseFloat(document.getElementById('c').value);
    // Segue aqui seu código
    console.log('b e c = ' + x + ' / ' + y);
    console.log('HIpotenusa = ' + Math.sqrt(Math.pow(x,2) + Math.pow(y,2)));
}


function Q3() {
    console.log('Q3');
    var aux = document.getElementById('profissoes');
    var profissao = aux.options[aux.selectedIndex].text;
    // Segue aqui seu código
    if (profissao .endsWith('Musicista')) {
        console.log(profissao + ' ' + 'substantivo de ambos gêneros');
    } else if (profissao .endsWith('a')) {
        console.log (profissao + ' ' + 'substantivo feminino');
    } else if (profissao .endsWith('o')) {
        console.log (profissao + ' ' + 'substantivo masculino');
    } else if (profissao .endsWith('r')) {
        console.log (profissao + ' ' + 'substantivo masculino');
    } else if (profissao .endsWith('z')) {
        console.log(profissao + ' ' + 'substantivo femininoo');
    } else if (profissao .endsWith('e')) {
        console.log('substantivo de ambos gêneros');
    }        
}


function Q4() {
    console.log('Q4');
    var a_str = document.getElementById('a').value;
    var b_str = document.getElementById('b').value;
    var c_str = document.getElementById('c').value;
    // Segue aqui seu código
    if((!a_str) && (!b_str)) && (!bc_str) {
        console.log('Escreva dois valores')
    }
    else { 
        if ((!a_str) && (!b_str)) {
        console.log('Escreva dois valores')
        }
    }
    else {
        if ((!b_str) && (!c_str)) {
        console.log('Escreva dois valores')
        }
    }
    else {
        if ((!a_str) && (!c_str)) {
        console.log('Escreva dois valores')
        }
    }
    else {
        if (!a_str) {
        console.log ('Hipotenusa = ' +  Math.sqrt(Math.pow(b_str,2) + Math.pow(c_str,2)));
        }
    }
    else {
        if (!b_str) {
        console.log ('cateto oposto = ' +  Math.sqrt(Math.pow(a_str,2) - Math.pow(c_str,2)));
        }
    }
    else {
        if (!c_str) {
        console.log ('cateto adjacente = ' +  Math.sqrt(Math.pow(a_str,2) - Math.pow(b_str,2)));
        }
    }


    function Q5() {
        console.log('Q5');
        var altura = Number.parseFloat(document.getElementById('altura').value);
        var peso = Number.parseFloat(document.getElementById('peso').value);
        var aux = document.getElementById('generos');
        var genero = aux.options[aux.selectedIndex].text;
        // Segue aqui seu código (imc = peso/(altura+altura))
        // (imc = peso / (altura+altura))
        var imc = (peso/Math.pow(altura + altura))
        console.log('Valor IMC = ' + (peso/Math.pow(altura + altura)))
        if (imc > 18.5) {
            console.log('Magro(a)');
        }
        else if (imc < 18.5, imc > 24.9) {
            console.log('Sarado(a)');
        }
        else if (imc <= 25, imc >=29.9) {
            console.log('Rechonchudo(a)');
        }
        else if (imc > 30) {
            console.log('Obeso(a),' + ' ' + 'consulte um médico e cuide da tua alimentação');
        }
    }