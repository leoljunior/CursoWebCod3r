const escola = "Cod3r"

console.log("Caracter na posição 3: " + escola.charAt(3)) //retorna o caracter no indice 3, no caso o "3"

console.log("Codigo unicode do caracter na posição 3: " + escola.charCodeAt(3)) //retorna o codigo referente ao caractere na tabela unicode

console.log("O caracter 3 está na posição: " + escola.indexOf('3')) //retorna o indice(posição)do caractere 3

console.log("Caracteres a partir do 1: " + escola.substring(1)) //retorna caracteres a partir do 1
console.log("Caracteres do 0 ao 3: " + escola.substring(0, 3))

console.log('Escola '.concat(escola).concat("!")) //com string é possivel usar .concat. Inclusive encadeando concats
console.log(escola.replace(3, 'e')) //faz um replace, substitue 3 pelo 'e'
console.log(escola.replace(/\w/g, 'O')) //replace usando expressão regular(regex), g-flag global, substitue tudo por 'O'

console.log('Ana,Maria,Pedro'.split(','))//split transforma a string em um array, quebra pelo parâmetro ','. Funciona tbm com regex