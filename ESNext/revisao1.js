//let e const
{
	var a = 1
	let b = 2
	console.log(b) //let escopo global
}
console.log(a) //var escopo global/função

//template String
const produto = 'Ipad'
console.log(`${produto} é caro!!!`)

//Destructuring
const [l, e, ...tras] = "Cod3r" //l recebe C, e recebe o, ...tras recebe d3r na forma de uma Array
console.log(l, e, tras)

const [x, , y] = [1, 2, 3] //x=1 2ignorado y=3
console.log(x, y)

const { idade: i, nome } = { nome: 'Jill Valentine', idade: 29 }
console.log(i, nome)//renomeando idade por idade