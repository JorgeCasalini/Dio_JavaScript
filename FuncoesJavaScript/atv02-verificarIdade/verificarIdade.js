function verificarIdade(idade){
    if(idade >=18){
        alert("Você é maior de idade")
    }else{
        alert("Você é menor de idade")
    }
}

let idade = prompt("Digite sua idade: ")
verificarIdade(idade);