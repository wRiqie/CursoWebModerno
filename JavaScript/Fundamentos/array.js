//Array é um vetor
//Lembrando que começa contando do 0
const valores = [7, 8, 9, 10]

console.log(valores[0], valores[3])

console.log(valores[4])

valores[4] = 11

console.log(valores)

console.log(valores.length) 

valores.push({id: 3}, false, null, 'teste')
//.push adiciona novos valores

console.log(valores)

console.log(valores.pop())
//.pop remove o último valor do array
delete valores[0]
console.log(valores)

console.log(typeof valores)