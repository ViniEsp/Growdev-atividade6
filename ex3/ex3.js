// 3. Utilizando o IF, ELSE, ELSE IF crie uma estrutura para receber um
// número de 1 a 7 e imprimir no console o dia da Semana. Para este
// exercício assumimos que o dia 1 é Domingo, dia 2 é segunda e assim
// por diante. Caso o número recebido não esteja neste intervalo
// imprimir “Dia não reconhecido”.

let dia = prompt("Digite o dia da semana:")

if(dia === 1){
    console.log("Domingo")
}else if (dia === 2){
    console.log("Segunda")
}else if (dia === 3){
    console.log("terça")
}else if (dia === 4){
    console.log("quarta")
}else if (dia === 5){
    console.log("quinta")
}else if (dia === 6){
    console.log("Sesta")
}else if (dia === 7){
    console.log("Sabado")
}else{
    console.log("Dia não reconhecido")
}
