let contador = 4;
let numeroArray = []
let continuar = true

while(continuar){
    let inserirNumeros = parseInt(prompt("Insira um numero de acordo com sua vontade!!! Você pode enviar ate 5 números"))
    numeroArray[contador] = inserirNumeros
    
    let continuacao = prompt("Para prosseguir digite 1")

    if(continuacao != 1){
        continuar = false;
    }

    if(contador == 0){
        continuar = false
    }
    contador--
}
console.log(numeroArray)