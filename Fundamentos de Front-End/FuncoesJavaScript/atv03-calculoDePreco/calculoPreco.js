/*
3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
- À vista Débito, recebe 10% de desconto;
- À vista no Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/
function pagamentoDebito() {
    return valorPago - (valorPago * 0.1);
};

function pagamentoDinheiroOuPix() {
    return valorPago - (valorPago * 0.15);
};

function pagamentoDivididoCredito() {
    return valorPago + (valorPago * 0.1 );
}

const valorPago = parseFloat(prompt("Quanto custa o produto? "));
const formaDePagamento = prompt("Qual a forma de pagamento? \n1-Débito\n2-Dinheiro ou Pix\n3-Crédito ");

if (formaDePagamento === '1') {
    alert('O valor do produto é R$' + valorPago + ' e com o desconto de 10% pago em débito sai por R$' + pagamentoDebito())
} else if (formaDePagamento === '2') {
    alert('O valor do produto é R$' + valorPago + ' e com o desconto de 15% pago em dinheiro ou pix sai por R$' + pagamentoDinheiroOuPix())
} else {
    const QuantidadeParcelas = prompt("Deseja dividir o produto em quantas parcelas? ")
    if (QuantidadeParcelas <= 2) {
        alert('O valor do produto é R$' + valorPago + ' e não possui nenhum desconto')
    } else {
        alert('O valor do produto é R$' + valorPago + ' e possui uma taxa de 10% de juros, ficando R$' + pagamentoDivididoCredito())
    }
}