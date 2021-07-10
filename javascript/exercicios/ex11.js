/*) As regras para o cálculo dos anos bissextos são as seguintes:
De 4 em 4 anos é ano bissexto;
De 100 em 100 anos não é ano bissexto;
De 400 em 400 anos é ano bissexto;
Prevalecem as últimas regras sobre as primeiras.
Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a
mensagem e retornando true ou false.
 */

function bissexto(ano) {
    if(ano % 4 === 0 && ano % 100 === 0 && ano % 400 === 0) {
        console.log('Bissexto')
    }else{
        console.log('Não é bissexto!')
    }
}
bissexto(1600)
bissexto(1700)
bissexto(1800)
bissexto(1900)
bissexto(2000)
bissexto(2100)
bissexto(2200)
bissexto(2400)
bissexto(2300)
bissexto(2500)
