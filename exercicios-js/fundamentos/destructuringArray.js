const [a] = [10] //destructuring usando arrays, pegando o valor da primeira posição do array e setando na variável a
console.log(a)

const [n1, , n3, , n5, n6 = 0] = [10, 7, 6, 155] //n1=10 n2=ignorado n3=6 n4=ignorado n5=undefined n6=0 
console.log(n1, n3, n5, n6)

const [, [, nota]] = [[,9, 8], [9, 6, 8]]
console.log(nota) //vai imprimir o valor 6 que é o segundo valor do segundo array.
