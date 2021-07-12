const ferrari = {
    modelo: 'F40',
    velMax: 360
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.__proto__) //através do __proto__ vc acessa o pai(superobj) de ferrari
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)

function meuObj() {}
console.log(typeof Object, typeof meuObj)
console.log(Object.prototype, meuObj.prototype)
