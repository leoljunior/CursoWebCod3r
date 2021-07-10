function Pessoa() {
    this.idade = 0

    const self = this  //outra artifício de "amarrar" o this 
  setInterval(function() {
      /*this*/self.idade++
      console.log(/*this*/self.idade)
  }/*.bind(this)*/, 1000)
}

new Pessoa