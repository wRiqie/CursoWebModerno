function pegarValorAleatorio(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = -1

do {//ignora o valor inicial do opcao, e só começa a repetição depois do while ser executado 1 vez
    opcao = pegarValorAleatorio(-1, 10)
    console.log(`A opção escolhida foi ${opcao}`)
} while (opcao != -1)

console.log('Acabou')