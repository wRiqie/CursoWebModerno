function soma() {
    let soma = 0
    for (i in arguments) {
        soma += arguments[i]
    }
    return soma
}

console.log (soma())
console.log (soma(1))
console.log (soma(5, 6, 10.3))
console.log (soma(3, 5, ' Teste'))
console.log (soma(' Testando ', 'a ', 'b ', 'c '))