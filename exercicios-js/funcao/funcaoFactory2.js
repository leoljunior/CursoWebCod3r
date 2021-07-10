
function criarProduto(tipo, marca, preco, desconto = 0.1) {
    return {
        tipo,
        marca,
        preco,
        desconto
    }
}

console.log(criarProduto('sabão', 'ype', 2.16))
console.log(criarProduto('notebook', 'apple', 8699.23, 0.13))
console.log(criarProduto('cellphone', 'samsung', 1899))
console.log(criarProduto('macarrão', 'luiza', 4.32, 0))