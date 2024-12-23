function contar(){

    emoji = String.fromCodePoint(0x1F449)
    emojiFim = String.fromCodePoint(0x1f680)

    let inpInicio = document.getElementById('inicio').value
    let inpFim = document.getElementById('fim').value
    let inpCont = document.getElementById('cont').value

    let inicio = Number(inpInicio)
    let fim = Number(inpFim)
    let cont = Number(inpCont)



    let pTitulo = document.getElementById('titulo')
    let pRes =  document.getElementById('res')
     
    pRes.innerHTML = ''

    if (inpInicio.trim() == '' || inpFim.trim() == '' || inpCont == '') {
        pTitulo.innerHTML = '<strong>Impossível contar</strong>'
    } else {
        if (cont <= 0 ) {
            window.alert(`Contador ${cont} inválido, por isso vamos utilizar o contador 1`)
            
            pTitulo.innerHTML = 'Contando'
    
            for(var j = inicio; j <=  fim; j++){
                pRes.innerHTML += `${emoji} ${j} `
                
            }

            pRes.innerHTML += `${emojiFim}`
        } else {

            if (inicio < fim){

                for(var i = inicio; i <= fim; i += cont){
                    pRes.innerHTML += `${emoji} ${i} `

                }

                pRes.innerHTML += `${emojiFim}`
        
            } else {
                for (var i = inicio; i > fim; i -= cont) {
                    pRes.innerHTML += `${emoji} ${i} `
                }
                pRes.innerHTML += `${emojiFim}`
        
            }
        }

    }

    
    



}