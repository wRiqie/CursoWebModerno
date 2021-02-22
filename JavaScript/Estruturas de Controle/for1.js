let contador = 1
while (contador <= 10){
    console.log(`Contador = ${contador}`)
    contador++
}

for(let i = 1; i <= 10; i++){//Lembrar de usar let****
    console.log(`i = ${i}`)
}

const notas = [6.7, 7.4, 9.8, 8.1, 7.7]
for(let i = 0; i < notas.length; i++){
    console.log(`nota = ${notas[i]}`) //A explicação é: o i vai ter os valores 0 1 2 3 4, para chamar uma posição do array de usa notas[1] notas[2] etc.
}

//console.log(i)
//com let o i não fica com acesso global