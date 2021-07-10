//Factory simples

function criarCarro() {
    return {
        marca: 'GM',
        modelo: 'Chevelle',
        ano: 1969,
        motor: 'V8',
        cilindrada: 7.2
    }
}

console.log(criarCarro())
