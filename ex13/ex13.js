// 13. Faça um algoritmo que armazene um número e imprima os
// números ímpares entre 1 e o número armazenado.


var numero = parseInt(prompt("Digite um número inteiro:"));

document.write("Números ímpares entre 1 e " + numero + ": ");


for (var i = 1; i <= numero; i++) {
  if (i % 2 !== 0) {
    document.write(i + ", ");
  }
}
