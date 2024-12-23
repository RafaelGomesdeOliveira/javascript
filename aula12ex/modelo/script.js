

const rafa = Array.from(document.querySelectorAll('.card')).map(
    function(elemento, indice, arrayBase) {

        return {
            conteudo: elemento.querySelector('p').textContent,
            cor: getComputedStyle(elemento.querySelector('.cartao')).backgroundColor
        }
    }
)


console.log(rafa)

