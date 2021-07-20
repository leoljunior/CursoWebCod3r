const quaseArray = { 0: 'Claire', 1: 'Jill', 2: 'Ada' }
console.log(quaseArray)
Object.defineProperty(quaseArray, 'tooStringg', {
    value: function() { return Object.values(this) },
    enumerable: false
})

console.log(quaseArray[0])

const meuArray = ['Claire', 'Jill', 'Ada']
console.log(quaseArray.tooStringg(), meuArray)