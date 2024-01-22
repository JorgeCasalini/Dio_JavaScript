/*
3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
- À vista Débito, recebe 10% de desconto;
- À vista no Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

const valorProduto = parseInt(prompt("Digite o valor do produto: "));
const formaPagamento = prompt("Digite o meio de pagamento: (débito, dinheiro, pix, crédito)")

if (formaPagamento === 'débito') {
    const valorProdutoDebito = valorProduto - (valorProduto * 0.10)
    alert("O Valor do produto com o desconto de 10% em compras no débito é de R$ " + valorProdutoDebito)
} else if (formaPagamento === 'dinheiro') {
    const valorProdutoDinheiro = (valorProduto - (valorProduto * 0.15) )
    alert("O Valor do produto com o desconto de 15% em compras no dinheiro é de R$ " + valorProdutoDinheiro)
} else if(formaPagamento === 'pix'){
    const valorProdutoPix = (valorProduto - (valorProduto * 0.15) )
    alert("O Valor do produto com o desconto de 15% em compras no pix é de R$ " + valorProdutoPix)
}else{
    const QtdParcelasCredito = prompt("Quantas vezes deseja parcelar a compra ?")
    if (QtdParcelasCredito === '2') {
        alert("Sua compra não tem desconto sai por R$" + valorProduto)
    } else {
        const ValorVariasParcelas = valorProduto + (valorProduto * 0.10)
        alert("Dividindo a compra em mais de 2x acrescenta 10% de juros, sua compra sai por R$" + ValorVariasParcelas)
    }

}