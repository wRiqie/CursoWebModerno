const nome = 'Pedro'

const concatenacao = 'Olá' + nome + '!'

const template = `
    Olá
    ${nome}`

    //Ao utilizar ${} ele considera os espaços, quebras de linha, etc..,
    //Lembrando que é necessário utilizar o crase, assim podendo realizar operações dentro do mesmo
    //*Pode ser usado para chamar funções

console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)