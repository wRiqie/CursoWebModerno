function criarProd(id, nome, preco, marca) {
    return {
        id: id,
        nome: nome,
        preco: preco,
        marca: marca
    }
}

console.log(criarProd(1, 'Xbox Series X', 4879.99, 'Microsoft'))
console.log(criarProd(2, 'Playstation 5', 4879.99, 'Sony'))
console.log(criarProd(3, 'Nintendo Switch', 2900.99, 'Nintendo'))