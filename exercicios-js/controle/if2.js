function teste1(num) {
    if(num > 7)         //é possível usar o if sem a abertura de um bloco, porém só estará relacionado com o if, apenas uma sentença de código, no caso a linha 3
    console.log(num)    //a linha 4 por não estar relacionada com o if sempre será executada.
    console.log('Final')
}
console.log('Teste 1:')
teste1(6)
console.log('Teste 2:')
teste1(8)