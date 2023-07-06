// 17. Escreva um algoritmo que armazene o número total de eleitores de
// um município, o número de votos brancos, nulos e válidos. Calcular
// e escrever o percentual que cada um representa em relação ao
// total de eleitores. O algoritmo deve fazer uma validação para que as
// porcentagens dos votos armazenados (brancos, nulos e válidos)
// respeitem o limite do número total de eleitores, ou seja, garantir que
// a soma dos votos brancos, nulos e válidos não seja maior que o
// número total de eleitores.


var totalEleitores = parseInt(prompt("Digite o número total de eleitores:"));
var votosBrancos = parseInt(prompt("Digite o número de votos brancos:"));
var votosNulos = parseInt(prompt("Digite o número de votos nulos:"));
var votosValidos = parseInt(prompt("Digite o número de votos válidos:"));

if (votosBrancos + votosNulos + votosValidos > totalEleitores) {
  console.log("A soma dos votos é maior que o número total de eleitores. Por favor, revise os valores digitados.");
} else {
 
  var percentualBrancos = (votosBrancos / totalEleitores) * 100;
  var percentualNulos = (votosNulos / totalEleitores) * 100;
  var percentualValidos = (votosValidos / totalEleitores) * 100;

 
  console.log("Percentual de votos brancos: " + percentualBrancos + "%");
  console.log("Percentual de votos nulos: " + percentualNulos + "%");
  console.log("Percentual de votos válidos: " + percentualValidos + "%");
}
