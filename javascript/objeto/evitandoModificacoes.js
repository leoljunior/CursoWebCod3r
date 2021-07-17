//Object.preventExtensions **Proíbe a criação de novos atributos**
const produto = Object.preventExtensions({
    marca: 'Apple', nome: 'IPhone', preco: 7888
})
console.log('Extensível?? :', Object.isExtensible(produto)) //teste se o objeto foi criado com preventExtensions

produto.nome = 'Motorolla' //permite a alteração
produto.descricao = 'IPhone pirata' //proibida a criação
delete produto.preco //pode ser deletado
console.log(produto)


//Object.seal **Proíbe a criar/deletar atributos**
const pessoa = { nome: 'Allice', idade: 42 }
Object.seal(pessoa)
console.log('Selado?? :', Object.isSealed(pessoa))

pessoa.nome = 'Danielle'
delete pessoa.nome //impossível
pessoa.idade = 19
console.log(pessoa)


//Object.freeze = selado + valores constantes

