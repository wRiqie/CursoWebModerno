let num1 = 1
let num2 = 2

num1++
console.log(num1)
--num1
console.log(num1)

console.log(++num1 === num2--)//True pois no momento da comparação o num2 é 2 e somente
//depois o num2 vira 1...

console.log(num1 === num2)