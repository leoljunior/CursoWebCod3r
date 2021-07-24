const fs = require('fs')

const produto = {
    nome: 'celular',
    preco: 12299.99,
    desconto: 0.15
}

//escreveando um arquivo a partir do writeFile e persistindo no disco
fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {
    console.log(err || 'Arquivo Salvo!!')
})