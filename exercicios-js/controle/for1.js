let contador = 1
while(contador <= 10) {
    console.log(`While - Contador = ${contador}`)
    contador++
}

for (let i = 1; i <= 10; i++) {
    console.log(`For - Contador = ${i}`)
}

const notas = [8.1, 6.2, 0.9, 1.5, 9.9]
for(let i = 0; i < notas.length; i++) {
    console.log(`For - Array na posição: ${i} = ${notas[i]}`)
}