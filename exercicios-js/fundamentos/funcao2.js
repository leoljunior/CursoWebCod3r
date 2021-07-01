//Armazenando função em uma variável
const imprimirSoma = function (a, b) {
    console.log(a + b)
}
imprimirSoma(2, 5)

//Arrow Function
const soma = (a, b) => {
    return a + b
}
console.log(soma(2, 2))

//return implícito
const subtracao = (a, b) => a - b
console.log(subtracao(5, 2))


const imprimir = a => console.log(a)
imprimir('Olá!!!') 