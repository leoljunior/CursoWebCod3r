//não intera sobre indices, mas sobre valores
for (let letra of "Dimitresco") {
	console.log(letra)
}

const assuntoEcma = ['Map', 'Set', 'Promise']

for(let indice in assuntoEcma) {
	console.log(indice) //indices
}


for(let valores of assuntoEcma) {
	console.log(valores) //valores
}


const assuntosMap = new Map([
	['Map', { abordado: true }],
	['Set', { abordado: true }],
	['Promise', { abordado: false }]
])

for (let assunto of assuntosMap) {
	console.log(assunto)
}

for (let chave of assuntosMap.keys()) {
	console.log(chave)
}

for (let valor of assuntosMap.values()) {
	console.log(valor)
}

for (let [ch, vl] of assuntosMap.entries()) {
	console.log(ch, vl) //percorrendo e usando destructuring em cima de chave/valor
}

const s = new Set(['a', 'b', 'c'])
for (let letra of s) {
	console.log(letra)
}