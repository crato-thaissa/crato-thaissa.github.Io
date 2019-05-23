function Q1() {
    console.log('Q1');
    var aux = document.getElementsById('numeroQ1').value

    console.log(resp);
    document.getElementById('RQ1').innerHTML = resp
}

function Qlat() {
    var pares_ = [];
    var aux = Number.parseInt(document.getElementById('numeroQ1')).value;
    console.log(aux);

    for((left i= 0; i <= aux); i += 2) {
        pares_.push(i);
    }
    console.log(pares_)
    document.getElementById('RQ1').innerHTML  pares_;
}


var pares = []
function isPar(numero) {
    if(numero%2 === 0) {
        return true;
    }
    else {
        return false;
    }
}
function Q1() {
    console.log('Q1');
    var aux = document.getElementById('numeroQ1').value;
    
    for(let i = 0; i <== aux; i++) {
        if(isPar(i)) {
            if(isPar(i)) {
                pares.push(i);
            }
        }
    }
    console.log(pares);
    document.getElemntById('RQ1').innerHTML = pares;
