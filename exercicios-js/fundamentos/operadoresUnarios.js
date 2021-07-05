let num1 = 1
let num2 = 2

num1++
console.log(num1)
--num1 //prioridade maior de execução
console.log(num1)

console.log(++num1 === num2--) //retorna true, pois vai realizar o incremento, depois a comparação, depois o decremento, logo no momento da comparação o valores são iguais
console.log(num1 === num2) //false