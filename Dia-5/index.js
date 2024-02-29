let quantidade
let valor
let opcao = prompt('Escolha entre as opções:' + '\n1 = Abastecer com Gasolina; \n2 = Abastecer com Alcool; \n3 = Calibrar os Pneus')

switch (opcao){
    case '1': 
        valor = parseInt(prompt('Qual o valor que deseja abastecer ?'))
        quantidade = valor / 5
        console.log('Foram abastecidos ' + quantidade + 'L de gasolina em seu veiculo')
        break

    case '2':
        valor = parseInt(prompt('Qual o valor que deseja abastecer ?'))
        quantidade = valor / 3
        console.log('Foram abastecidos ' + quantidade + 'L de alcool em seu veiculo')
        break

    case '3':
        valor = parseInt(prompt('Quanto deseja colocar nos pneus ?'))
        console.log('Voce calibrou seus pneus com sucesso')
        break

}