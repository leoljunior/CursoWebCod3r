//Chave/Valor
const saudacao = 'Opa' //contexto léxico 1

function exec() {
    const saudacao = 'Falaaa!!' //contexto léxico 2
    return saudacao
}

//Objetos são grupos aninhados de pares de chave/valor
const cliente = {
    nome: 'Leonardo',
    Idade: 37,
    Peso: 90,
    Endereco: {
        Rua: 'Rua José M. Telles',
        Numero: 99,
        Bairro: 'Belo Horizonte'
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)