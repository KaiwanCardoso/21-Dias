// Pegando informações
let qualNome = prompt('Qual seu nome ?')
let qualIdade = parseInt(prompt('Qual sua Idade ?'))
let possuiCNH = prompt('Você possui carta de motorista ?')
let carro = prompt('Você possui um carro ?')

if(qualIdade < 18 || possuiCNH === 'nao'){
    console.log(qualNome + ', Você não pode dirigir')
}else if(qualIdade <=18 && possuiCNH == 'sim' && carro == 'nao'){
    console.log(qualNome + ', Você pode dirigir mas não tem um carro')
}
else(qualIdade >= 18 && possuiCNH == 'sim' && carro == 'sim')[
    console.log(qualNome + ', Você será o motorista')
]

