//Função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(5, 2)
imprimirSoma(2)
imprimirSoma(2, 5, 3, 8, 9)
imprimirSoma()


//Função com retorno
function soma(a, b = 2) {
    return a + b
} 
console.log(soma(8, 8))
console.log(soma(2, 5))
console.log(soma(5))