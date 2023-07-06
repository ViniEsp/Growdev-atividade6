// 9. Informe um valor a uma variável e imprima no console se o número
// é primo.


let numero = parseInt(prompt("Informe um numero:"))
let numPrimo = true;

for (let i = 0; i < numero ; i++) {
    console.log("Passou por aqui " + i)
    if (numero % i === 0) {
        numPrimo = false;
        break;
    }
}


if(numPrimo){
    console.log("O numero " +numero+ " é primo.")
}else{
    console.log("O numero " +numero+ " nâo é primo.");
}





// if(numero % 2 !== 0){
//     console.log("O numero é primo")
// }else{
//     console.log("Nâo é primo");
// }
