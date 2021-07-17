console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function() {
    return this.split('').reverse().join('')
}//split separa todos elementos da string, espaços inclusive. 
//reverse inverte a posição dos elementos
//join junta novamente os elementos em uma string
console.log('Leonardo'.reverse())
console.log('Leonardo de Lima Junior'.reverse())

Array.prototype.first = function() {
    return this[0]
}
console.log([1, 2, 3, 4, 5].first())
console.log(['Olá', 'tudo', 'bem','?'].first())

String.prototype.toString = function() { //JAMAIS ALTERAR COMPORTAMENTOS QUE JÁ EXISTEM
    return 'Lascou!!!'
}
console.log('Leonardo'.reverse())