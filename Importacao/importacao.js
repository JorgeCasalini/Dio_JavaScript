const { gets, print } = require('./funcoesAuxiliares');

const quantidadeDeAlunos = gets();
let numerosSorteados = 0;

for (let i = 0; i < quantidadeDeAlunos; i++) {
    const numerosSorteado = gets();
    if (numerosSorteado > maiorNumero) {
        maiorNumero = numerosSorteado
    }
}



print(maiorNumero);

