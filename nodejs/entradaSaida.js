const anonimo = process.argv.indexOf('-a') !== -1
//console.log(anonimo)

if(anonimo) {
    process.stdout.write('Fala Anonimo!\n')
    process.exit()
} else {
    process.stdout.write('Informe seu nome: ')
    process.stdin.on('data', data => { //evento .on('data') é qdo é digitado algo e pressionado enter
        const nome = data.toString().replace('\r\n', '') //replace para substituir o enter \n por ''
        
        process.stdout.write(`Fala ${nome}!!!\n`)
        process.exit()
    })
}
