// Função em JS é First-Class Object (Citizens)
// High-order function ---função é tratada como dado.....


//criando função de forma literal
function fun1() { } //função em JS pode ter ou não parâmetro e pode ou não retornar algo. Quando não é retornado nada explícitamente(return), ela retorna undefined.
                    //desse modo o bloco {} é obrigatorio.

//armazendando dentro de uma variável
const fun2 = function () { } //nesse caso é uma função anônima que é armzenada na variável

//armazendando dentro de um array
const array = [function (a, b) {return a + b}, fun1, fun2]
console.log(array[0](2, 3))

//Armazenar em um atributo de objeto
const obj = {}
obj.falar = function() {return 'Falar!!!'}
console.log(obj.falar())

//Passar função como parâmetro de outra
function run(fun) {
    fun()
}
run(function () {console.log('Executando...')})

//Uma função pode retornar/conter outra função
function soma(a, b) {
    return function(c) {
        console.log(a + b + c)
    }
}

soma(2, 3)(5)
const somaC = soma(2, 3)
somaC(4)