//Arrow function
const soma = (a, b) => a + b //sempre anõnima
console.log(soma(2, 2))

const soma2 = (a, b) => {
	return a + b //se for aberto bloco, obrigato ter return
}

//Arrow Function (this)
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({}) 
lexico1() 
lexico2() //independente do bind eles sempre irão apontar para o module.exports/exports

//Parâmetro default
function log(texto = 'Node') {
	console.log(texto)
}
log()
log('Sou mais forte!!')

//operador rest
function total(...numeros) {
	let total = 0
	numeros.forEach(n => total += n)
	return total
}
console.log(total(1, 2, 3, 2, 5, 9, 15))