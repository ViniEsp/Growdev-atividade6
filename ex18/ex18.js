// 18. Uma loja de eletrodomésticos estabeleceu as seguintes
// modalidades de pagamento para a venda de suas mercadorias:

// Escreva um algoritmo que armazene o preço de tabela e o número
// de vezes em que o pagamento será feito. Calcule o valor de cada
// parcela e o preço total da compra e imprima no console.


var precoTabela = prompt("Digite o preço de tabela do produto:");
var numParcelas = parseInt(prompt("Digite o número de parcelas:"));


var valorParcela;
var precoTotal;

if (numParcelas === 1) {
  // À vista com desconto de 2,5%
  valorParcela = precoTabela * 0.975; // Aplica o desconto de 2,5%
  precoTotal = precoTabela - (precoTabela * 0.025); // Preço com desconto
} else if (numParcelas >= 2 && numParcelas <= 5) {
  // De 2 até 5 vezes, sem desconto ou acréscimo
  valorParcela = precoTabela / numParcelas;
  precoTotal = precoTabela;
} else if (numParcelas >= 6 && numParcelas <= 10) {
  // De 6 até 10 vezes, juros de 6%
  valorParcela = (precoTabela * 1.06) / numParcelas; // Aplica juros de 6%
  precoTotal = precoTabela * 1.06; // Preço com juros
} else if (numParcelas >= 11 && numParcelas <= 15) {
  // De 11 até 15 vezes, juros de 13%
  valorParcela = (precoTabela * 1.13) / numParcelas; // Aplica juros de 13%
  precoTotal = precoTabela * 1.13; // Preço 
} else {
  console.log("Número de parcelas inválido.");
}

console.log("Valor de cada parcela: R$ " + valorParcela);
console.log("Preço total da compra: R$ " + precoTotal);
