// 10. Tendo como entrada a altura e o sexo (codificado da seguinte
//     forma: 1 para sexo feminino e 2 para sexo masculino) de uma
//     pessoa, construa um programa que calcule e mostre seu peso ideal,
//     utilizando as seguintes fórmulas:
//     - para homens: (72.7 * Altura) – 58
//     - para mulheres: (62.1 * Altura) – 44.7


var altura = parseFloat(prompt("Digite sua altura em metros:"));
var sexo = parseInt(prompt("Digite seu sexo (1 para feminino, 2 para masculino):"));
var pesoIdeal;

if (sexo === 1) {
  pesoIdeal = (62.1 * altura) - 44.7;
} else if (sexo === 2) {
  pesoIdeal = (72.7 * altura) - 58;
} else {
  console.log("Sexo inválido. Por favor, insira 1 para feminino ou 2 para masculino.");
}

console.log("Seu peso ideal é: " + pesoIdeal.toFixed(2) + " kg");
