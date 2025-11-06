// Verificador de Senhas

let senha1 = document.getElementById("senha1").value
let senha2 = document.getElementById("senha2").value

let mensagem = document.getElementById("mensagem")

function compararSenha(){

    let senha1 = document.getElementById("senha1").value
    let senha2 = document.getElementById("senha2").value

    let mensagem = document.getElementById("mensagem")

    if (senha1 === "" || senha2 === ""){
        mensagem.innerText = "Por favor, preencha ambas as senhas";
        mensagem.style.color = "red";
    }

    else if(senha1 === senha2){
        mensagem.innerText = "Senhas iguais. Cadastro concluido!";
        mensagem.style.color = "green";
    }

    else{
        mensagem.innerText = "Senhas diferentes. Tente novamente!";
        mensagem.style.color = "Blue";
    }
}