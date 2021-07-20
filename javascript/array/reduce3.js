Array.prototype.reduce2 = function(callback) {
    let acumulador = this[0]
    for (let i = 1; i < this.length; i++) {
        acumulador = callback(acumulador, this[i], i, this) 
    }
    return acumulador
}

Array.prototype.reduce3 = function(callback, valorInicial) {
    const indiceInicial = valorInicial ? 0 : 1
    let acumulador = valorInicial || this[0]
    for (let i = indiceInicial; i < this.length; i++) {
        acumulador = callback(acumulador, this[i], i, this) 
    }
    return acumulador
}



const soma = (total, valor) => total + valor
const nums = [1, 2, 3, 4, 5, 6]
console.log('Custom reduce2')
console.log(nums.reduce2(soma))
console.log('Custom reduce3 com valor inicial')
console.log(nums.reduce3(soma, 21))
console.log('Reduce Original')
console.log(nums.reduce(soma))
