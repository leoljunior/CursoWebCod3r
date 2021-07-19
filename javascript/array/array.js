console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Jill', 'Claire', 'Ada')
console.log(aprovados)

aprovados = ['Carlos', 'Chris', 'Leon']
console.log(aprovados)
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Wesker'
aprovados.push('Jill Valentine')
console.log(aprovados.length)

aprovados[9] = 'Ada Wrong'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort()
console.log(aprovados)

delete aprovados[1] //o array não é reordenado, a posição 1 ficará undefined
console.log(aprovados)

aprovados = ['Jill', 'Leon', 'Claire']
aprovados.splice(1, 2, 'Ada', 'Cherry') //splice exclui, adciona ou ambos. (índice a trabalhar, numero de posições excluídas, posição adcionada 1, posição adcionada 2)
console.log(aprovados)                  //Excluído Leon e Claire e adcionado Ada e Cherry
                 
aprovados.splice(1, 0, 'Nemesis', 'Hunter') //não exluir nenhum e adcionar a partir da posição um nemesis e hunter
console.log(aprovados)