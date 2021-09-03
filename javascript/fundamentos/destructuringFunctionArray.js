function rand([min = 0, max = 1000]) {
    if (min > max)[min, max] = [max, min] //[min, max]usando destructuring para trocar os valores = [max, min]criando um array com os valores desestruturados na linha 1
    const valor = Math.random() * (max - min) * min
    return Math.floor(valor)
}

console.log(rand([50, 40])) //valor min/max retorna corretamente pois entra no if
console.log(rand([992])) //passando só o primeiro valor(min)
console.log(rand([, 10])) //passando só o segundo valor(max)
console.log(rand([])) //passando array vazio, utiliza os valores padrões
    //console.log(rand()) erro, pois valores ficam undefined