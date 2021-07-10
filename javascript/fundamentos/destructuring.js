//recurso ES2015

const pessoa = {
    nome: 'Ana',
    idade: 19,
    endereco: {
        logradouro: 'rua abc',
        numero: 50
    }
}

const { nome, idade} = pessoa //retirando(desestruturando) nome, idade do objeto pessoa  
console.log(nome, idade)

const { nome: n, idade: i } = pessoa//retirando(desestruturando) nome, idade do objeto pessoa, porem os colocando dentro de uma variável
console.log(n, i)

const { sobrenome, bemHumorada = true } = pessoa//retirando(desestruturando) atributos que não existem no objeto pessoa
console.log(sobrenome, bemHumorada)

const { endereco: { logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)

console.log(pessoa)

