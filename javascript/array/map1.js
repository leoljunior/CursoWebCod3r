const nums = [1, 2, 3, 4, 5]

//Map = For, porém com um propósito

let result = nums.map(e => e * 20)

console.log(result, nums) //Map não alera o array original, ele cria outro array, por isso ainda é possível imprimir o nums com os valores originais

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

result = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(result)

