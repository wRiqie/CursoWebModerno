const produtos = [
    {nome: 'notebook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plástico', preco: 18.99, fragil: false}
]

const caro = p => p.preco >= 500
const fragil = p => p.fragil // Já é verdadeiro ou falso, ent não precisa de ==

const result = produtos.filter(caro).filter(fragil)

console.log(result)