// 15. Crie um algoritmo que armazene três valores, para cada um dos
// lados de um triângulo: A, B e C. Verifique se os lados fornecidos
// formam realmente um triângulo. Se formar, deve mostrar no console
// o tipo de triângulo: isósceles, escaleno ou equilátero.
// a. Para verificar se os lados fornecidos formam um triângulo: A <
// B + C e B < A + C e C < A + B.
// b. Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou
// B=C);
// c. Triângulo escaleno: possui todos os lados diferentes (A<>B e
// B<>C e A<>C);
// d. Triângulo equilátero: possui todos os lados iguais (A=B e
// B=C);

// Armazenar os valores dos lados do triângulo
var A = parseFloat(prompt("Digite o valor do lado A:"));
var B = parseFloat(prompt("Digite o valor do lado B:"));
var C = parseFloat(prompt("Digite o valor do lado C:"));

if (A < B + C && B < A + C && C < A + B) {
  
  if (A === B && B === C) {
    document.write("O triângulo é equilátero.");
  } else if (A === B || A === C || B === C) {
    document.write("O triângulo é isósceles.");
  } else {
    document.write("O triângulo é escaleno.");
  }
} else {
  document.write("Os lados fornecidos não formam um triângulo.")
}