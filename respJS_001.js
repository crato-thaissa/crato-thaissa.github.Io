function Q1() {
    console.log('Q1');
    var x = Number.parseInt(document.getElementById('x').value);
    var y = Number.parseInt(document.getElementById('y').value);
    // Segue aqui seu código
    console.log ('X / Y: ' + x + ' / ' + y)
    console.log ('Quociente = ' + Math.floor(x/y));
console.log ('Resto = ' + (x%y));
}

function Q2() {
    console.log('Q2');
    var x = Number.parseFloat(document.getElementById('b').value);
    var y = Number.parseFloat(document.getElementById('c').value);
    // Segue aqui seu código
}

function Q3() {
    console.log('Q3');
    var aux = document.getElementById('profissoes');
    var profissao = aux.options[aux.selectedIndex].text;
    // Segue aqui seu código
}

function Q4() {
    console.log('Q4');
    var a_str = document.getElementById('a').value;
    var b_str = document.getElementById('b').value;
    var c_str = document.getElementById('c').value;
    // Segue aqui seu código
}

function Q5() {
    console.log('Q5');
    var altura = Number.parseFloat(document.getElementById('altura').value);
    var peso = Number.parseFloat(document.getElementById('peso').value);
    var aux = document.getElementById('generos');
    var genero = aux.options[aux.selectedIndex].text;
    // Segue aqui seu código
}

