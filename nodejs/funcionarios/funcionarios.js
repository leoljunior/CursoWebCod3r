const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const chinese = (f) => f.pais === 'China'
const females = (f) => f.genero === 'F'
const lowestSalary = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}


axios.get(url).then(response => {
    const funcionarios = response.data
    // console.log(funcionarios)
    const func = funcionarios
        .filter(chinese)
        .filter(females)
        .reduce(lowestSalary)


    console.log(func)

})

