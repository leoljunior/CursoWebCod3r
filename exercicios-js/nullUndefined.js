let valor //não inicializada = undefined
console.log(valor)

valor = null //ausência de valor, foi inicializada mas não tem valor e não aponta pra nda
console.log(valor)
//console.log(valor.toString()) Erro!!

const produto = {}
console.log(produto.preco) //o preco nao existe, logo será undefined
console.log(produto) //retorna um objeto vazio

produto.preco = 3.50
console.log(produto)

produto.preco = undefined //evitar atribuir undefined
console.log(!!produto.preco) // como é undefined vai retornar falso
console.log(produto) //retorna objeto com atributo preço com valor undefined
//delete produto.preco retorna um objeto vazio

produto.preco = null // sem preço
console.log(!!produto.preco) //convertendo pra boolean vai retornar false, pois é null
console.log(produto)