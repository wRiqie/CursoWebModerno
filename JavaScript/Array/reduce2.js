const alunos = [
    {nome:'João', nota: 7.3, bosista: false},
    {nome:'Maria', nota: 9.2, bosista: true},
    {nome:'Pedro', nota: 9.8, bosista: false},
    {nome:'Ana', nota: 8.7, bosista: true}
]


// Desafio 1: Todos os alunos são bolsistas?
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bosista).reduce(todosBolsistas))

// Desafio 2 : Algum aluno é bolsista?
const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bosista).reduce(algumBolsista))