const http = require('http')

const getTurma = letra => {
	const url = `http://files.cod3r.com/curso-js/turma${letra}.json`
	return new Promise((resolve, reject) => {
		http.get(url, res => {
		let resultado = ''
		
		res.on('data', dados => {
			resultado += dados
		})
		
		res.on('end', () => {
			try {
				resolve(JSON.parse(resultado))
			} catch(e) {
				reject(e)
			}
		})
	})
	})
}	

//Tem como objetivo simplificar o uso de promises
//await só funciona em uma função marcada com async
let obterAlunos = async () => {
	const ta = await getTurma('A')
	const tb = await getTurma('B')
	const tc = await getTurma('C')
	return [].concat(ta, tb, tc)
}//isso vai retornar um objeto AsyncFunction

obterAlunos()
	.then(alunos => alunos.map(a => a.nome))
	.then(nomes => console.log(nomes))