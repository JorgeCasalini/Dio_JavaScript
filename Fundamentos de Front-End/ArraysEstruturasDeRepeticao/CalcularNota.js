//Escreva um algoritmo simples para calcular nota

const notas = [];

notas.push(10);
notas.push(8);
notas.push(9);

let soma = 0;

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota
}

const media = soma / notas.length;
console.log(media);