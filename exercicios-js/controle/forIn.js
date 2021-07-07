const notas = [8.1, 6.2, 0.9, 1.5, 9.9]

for (let xuxa in notas) {
    console.log(`For in - Array na posição: ${xuxa} = ${notas[xuxa]}`)
}

const pessoa = {
    nome: 'Ana',
    idade: 26,
    peso: '65Kg',
    altura: 1.65,
    signo: 'Áries',
    naturalidade: 'Poços de Caldas'
}

for (let atributo in pessoa) { //usar o let na declaração da variável para ela ficar no escopo do for
    console.log(`Atributo: ${atributo} : ${pessoa[atributo]}`)
}