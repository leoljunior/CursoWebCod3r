function executeIfTrue(nota) {
    if (nota >= 7) {
        console.log(`Aprovado com nota: ${nota} Parabéns!!!`)    
    }   
}
executeIfTrue(7,5)
executeIfTrue(6)

function seForVerdadeEuFalo(valor) {
    if(valor) {
        console.log('É verdade...', valor)
    }
}
seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo('')
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo(' ')
seForVerdadeEuFalo('?')
seForVerdadeEuFalo([])
seForVerdadeEuFalo([1, 2.1, 3])
seForVerdadeEuFalo({})