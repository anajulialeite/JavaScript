function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.querySelector("div#res")
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert("[ERRO] verifique os dados e tente novamente!")
    } else {
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        var gênero = " "
        var img = document.createElement("img")
        img.setAttribute("id", "foto")
        if (fsex[0].checked) {
            gênero = "homem"
            if (idade >= 0 && idade < 10) {
                //Criança
                img.src = `Imagem/bebemenino.jpg`
            } else if (idade < 21) {
                //Jovem
                img.src = `Imagem/jovemhomem.jpg`
            } else if (idade < 50) {
                //Adulto
                img.src = `Imagem/adultohomem.jpg`
            } else {
                //Idoso
                img.src = `Imagem/idoso.jpg`
            }
        } else if (fsex[1].checked) {
            gênero = "mulher"
            if (idade >= 0 && idade < 10) {
                //Criança
                img.src = `Imagem/bebemenina.jpg`
            } else if (idade < 21) {
                //Jovem
                img.src = `Imagem/jovemmulher.jpg`
            } else if (idade < 50) {
                //Adulto
                img.src = `Imagem/adultomulher.jpg`
            } else {
                //Idoso
                img.src = `Imagem/idosa.jpg`
                //Pode se usar tbm o comando img.setAttribute("src", "Imagem/idosa.jpg")
            }
        }
        res.style.textAlign = "center"
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}