/*Faça um algoritmo que calcule o fatorial de um número.*/

const fatorial = (f) => {
    let result = f
    for(let i = 1; i < f; i++) {
        result *= i
    }
    return result
}
console.log(fatorial(3))