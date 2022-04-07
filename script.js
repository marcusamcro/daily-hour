function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img-manha')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // BOM DIA !
        img.src = 'imagensweb/fotomanha.png'
        document.body.style.background = '#52aef1'
    } else if (hora >= 12 && hora < 18) {
        // BOA TARDE!
        img.src = 'imagensweb/fototarde.png'
        document.body.style.background = '#f89303'
    } else {
        // BOA NOITE!
        img.src = 'imagensweb/fotonoite.png'
        document.body.style.background = '#36474f'
    }
}
