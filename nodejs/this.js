console.log(this === global)
console.log(this === module)

console.log(this === module.exports)
console.log('Fora de uma função this === exports: ',this === exports)

function logThis() {
    console.log('Dentro de uma função this === exports: ', this === exports)
    console.log('Dentro de uma função this === module.exports: ', this === module.exports)
    console.log('Dentro de uma função this === global: ', this === global)
}
logThis()