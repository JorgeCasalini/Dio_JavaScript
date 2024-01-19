/*Faça um prograna para calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo elas:
1 - Preço do etanol;
2 - Preço do gasolina;
3 - O tipo de combustível que está no seu carro;
4 - Gasto médio de combustível do carro por KM;
5 - Distância em KM da viagem;

Imprima em um alert o valor que será gasto para realizar esta viagem.
*/

const valorEtanol = 5.50;
const valorGasolina = 7.50;

const tipoCombustivel = prompt("Deseja por etanol ou gasolina de combustível?");
const mediaCombustivelporKM = prompt("Quantos KM seu carro faz por Litro?");
const distanciaViagem = prompt("Qual a distância até chegar onde deseja?");

if(tipoCombustivel === 'etanol'){
    const valorTotal = (valorEtanol * distanciaViagem) / mediaCombustivelporKM
    alert ("O valor gasto em " + tipoCombustivel + " para chegar onde deseja é de R$" + valorTotal.toFixed(2));
} else {
    const valorTotal = (valorGasolina * distanciaViagem) / mediaCombustivelporKM
    alert ("O valor gasto em " + tipoCombustivel + " para chegar onde deseja é de R$" + valorTotal.toFixed(2));
};