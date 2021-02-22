console.log(typeof Array)
console.log(typeof new Array)
console.log(typeof [])

let aprovados = new Array ('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo'
aprovados.push('Abia')// Add elementos
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados.length)

console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort()// Organiza
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 2, 'Elemento1', 'Elemento2')// Add, remove, ou add e remove ao mesmo tempo
console.log(aprovados)

aprovados.splice(3, 0, 'Elemento3', 'Elemento4')// Add, remove, ou add e remove ao mesmo tempo
console.log(aprovados)