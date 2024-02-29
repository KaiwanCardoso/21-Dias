let numero = parseInt(prompt("Escolha um número"))


for (let i = numero; i <= numero + 2; i++){
    console.log("tabuada do número: " + i)
    for (let j = 0; j <= 10; j++){
        console.log(i + " X " + j + " = " + i * j)
    }

}