

const array_retorno = Array.from(document.querySelectorAll('article.post')).map((elemento, indice, arrayBase) => {

    console.log(elemento)

    return {
        titulo_post: elemento.querySelector('h2.titulo').textContent,
        conteudo: elemento.querySelector('p.conteudo').textContent,
        autor: elemento.querySelector('span.autor').textContent

    }


})

console.log(array_retorno)