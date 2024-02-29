let nome
let cpf 
let saldo = 2000
let maiorValor = 0
let mediaValor = 0
let saqueedeposito = 0
let continuar = true
let totalDetransicoes = 0


  nome = prompt("Olá cliente, seja bem vindo! Insira seu nome")
    cpf = Number(prompt("Agora por favor, insira seu CPF"))

while(saqueedeposito <= 2000){
   
        
  
    let valor = parseInt(prompt("Insira um valor"))
    let saqueedeposito = prompt("Escolha qual opção \n1 = Saque \n2 = Deposito")
    
    if(valor < 0){
        console.log("Seu valor é invalido!")
        break
    } else if (saqueedeposito == '1' && valor > saldo){
        console.log("Saldo Insuficiente. A transação não foi realizada")
        break
    }

    if (saqueedeposito == '1'){
        if (saldo >= maiorValor){
            saldo = saldo -= valor
           
        } 
    }

    else if (saqueedeposito == '2'){
        if (saldo <= maiorValor){
            saldo = saldo += valor        
            
        } 
    }
    
    totalDetransicoes++

    if(valor > maiorValor){
        maiorValor = valor
    }

    mediaValor += valor

    mediaValor = mediaValor / totalDetransicoes
 

    let continuar = prompt("Deseja continuar ? \n1 = Sim \n2 = Nao")  
    
if(continuar == 2){
        console.log("Caro cliente " + nome + " seu saldo é de: " + saldo)
        maiorValor = console.log(nome + " seu maior valor inserido foi de: " + maiorValor)
        mediaValor = console.log("E sua média de valores inseridos foi de: " + mediaValor)
        break
    }

} 