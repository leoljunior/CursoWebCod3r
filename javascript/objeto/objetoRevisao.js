//Coleção dinâmica de pares chave/valor
const produto = new Object
produto.nome = 'cadeira'
produto['marca do produto'] = 'generica'
produto.preco = 150

console.log(produto)
delete produto['marca do produto']
console.log(produto)

const carro = {
    marca: 'Lamborguini',
    modelo: 'Diablo',
    valor: 1890654,
    proprietario: {
        nome: 'Benedito',
        idade: 97,
        endereco: {
            logradouro: 'Rua Jacir Amaro',
            numero: 102
        }
    },
    condutores: [{
        nome: 'Osmardeucriciano',
        idade: 26
    }, {
        nome: 'Anacideudina',
        idade: 87
    }],
    calcularValorSeguro: function() {
        //.......
    }
}

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'Rua Gato Vesgo'
console.log(carro)

//delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro
console.log(carro)
console.log(carro.condutores)//apesar de ter sido apagada, nao vai retornar erro, pois carro existe e podemos acessar qualquer coisa em carro, msm que nao exista '-'
console.log(carro.condutores.length) //aqui gera um erro, pois length esta undefined
