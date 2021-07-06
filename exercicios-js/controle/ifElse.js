const imprimirResultado = function(nota) {
    if(nota >= 7) {
        console.log('Aprovado!!!')
    } else {
        console.log('Reprovado!!!')
    }
}

imprimirResultado(10)
imprimirResultado(4)
imprimirResultado('Cuidado') //não vai gerar erro pelo fato do JS ser fracamente tipado. No caso o resultado será false e cairá no else