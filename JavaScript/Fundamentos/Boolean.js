let isAtivo = false

console.log(isAtivo)

isAtivo = true

console.log(isAtivo)

isAtivo = 1
console.log(!isAtivo)
//! = 1 negação = falso

console.log(!!isAtivo)
//!! = 2 negações = verdadeiro

console.log('Os Verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![]) //array
console.log(!!{}) //objeto literal
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('Os Falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('Para finalizar...')
console.log('' || null || 0 || ' ')

let nome = 'Lucas'

console.log(nome || 'Desconhecido')

//Retorna o nome Lucas, caso fosse vazio, retornaria Desconhecido