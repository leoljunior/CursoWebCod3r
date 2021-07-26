const tecnologias = new Map()
tecnologias.set('react', { framework: false })
tecnologias.set('angular', { framework: true })

console.log(tecnologias.get('react'))
console.log(tecnologias.get('angular').framework)

const chavesVariadas = new Map([
	[function () {}, 'Função'],
	[{}, 'Objeto'],
	[123, 'Número'],
])

chavesVariadas.forEach((vl, ch) => {
	console.log(ch, vl)
})

console.log(chavesVariadas.has(123)) //diz se o elemento 123 está presente
chavesVariadas.delete(123)//delete o elemento, tambem retorna false/true
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size)