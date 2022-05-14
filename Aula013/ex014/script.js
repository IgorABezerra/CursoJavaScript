function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}horas e ${min}minutos.`
    if(hora >= 0 && hora <12){
        img.src = 'fotomanha.jpg'
        document.body.style.background = '#CCC6A5'
    }else if (hora >= 12 && hora <= 18){
        img.src = 'fototarde.jpg'
        document.body.style.background = '#7C620D'
    }else{
        img.src = 'fotonoite.jpg'
        document.body.style.background = '#281B37'
    }
}
