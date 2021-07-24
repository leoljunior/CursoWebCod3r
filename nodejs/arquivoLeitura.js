//criando uma referência do modulo file system(fs), não precisa ser instalado pois é do core do node
const fs = require('fs')

const caminho = __dirname + '/arquivo.json' //__dirname representa o diretorio atual

//lendo de forma sincrona.......não recomendado para arquivos grandes, pode travar o event looping do node
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

//lendo de forma assincrona.....
fs.readFile(caminho, 'utf-8', (err, conteudo) => { //nesse caso o terceiro parametro é uma callback com erro, conteudo de params
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

//pelo arquivo ser um JSON podemos ler dessa forma, que por sinal sera retornada antes por ser sincrono
const config = require('./arquivo.json') //nesse caso precisa por a extensão, se não ele procura por padrão um arquivo .js
console.log(config.db)//não precisa do parse, já retorna um objeto


//lendo uma pasta.....
fs.readdir('../../Angular', (err, arquivos) => {
    console.log('Conteúdo da pasta...')
    console.log(arquivos)
})

