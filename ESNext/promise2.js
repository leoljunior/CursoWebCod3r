setTimeout(function() {
	console.log('Executando Callback 1')
	
	setTimeout(function() {
		console.log('Executando Callback 2')
		
		setTimeout(function() {
			console.log('Executando Callback 3')
		}, 2000)		
	}, 2000)	
}, 2000)

function esperaPor(tempo = 2000) {
	return new Promise(function(resolve) {
		setTimeout(function() {
			console.log('Executando promise...')
			resolve()
		}, tempo)
	})
}

esperarPor()
	.then(() => esperaPor())
	.then(esperarPor)