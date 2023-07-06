// 14. Leia um número, utilizando WHILE multiplique este número por 3
// enquanto a soma seja menor que 500 e no final mostre qual o
// último valor


var numero = parseInt(prompt("Digite um número:"));

var soma = 0;
var ultimoValor = numero;

while (soma < 500) {
  ultimoValor *= 3;
  soma += ultimoValor;
}

document.write("O último valor obtido foi: " + ultimoValor);

