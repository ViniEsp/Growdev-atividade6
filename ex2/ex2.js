// 2. Para o mesmo exercício acima insira mais uma variável a
// condicional, além de saber se o motorista tem 18 anos ou mais,
// temos que saber também se ele é habilitado para dirigir. Caso ele
// tenha idade maior ou igual a 18 anos e possua habilitação, insira no
// html “Pode dirigir” caso contrário imprima “Não pode dirigir”.


var idade = prompt("Digite a idade do motorista:");

if (idade >= 18) {
  var habilitado = confirm("O motorista possui habilitação?");
  
  if (habilitado) {
    document.write("Pode dirigir");
  } else {
    document.write("Não pode dirigir");
  }
} else {
  document.write("Não pode dirigir");
}
