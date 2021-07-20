const produtos = [
    {nome: 'Notebook', preco: 2500.30, fragil: true},
    {nome: 'Tenis', preco: 875.25, fragil: false},
    {nome: 'IPad Pro', preco: 4500, fragil: true},
    {nome: 'Processador', preco: 2500.05, fragil: true},
    {nome: 'Copo Vidro', preco: 15.90, fragil: true},
    {nome: 'Bola Futebol', preco: 199.99, fragil: false},
    {nome: 'Boneca Brinquedo', preco: 18.99, fragil: false},
]

//o filter retorna boolean, se true entra no array, se false não entra

console.log(produtos.filter(function(p) { //nenhum item entra
    return false
}))

console.log(produtos.filter(p => true)) //todos entram

//Desafio minha resolução

const caros = (p) => p.preco > 600.00

const frageis = (p) => p.fragil

console.log(produtos.filter(caros).filter(frageis))