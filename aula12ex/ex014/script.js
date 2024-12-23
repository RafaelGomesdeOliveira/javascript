function carregarImagem() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var hora = new Date().getHours()
    
    var body = document.body

    if (hora >= 0 && hora < 12) {
        msg.innerHTML = "<p>Bom dia</p>"
        msg.innerHTML += `<p>Agora são ${hora} hrs</p>`

        img.src = 'img/manha.png'
        img.alt = 'Foto de dia'
        
        body.style.backgroundColor = "#8499ba"  

    } else if (hora < 18) {
        msg.innerHTML = "<p>Boa tarde</p>"
        msg.innerHTML += `<p>Agora são ${hora} hrs</p>`

        img.src = 'img/tarde.png' 
        img.alt = 'Foto de tarde'
    
        body.style.backgroundColor = "#fd8c01"    
    
    } else {
        msg.innerHTML = "<p>Boa noite</p>"
        msg.innerHTML += `<p>Agora são ${hora} hrs</p>`

        img.src = 'img/noite.png'
        img.alt = 'Foto de noite'

        body.style.backgroundColor = "#2b5390"  
    }
}

