alert("Espero que a sintaxe não seja muito difícil de entender. Esperemos que a maioria dos programadores / usuários comuns de CMD possam acompanhar");
var step = 1;

function Run() {
//1
    if (document.getElementById("cmd").value === "$cmd -define byeNasa" && step == 1) {
        
    document.getElementById("steps").innerHTML = "Ótimo. Agora adicione a biblioteca NOKIA.nasa. Lembre-se, sua função é chamada \"byeNasa\".";

    document.getElementById("cmd").value = "$cmd";
    
    document.getElementById("output").innerHTML = "Função byeNasa definida com sucesso.";
    
    step++;
    
    }
}
    
//2
    if (document.getElementById("cmd").value === "$cmd -add byeNasa NOKIA.nasa" && step == 2) {
        
    document.getElementById("steps").innerHTML = "Veja, Não é tão dificil. Compilado totalmente por HTML! Agora implemente seu app, byeNasa.";
    
    document.getElementById("cmd").value = "$cmd";

    document.getElementById("output").innerHTML = "Biblioteca NOKIA.nasa adcionada com sucesso à byeNasa.";

    step++;
    
    }
    
//3
    if (document.getElementById("cmd").value === "$cmd -deploy byeNasa" && step == 3) {
        
    document.getElementById("loc").style.color = "black";
document.getElementById("loc1").style.color = "red";
document.getElementById("loc2").style.color = "blue";
        
    document.getElementById("steps").innerHTML = "Ah sim, Quase esqueci! Voce precisa definir o endereço da sua função. O tutorial foi atualizado com sucesso, look above. Set the byeNasa location to \"N-Base0.8..91\"";
    
    document.getElementById("cmd").value = "$cmd";
    
    document.getElementById("output").innerHTML = "Command $cmd -deploy byeNasa could not be run. Error: Endereço não foi definido";
    
    step++;
    }
    
//4
    if (document.getElementById("cmd").value === "$cmd -setLocation byeNasa N-Base0.8..91" && step == 4) {
        
    document.getElementById("steps").innerHTML = "Surpreendente! Agora, implemente o hack!";
    
    document.getElementById("cmd").value = "$cmd";
    
    document.getElementById("output").innerHTML = "byeNasa alvo definido com sucesso para N-Base0.8..91";
    
    step++;
    
    }
    
//5
    if (document.getElementById("cmd").value === "$cmd -deploy byeNasa" && step == 5) {
            
    document.getElementById("steps").innerHTML = "Oh, isso não funcionou muito bem. Não se preocupe! Tente uma base diferente. Definir o local para N-Base0.8..92 and we will deploy it in the next step.";
    
    document.getElementById("cmd").value = "$cmd";
    
    document.getElementById("output").innerHTML = "opa opa";
    
    step++;
    }
    
//6
    if (document.getElementById("cmd").value === "$cmd -setLocation byeNasa N-Base0.8..92" && step == 6) {
        
    document.getElementById("steps").innerHTML = "Agora implemente byeNasa";
    
    document.getElementById("cmd").value = "$cmd";
    
    document.getElementById("output").innerHTML = "byeNasa alvo definido com sucesso para N-Base0.8..92";
    
    step++;
    
    }
    
//7
    if (document.getElementById("cmd").value === "$cmd -deploy byeNasa" && step == 7) {
        
    document.getElementById("steps").innerHTML = "Parabéns, você acessou o horário de lançamento deles! Comente se você chegou até aqui! A propósito ... não conte à NASA ... \ nAntes de irmos, tente definir a localização para N-Base0.8..93 e implementando mais uma vez.";
    
    document.getElementById("cmd").value = "$cmd";
    
    document.getElementById("output").innerHTML = `
    Exarch - LAUNCH TIME NOW\n
    The Hammerhead - LAUNCH TIME 01:43\n
    Aurora - LAUNCH TIME 12:32\n
    Mercenary - LAUNCH TIME 18:32\n
    The Paladin - LAUNCH TIME 22:00:01\n
    SS Lullaby - LAUNCH TIME 00:00:00\n
    HWSS Despot - LAUNCH TIME 03:42\n
    SC Invincible - LAUNCH TIME 17:17\n
    USS Royal - LAUNCH TIME 18:19\n
    ISS Guard - LAUNCH TIME 6:49\n
    STS The Exterminator - LAUNCH TIMES 14:11\n
    BC Hannibal - LAUNCH TIMES 14:11\n
    SSE Karma - LAUNCH TIMES 16:21\n
    CS Raving - LAUNCH TIMES 03:12\n
    LWSS Geisha - LAUNCH TIMES 03:13\n
    `;
    
    step++;
    }
    
//8
    if (document.getElementById("cmd").value === "$cmd -setLocation byeNasa N-Base0.8..93" && step == 8) {
        
    document.getElementById("steps").innerHTML = "Agora implemente byeNasa";
    
    document.getElementById("cmd").value = "$cmd";
    
    document.getElementById("output").innerHTML = "byeNasa alvo definido com sucesso para N-Base0.8..93";
    
    step++;
    
    }
    
//9
    if (document.getElementById("cmd").value === "$cmd -deploy byeNasa" && step == 9) {
        
    document.getElementById("steps").innerHTML = "Você está pronto para conquistar o mundo com sua NOKIA!    ";
    
    document.getElementById("cmd").value = "$cmd";
    
    document.getElementById("output").innerHTML = "Obrigado por passar por esta simulação! Espero que tenha gostado. Você pode executar  \"  $ cmd -deploy previous \" para voltar aos tempos de lançamento que você foi capaz de hackear    .";
    
    step++;
    }
    
//10
    if (document.getElementById("cmd").value === "$cmd -deploy previous" && step == 10) {
        
    document.getElementById("steps").innerHTML = "Programa feito :)";
    
    document.getElementById("cmd").value = "$cmd";
    
    document.getElementById("output").innerHTML = `
    Exarch - LAUNCH TIME NOW\n
    The Hammerhead - LAUNCH TIME 01:43\n
    Aurora - LAUNCH TIME 12:32\n
    Mercenary - LAUNCH TIME 18:32\n
    The Paladin - LAUNCH TIME 22:00:01\n
    SS Lullaby - LAUNCH TIME 00:00:00\n
    HWSS Despot - LAUNCH TIME 03:42\n
    SC Invincible - LAUNCH TIME 17:17\n
    USS Royal - LAUNCH TIME 18:19\n
    ISS Guard - LAUNCH TIME 6:49\n
    STS The Exterminator - LAUNCH TIMES 14:11\n
    BC Hannibal - LAUNCH TIMES 14:11\n
    SSE Karma - LAUNCH TIMES 16:21\n
    CS Raving - LAUNCH TIMES 03:12\n
    LWSS Geisha - LAUNCH TIMES 03:13\n
    `;
    
    step++;
    }
}
   
