let mediageral = 0
let qntHomens = 0
let qntMulheracima7 = 0
let maiorNotahomens = 0
let contador = 1

while(contador <= 10){
    nota = parseInt(prompt('Insira a nota do ' + contador + '° Aluno'))
    sexo = prompt('Insira o sexo (m/f)')
    
    if (sexo == 'm'){
        if (nota > maiorNotahomens){
        maiorNotahomens = nota
        }
        qntHomens++
    }

    if(sexo == 'f' && nota > 7){
        qntMulheracima7++
    }
    
    mediageral += nota
    contador++
}

mediageral = mediageral / 10

console.log("A media geral dos alunos foi: " + mediageral)
console.log("A quantidade de homens cadastrados foi de: " + qntHomens)
console.log("A quantidade de mulheres com notas acima de 7 foi: " + qntMulheracima7)
console.log("A maior nota entre os homens foi de: " + maiorNotahomens)