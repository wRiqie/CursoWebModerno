Array.prototype.map2 = function(callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++){
        newArray.push(callback(this[i], i, this))// push adiciona um item ao fim do array**
    }
    return newArray
}

const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.50}',
    '{"nome": "Caneta", "preco": 7.50}',
]

// Retornar um array apenas com os preços

const paraObj = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const result = carrinho.map2(paraObj).map2(apenasPreco)
console.log(result)