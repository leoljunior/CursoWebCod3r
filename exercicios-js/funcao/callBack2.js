const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 1.2, 2.8, 9.0]

//Sem callback

const notasBaixas = []
for(let x in notas) {
    if(notas[x] < 7) {
        notasBaixas.push(notas[x])
    }
}
console.log(notasBaixas)

//Com callback
const notasBaixasCB = notas.filter(nota => nota < 7) //filter retorna um array com os valores filtrados de acordo com a lógica.
console.log(notasBaixasCB)                           //resposta do filter() é true/false

const notaMaiorQue6 = nota => nota > 6
const notasAltas = notas.filter(notaMaiorQue6)
console.log(notasAltas)