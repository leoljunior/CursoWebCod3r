console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1
exports.b = 2
module.exports.c = 3

exports = null
console.log(module.exports)
//msm atribuindo null para exports o module.exports continua apontando para o que foi setado anteriormente
//pq exports é outra variável que aponta para o msm objeto

//não utilizar essa forma
exports = {
	nome: 'teste'
}

console.log(module.exports)
//o module.exports continua sendo o msm objeto, msm que tenho mudado a referêcia duas vezes

//correto
module.exports = { publico: true }