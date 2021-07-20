Array.prototype.filter2 = function(callback) {
    const array = []
    for (let i = 0; i < this.length; i++) {
        if(callback(this[i], i, this)) {
            array.push(this[i])
        }
    }
    return array
}


const produtos = [
    {nome: 'Notebook', preco: 2500.30, fragil: true},
    {nome: 'Tenis', preco: 875.25, fragil: false},
    {nome: 'IPad Pro', preco: 4500, fragil: true},
    {nome: 'Processador', preco: 2500.05, fragil: true},
    {nome: 'Copo Vidro', preco: 15.90, fragil: true},
    {nome: 'Bola Futebol', preco: 199.99, fragil: false},
    {nome: 'Boneca Brinquedo', preco: 18.99, fragil: false},
]

const caros = (p) => p.preco > 600.00

const frageis = (p) => p.fragil

console.log(produtos.filter2(caros).filter2(frageis))