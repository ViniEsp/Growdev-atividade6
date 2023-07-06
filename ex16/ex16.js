// 16. Escreva um algoritmo que armazene o ano atual e o ano de
// nascimento de uma pessoa. Escrever uma mensagem no console
// que diga se ela poderá ou não votar este ano (não é necessário
// considerar o mês em que a pessoa nasceu).

// Armazenar o ano atual
var anoAtual = 2023;
var anoNascimento = parseInt(prompt("Digite o ano de nascimento:"));

var idade = anoAtual - anoNascimento;


if (idade >= 16) {
  document.write("Você poderá votar este ano!");
} else {
  document.write("Você não poderá votar este ano.");
}
