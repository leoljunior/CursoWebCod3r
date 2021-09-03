const num = Math.floor(Math.random() * 10) //gerados num de 0 à 9
console.log(`Num 0 à 9: ${num}`) //floor tira pontos flutuantes

const num2 = Math.floor(Math.random() * 5 + 1) //gerados num de 0 à 5
console.log(`Num 0 à 5: ${num2}`) //floor tira pontos flutuantes

const num3 = Math.floor(Math.random() * (5 + 1) + 3) //gerados num de 3 à 8 
console.log(`Num 3 à 8: ${num3}`) //floor tira pontos flutuantes

const num4 = Math.floor(Math.random() * (5 - 3 + 1) + 3) //gerados num de 0 à 5
console.log(`Num 3 à 5: ${num4}`) //floor tira pontos flutuantes

const num5 = Math.floor(Math.random() * 1000) - 500 //gerados num entre -499 e 499
console.log(`Num -499 à 499: ${num5}`) //floor tira pontos flutuantes


const day = new Date().getDay()
const month = new Date().getMonth()
const year = new Date().getFullYear()
const date = `${day}/${month}/${year}`
console.log(`Hoje é: ${date}`)

function randomDate() {
    let iniDate = new Date(1996, 6, 1)
    let currentDate = new Date()
    return new Date(iniDate.getTime() + Math.random() * (currentDate.getTime() - iniDate.getTime()))
}
console.log(`Random Date = ${randomDate()}`)