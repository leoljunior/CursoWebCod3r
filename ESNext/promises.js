
function falarDepoisDe(segundos, frase) {
	return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(frase)//resolve só aceita 1 param
			}, segundos * 1000)
	})
}

falarDepoisDe(3, 'Promessa recebida')
	.then(frase => frase.concat('!!!!!!!'))
	.then(outraFrase => console.log(outraFrase))