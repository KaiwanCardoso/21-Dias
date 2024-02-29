let nome 
let idade
let peso
let altura
let profissao

//Referencia Inicial
nome = prompt("Olá, por favor insira seu Nome!")
idade = parseInt(prompt("Agora, insira sua idade!"))
peso = Number(prompt("Desta vez, seu peso!"))
altura = Number(prompt("Qual sua altura ?"))
profissao = prompt("Qual sua profissão ?")

console.log("Olá " + nome + ", Você tem " + idade + " anos, é " + profissao + ", tem " + altura + "M de altura e pesa " + peso + "kg!")

// Descobrindo se é maior de idade ou não
if (idade > 18){
    console.log("Está liberado para tomar umas geladas!")
}
else if(idade < 18){
    console.log("Sem gelada para você")
}
// Texto para calcular idade em Meses, Semanas e Dias
let idadeM = (idade * 12)
let idadeS = (idade * 52)
let idadeD = (idade * 365)
console.log("Você tem " + idadeM + " meses de idade, " + idadeS + " semanas e " + idadeD + " dias de vida")

// Qual faixa ele vai estar ?
let imc = peso / (altura * altura)

if (imc < 18,5){
    console.log("Faixa de peso: Magreza")
}    else if (imc >= 18,5 && imc <= 24,9){
        console.log("Faixa de peso: Normal")
}   else if (imc >= 24,9 && imc <= 30){
        console.log("Faixa de peso: Sobrepeso")
}
    else{
        console.log("Faixa de peso: Obesidade")
}

let anoUsado = 2023

let nasceu = (anoUsado - idade)
    console.log("Você nasceu em " + nasceu)

let contador = 0

for (let i = nasceu; i <= anoUsado; i++){
    
    console.log(i + " - " + contador + " anos de idade")
    contador++
}

do {
    let continuar = prompt("O usuario deseja inserir novos dados ? (s/n)")
} while (continuar == "s")


