//

function calcular(){
    let numero1 = Number (document.getElementById("numero1").value)
    let numero2 = Number (document.getElementById("numero2").value)

    let mensagem = document.getElementById("mensagem")

    let soma = numero1 + numero2;

    mensagem.innerText = `O resultado é ${soma}`

}