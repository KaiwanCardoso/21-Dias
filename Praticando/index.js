//Criando um projeto aleatorio

//Ideia do projeto é criar um sistema de cardapio

let cardapio = prompt("Qual comida quer comer hoje ? \n1 = Arroz, feijão e carne; \n2 = Arroz, feijão tropeiro e frango")

let nUm = 1
let nDois = 2

if(cardapio = nUm){
    console.log("Você escolheu o prato tradiconal da casa!!")
} 
    else(console.log("Você escolheu o prato gostoso!!"))

let trocaSolic = prompt("Você gostaria de alterar sua carne ?!")

if(trocaSolic === "sim"){
    prompt("Qual você deseja escolher ? \n1 = Carne Bovina; \n2 = Carne Suina; \n3 = Frango")
    
}
    else(console.log("Certinho, iremos montar seu prato"))