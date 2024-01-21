/*
Faça um algoritmo que dado as 3 notas tiradas por um aluno 
em um semestre da faculdade, calcule e imprima a sua média
e a sua classificação conforme a tabela abaixo:

Média = (nota 1 + nota 2 + nota 3 ) / 3;

Classificação:
- Média menor que 5, reprovação;
- Média entre 5 e 7, recuperação;
- Média acima de 7, passou de semestre;
*/

const nota1 = parseInt(prompt("Digite o valor da primeira nota: "));
const nota2 = parseInt(prompt("Digite o valor da segunda nota: "));
const nota3 = parseInt(prompt("Digite o valor da terceira nota: "));

const media =(nota1 + nota2 + nota3) / 3;


if(media < 5){
    alert("Sua nota é " + media.toFixed(2) + " você está reprovado.");
} if (media >= 5, media < 7 ){
    alert("Sua nota é " + media.toFixed(2) + " você está de recuperação.");
} else {
    alert("Sua nota é " + media.toFixed(2) + " você passou de semestre.");
}