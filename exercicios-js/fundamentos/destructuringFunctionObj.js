function rand({min = 0, max = 1000}) { //usando destructuring dentro da função para extrair os valores min/max, porém setando um valor padrão
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand({max: 50, min: 40}))
console.log(rand({max: 2}))
const obj = {min: 20, max: 30}
console.log(rand(obj))
console.log(rand({min: 955}))
console.log(rand({}))//retornar valor usando os valores padrões que foram setados
//console.log(rand()) gera erro pois o valores min/max estão undefined
