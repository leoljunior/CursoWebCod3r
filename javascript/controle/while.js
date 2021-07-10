function getRandomIntBetween(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opc = 0
let contador = 0

while (opc != -1) {
    opc = getRandomIntBetween(-1, 10)
    console.log(`Opção escolhida foi ${opc}`)
    contador++
}

console.log('While rodou : ' + contador + ' vezes.')
console.log('Saindo.......')