const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c } } //a função não entra no JSON
console.log(JSON.stringify(obj)) //Transformando o obj em um JSON

console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }')) //tranformando JSON em objeto
console.log(JSON.parse('{ "a": 1, "b": "string", "c": true, "d": {}, "e": [] }'))