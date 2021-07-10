/*Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
ou false.
*/ 

function div(x) {
    if (x % 3 === 0){
        return true
    }else {
        return false
    }
}

console.log(div(3))
console.log(div(6))
console.log(div(9))
console.log(div(12))
console.log(div(2))
console.log(div(0))
console.log(div(-2))
console.log(div())