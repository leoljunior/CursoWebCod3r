console.log(soma(3, 5)) //isso funciona pq o JS carregar as functions antes msm de começar executa-las. Usando function declaration

//function declaration
function soma(x, y) {
    return x + y
}

//console.log(sub(5, 2)) Usando function expression vai gerar erro, pois a função só pode ser invocada depois  

//function expression
const sub = function (x, y) {
    return x - y
}

//named function expression
const mult = function mult(x, y) {
    return x * y
}
console.log(mult(5, 6))