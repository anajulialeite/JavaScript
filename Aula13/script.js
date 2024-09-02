function carregar() {
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA!!!
        img.src = `Imagens/fotomanha.jpg`
        document.body.style.background = `#485B2D`
    } else if (hora >= 12 && hora <= 18) {
        //BOA TARDE!!!
        img.src = `Imagens/fototarde.jpg`
        document.body.style.background = `#b9846f`
    } else {
        //BOA NOITE!!!
        img.src = `Imagens/fotonoite.jpg`
        document.body.style.background = `#00023D`
    }
}
