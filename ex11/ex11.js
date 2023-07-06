// 11. Utilizando Switch, faça um programa que pergunte em que turno
// você estuda. Peça para digitar “M” para matutino ou “V” para
// vespertino ou “N” para noturno. Mostre um alerta com a mensagem
// “Bom dia!” ou “Boa tarde” ou “Boa Noite” ou “Valor inválido”,
// conforme o caso.

// Obter o turno de estudo do usuário
var turno = prompt("Em qual turno você estuda? Digite 'M' para matutino, 'V' para vespertino ou 'N' para noturno:");

turno = turno.toUpperCase();

var mensagem;

switch (turno) {
  case 'M':
    mensagem = "Bom dia!";
    break;
  case 'V':
    mensagem = "Boa tarde!";
    break;
  case 'N':
    mensagem = "Boa noite!";
    break;
  default:
    mensagem = "Valor inválido!";
    break;
}

alert(mensagem);
