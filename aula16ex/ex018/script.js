let numeros = [] 
divRes = document.getElementById('res')

function isNumero (n) {
    return Number(n)

}

function inLista(n, valores) {
    return valores.indexOf(n) !== -1

}

function criarElemento(tag, vetor, divVinculada) {
    for (let i of vetor) { // ----- o OF foca nos valores, o in foca nos indices
        var elemento = document.createElement(tag)
        elemento.innerHTML = i

        divVinculada.appendChild(elemento)
    }
}

function entreValor(n){
    return n >= 1 && n <= 100;
}






function armazenar() {
    


    var controle = false
    var numInp = document.querySelector('input#num')
    var select = document.getElementById('select')

    

    if(!isNumero(numInp.value)) {
        alert(`Por favor digite um número`)

    } else {
        let num = Number(numInp.value)

        if (!entreValor(num)) {
            alert('Por favor, digite um número menor ou igual a 100, mas que seja maior ou igual a 1');

        } else if (inLista(num, numeros)) {

            alert(`O número ${num} já está presente na lista`);
        } else {
            numeros.push(`Valor ${num} adicionado`);
            divRes.innerHTML = ''
            select.innerHTML = ''
            criarElemento('option', numeros, select);
            numInp.value = ''
            numInp.focus()
        }
    }
} 
    

function calcular() {

    var maior = numeros[0]
    var menor = numeros[0]
    var soma = 0
    var media = 0
    
    if (numeros.length >= 1) {
        for(i in numeros){
            soma += numeros[i]
                if (numeros[i] > maior){ 
                    maior = numeros[i]
                }

                if(numeros[i] < menor) {
                    menor = numeros[i]
                }
            }
        }

        let resultado = [ 
            `Ao todo, temos <strong>${numeros.length}</strong> números cadastrados`,
            `O maior valor informado foi <strong>${maior}</strong>`,
            `O menor valor informado foi <strong>${menor}</strong>`,
            `Somando todos o valor, temos <strong>${soma}</strong>`,
            `A média dos valores digitados é <strong>${(soma/numeros.length).toFixed(2)}</strong>`
        ]

        divRes.innerHTML = ''

        criarElemento('p', resultado, divRes)



    }
    
}