const moduloA = require('../../moduloA')
//pode se usar o caminho absoluto tbm, mas não é legal
console.log(moduloA.ola)

const c = require('./pastaC') //aqui ele executa, vai procurar o index dentro da pasta C
console.log(c.ola2)

/* const http = require('http')
http.createServer((req, res) => {
	res.write('Bom dia!')
	res.end()
}).listen(8080) */