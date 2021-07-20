const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 22.54 }',
    '{ "nome": "Kit Lapis", "preco": 42.80 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]


//Desafio - minha resolução
const result = carrinho.map(JSON.parse).map(e => Object.values(e)[1])
console.log(result)



//Resolução Professor
const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)