/**
 O IMC – Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta. 

Formula do IMC:
IMC = peso / (altura * altura)

Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

IMC em adultos Condição:
- Abaixo de 18.5 Abaixo do peso;
- Entre 18.5 e 25 Peso normal;
- Entre 25 e 30 Acima do peso;
- Entre 30 e 40 Obeso;
- Acima de 40 Obsesidade Grave;
 */

const peso = prompt("Digite o seu peso: ");
const altura = prompt("Digite a sua altura: ");

const imc = parseFloat(peso / Math.pow(altura, 2));

if (imc < 18.5) {
    alert("Seu IMC está abaixo do peso")
} else if (imc >= 18.5 && imc < 25) {
    alert("Peso normal")
} else if (imc >= 25 && imc < 30) {
    alert("Seu IMC está acima do peso")
} else if (imc >= 30 && imc < 40) {
    alert("Obeso")
} else {
    alert("Obesidade Grave")

}