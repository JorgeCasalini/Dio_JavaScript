/*
1) Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso.
 */

class Carro {
    marca;
    cor;
    gastoMedioPorKM;

    constructor(marca, cor, gastoMedioPorKM) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKM = gastoMedioPorKM;
    }

    calcularGastoRota(distancia, precoCombustivel) {
     return distancia * this.gastoMedioPorKM * precoCombustivel;
    }
}

const miniContryman = new Carro('Mini Cooper', 'Prata', 1/20);
console.log(miniContryman.calcularGastoRota(50, 4));
const Strada = new Carro('Fiat', 'Vermelha', 1/15);
console.log(Strada.calcularGastoRota(60, 5))