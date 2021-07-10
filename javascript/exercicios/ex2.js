/*Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).*/

function triangles(a, b, c) {
    if(a === b && a === c) {
        console.log(`O triângulo com lados a=${a} b=${b} c=${c} é Equilátero`)
    }else if(a === b && a !== c || a === c && a !== b || b === c && b !== a) {
        console.log(`O triângulo com lados a=${a} b=${b} c=${c} é Isóceles`)
    }else {
        console.log(`O triângulo com lados a=${a} b=${b} c=${c} é Escaleno`)
    }
}

triangles(5, 5, 5)
triangles(5, 5, 3)
triangles(5, 3, 5)
triangles(3, 5, 5)
triangles(1, 2, 3)