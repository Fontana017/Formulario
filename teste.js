
    
    var senha = document.getElementById('senha');
    var mail = document.getElementById('mail');
    var desl = document.getElementById('desl');

    var valorSenha = senha.value;
    var valorMail = mail.value;
    var qualquerNome = desl;

    function okay(){

        if(senha.value === 'Fontana396' && mail.value === 'VitorHogo0031@viaddinho.com'){

             qualquerNome = desl.innerHTML = "Logado com Sucesso";
        
             alert(qualquerNome);

        }else{

             qualquerNome = desl.innerHTML = "Email ou senha errado";
             alert(qualquerNome);
        }

        console.log(desl);
       
    }