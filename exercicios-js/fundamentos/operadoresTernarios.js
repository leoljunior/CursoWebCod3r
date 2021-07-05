const result = nota => nota >=7 ? 'Aprovado' : 'Reprovado' //arrow function com somente um parâmetro, a () pode ser omitida e o retorno é implicito depois da => nota é nome do parâmetro
//operador ternário tem 3 operandos. expressão booleana e 2 retornos um para true e outro para false

console.log(result(7.1))
console.log(result(6.9))

