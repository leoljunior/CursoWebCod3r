function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Macbook',
    preco: 8566.45,
    desc: 0.15,
    getPreco //como ja tem uma função com esse nome, ele cria um atributo e associa à função de msm nome
}

global.preco = 20
globalThis.desc = 0.1
console.log(getPreco())//dessa forma, sem setar os valores global, retorna um NaN pois o this está no contexto global

console.log(produto.getPreco())

const carro = {
    preco: 89855.45,
    desc: 0.2
}
console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

//Diferenças entre chamar com call e apply
console.log(getPreco.call(carro, 0.17, '$')) //passa primeiro o contexto e logo após os params
console.log(getPreco.apply(global, [0.17, '$'])) //passa primeiro o contexto e logo após os params dentro de um array



