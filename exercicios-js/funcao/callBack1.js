const carros = ['Mustang', 'Chevelle', 'Impala', 'Buick']

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

carros.forEach(imprimir)
carros.forEach(carros => console.log(carros))
