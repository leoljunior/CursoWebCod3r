const aprovados = ['Xiao', 'Kaeya', 'Xinyan', 'Zong Li']

aprovados.forEach(function(nome, indice, array) { //foreach tem 3 parametros, valor, indice, e o proprio array que esta percorrendo
    console.log(`${indice + 1}) ${nome}`)
    console.log(array)
})

aprovados.forEach(xuxa => console.log(xuxa))

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)
