function area(largura, altura) {
    const area = largura * altura
    if(area > 20) {
        console.log(`Area acima do permitido: ${area}m2.`)
    } else {
        return area
    }
}

console.log(area(2, 2)) //4
console.log(area(2)) //NaN
console.log(area()) //NaN
console.log(area(5, 1, 7, 89, 165, 2)) //5 pega 2 primeiros params e ignora o resto
console.log(area(5, 5)) //cai no if, não entra no else, porém retorna undefined por ser valor de retorno padrão, quando esse não é explícito