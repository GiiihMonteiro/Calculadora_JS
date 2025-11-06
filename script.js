// ================================================= Exercicio 1 ========================================================

let mudou = false;

function mudarCor(){
    if (mudou === false){
        document.body.style.backgroundColor = "purple"
        mudou = true // agora mudou a cor
    }
    else{
        document.body.style.backgroundColor = "white"
        mudou = false
    }
}
