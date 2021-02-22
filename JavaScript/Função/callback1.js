const fabricantes = ["Mercedes", "Audi", "BMW", "Bugatti"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)
fabricantes.forEach(fabricante => console.log(fabricante))
//^poderia ser qualquer nome ao invés de FABRICANTE...