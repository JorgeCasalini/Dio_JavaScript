//Escreva um programa que dado um número escreva sua tabuada.

const numero = 8;
for (let i = 1; i <= 10; i++) {
    const tabuada = numero * [i];
    console.log(numero + ' * ' + [i] + ' = ' + tabuada )
}