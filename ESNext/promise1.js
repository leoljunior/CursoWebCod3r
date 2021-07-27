let a = 1
console.log(a)

let p = new Promise(function(cumprirPromessa) {
	cumprirPromessa('promessa cumprida!')
}) //promise devolve apenas um valor, caso haja mais valores uma possibilidade seria passar um obj/array com os valores diversos

function firstLetter(word) {
	return word[0]
}

p   //encadeando then
	.then(firstLetter)
	//.then(valor => valor[0])
	.then(letra => letra.toUpperCase())
	//.then(letraMaiscula => console.log(letraMaiscula))
	.then(console.log)

/*
new Promise(function(resolve) {  //resolve nome padrão, caso promessa seja resolvida
	resolve(retorno)
})
	.then(......)
	.then(......)
	.then(......)

*/