function getRandomIntBetween(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opc = -1
let contador = 0

 do {
    opc = getRandomIntBetween(-1, 10)
    console.log(`Opção escolhida foi ${opc}`)
    contador++
} while (opc != -1)

console.log('While rodou : ' + contador + ' vezes.')
console.log('Saindo.......')