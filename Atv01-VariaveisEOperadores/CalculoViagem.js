/*
Faça um program para calcular o valor de uma vigem.

Você tera 3 variáveis. Sendo elas:
1- Preço do combustível;
2- Gasto médio de combusrível do carro por KM;
3- Distância em KM da viagem;

*/



const precoCombustivel = prompt("Digite o valor do combustível na sua cidade:");
const kmPorLitro = prompt("Quanto km o carro faz por litro?");
const distanciaEmKm = prompt("Digite o valor da distância em km:");

const valorGasto = distanciaEmKm / kmPorLitro * precoCombustivel
alert("O valor gasto para chegar ao local é de R$" + valorGasto.toFixed(2));