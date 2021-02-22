const aprovados = ['Ana', 'Joao', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice) { //function(parametro das strings, parametro para indices)
//Para ver indice, é necessário o 1°param, da pra colocar ainda um ultimo que mostra todo o array
    console.log(`${indice + 1}) ${nome}`)
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)