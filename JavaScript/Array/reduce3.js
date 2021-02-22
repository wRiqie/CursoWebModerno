Array.prototype.reduce2 = function(callback, valorInicial) {
    const indiceInicial = valorInicial ? 0 : 1
    let acumulador = valorInicial || this[0]
    for(let i = indiceInicial; i < this.length; i++) {
        acumulador = callback(acumulador, this[i], i, this)
    }
    return acumulador
}

const alunos = [
    {nome:'João', nota: 7.3, bosista: false},
    {nome:'Maria', nota: 9.2, bosista: true},
    {nome:'Pedro', nota: 9.8, bosista: false},
    {nome:'Ana', nota: 8.7, bosista: true}
]

const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bosista).reduce2(todosBolsistas))