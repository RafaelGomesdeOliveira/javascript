function verificar() {
    var anotAtual = new Date().getFullYear()
    var anoinput = document.getElementById('ano')
    

    var anoD = Number(anoinput.value)
    if (anoinput.value.length == 0 || anoD > anotAtual ){
        alert('Verifique os seus dados e tente novamente')
        
    } else {

        var idade = anotAtual - anoD
        var fsex = document.getElementsByName('radsex')
        var divRes = document.getElementById('res')

        var img = document.createElement('img')
        img.setAttribute('id', 'foto')


        var genero = ''

        if(fsex[0].checked) {
            genero = 'mulher'
            if (idade >= 0 && idade < 12){
                img.setAttribute('src', 'img/menina_crianca.png')

            } else if (idade < 25) {
                img.setAttribute('src', 'img/menina_jovem.png')

            } else if (idade < 60) {
                img.setAttribute('src', 'img/mulher_adulta.png')

            } else {
                img.setAttribute('src', 'img/mulher_velha.png')

            }

        } else if (fsex[1].checked) {
            genero = 'homem'
            if (idade >= 0 && idade < 12){
                img.setAttribute('src', 'img/homem_crianca.png')

            } else if (idade < 25) {
                img.setAttribute('src', 'img/homem_jovem.png')

            } else if (idade < 60) {
                img.setAttribute('src', 'img/homem_adulto.png')

            } else {
                img.setAttribute('src', 'img/homem_velho.png')

            }

        } else {
            alert("Selecione um sexo")

        }

        divRes.innerText = `Detectamos um(a) ${genero} de ${idade} anos`
        divRes.appendChild(img)


    }


}