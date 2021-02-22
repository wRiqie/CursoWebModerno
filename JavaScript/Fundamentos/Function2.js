// Armazenando uma função em uma variável/constante
const imprimirSoma = function (a, b){
    console.log(a + b)
}

imprimirSoma(2,3)

// Armazenando uma função arrow em uma variável/constante
// o simbolo "=>" substitui o nome function, é uma versão reduzida
const soma = (a, b) => {
    return a + b
}

console.log(soma(2,3))

//retorno implícito
const subtracao = (a, b) => a - b //Quando não tem {} significa que a função terá uma única linha
console.log(subtracao(2,3))

const imprimir2 = a => console.log(a)
imprimir2('Legal!!!')