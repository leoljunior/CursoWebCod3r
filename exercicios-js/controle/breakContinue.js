const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let x in nums) { //Usando break a execução do for é encerrada assim que a condição do if é true
    if (x == 5) break
    console.log(`Usando break - índice: ${x} = ${nums[x]}`)
}

for (let x in nums) { //Usando continue a execução é quebrada quando a condição do if é true, porém ele continua executando do próximo
    if (x == 5) {
        continue      //O BREAK/CONTINUE NÃO AGEM NO IF, ELES AGEM NA ESTRUTURA FOR(OU WHILE/SWITCH) MAIS PRÓXIMA A ELES
    }
    console.log(`Usando continue - índice: ${x} = ${nums[x]}`)
}

//USANDO BREAK COM RÓTULO ***APENAS PRA CONHECIMENTO, MANEIRA NÃO UTILIZADA***

forExterno: for (a in nums) {
    for (b in nums) {
        if(a == 2 && b == 3) break forExterno //o rótulo vai indicar qual for sera quebrado após atendida as condições
        console.log(`Valores = ${a},${b}`)
    }
}