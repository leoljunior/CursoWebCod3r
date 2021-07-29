const colors = {
    p: '#388e3c',
    div: '#1565c0',
    span: '#e53935',
    section: '#f67809',
    ul: '#5e35b1',
    ol: '#fbc02d',
    header: '#d81b60',
    nav: '#64dd17',
    main: '#00acc1',
    footer: '#304ffe',
    form: '#9f6581',
    body: '#25b6da',
    padrao: '#616161',
    get(tag) {
        return this[tag] ? this[tag] : this.padrao
    }
}


document.querySelectorAll('.tag').forEach(box => {
    const tagName = box.tagName.toLowerCase()
    /*capturado nome das tag*/
    box.style.borderColor = colors.get(tagName)
    /*Aplicado cor na borda */
    if (!box.classList.contains('nolabel')) { /*se não tem a classe nolabel */
        const label = document.createElement('label')/*cria um label */
        label.style.backgroundColor = colors.get(tagName)/*aplica cor no bg */
        label.innerHTML = tagName /*aplica a tagName no html */
        box.insertBefore(label, box.childNodes[0])/*aplica antes do primeiro elemento filho que esteja eventualmente presente */
    }
})