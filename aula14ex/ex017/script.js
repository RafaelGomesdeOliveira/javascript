function gerarTabuada() {
    var valorNum = document.getElementsByName('inum')[0].value
    var select = document.getElementById('res')

    select.innerHTML = ''

    if (valorNum.trim() == '') {
        alert('Por favor, digite um número!')
    } else {
        num = Number(valorNum)
        for(let i = 1; i <= 10; i++){
            let option = document.createElement('option')
            option.innerHTML = `${num} X ${i} = ${num*i}`
            select.appendChild(option)
    
        }
    }

    


}