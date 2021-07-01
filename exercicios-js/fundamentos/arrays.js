const valores = [7.7, 8.9, 6.3, 9.2]
console.log(`
A posição 0 tem valor: ${valores[0]}    
A posição 3 tem valor: ${valores[3]}
`)

console.log(valores[500]) //acessar um indíce que não existe, retorna undefined

valores[4] = 120.5
console.log(valores[4])
console.log('Tamanho do array é: ' + valores.length)//mostra tamanho do array

valores.push('push, adciona na proxima posição')
console.log(valores[valores.length - 1])

valores.push({id: 3}, false, null, 'teste')
console.log(valores)

console.log(valores.pop())//retorna e retira o ultimo valor do array

delete valores[0]
console.log(valores)

console.log(typeof valores)//em JS um array é do tipo object


