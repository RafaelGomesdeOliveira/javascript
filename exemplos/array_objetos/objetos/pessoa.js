const cidadao = {
    nome: 'Rafael',
    idade: 18,
    namorada: 'Agnes',
    endereco: 'Malhada-Ba'
}

/*
    PERCORRENDO O OBJETO

for(var key in cidadao){
    console.log(key + ': ' + pessoa[key])

}

Object.keys(cidadao).forEach(item => {
    console.log(item)
});

Object.entries(cidadao).forEach( ([key, value]) => {
    console.log(key, value)

} )
*/

class Pessoa {
    constructor(nome, idade) {
        this.nome = nome 
        this.idade = idade
    }

    getNome() {
        return this.nome
    }
    getIdade() {
        return this.idade
    }
    getArray(){
        return this.nome, this.idade

    }

    setNome(nome) {
        return this.nome = nome
    }
    setIdade(idade) {
        return this.idade = idade
    }

    setArray(nome, tipo, velmax) {
        return this.nome = nome, this.tipo = idade

    }

    detalhar() {
        
        console.log(`Nome: ${this.nome}`)
        console.log(`Tipo: ${this.idade}`)
        console.log('---------------------')

    }
}

var pessoas = []

const btnAdd = document.querySelector('#add')
const res = document.getElementById('res')


const imprimirPessoa = (pe) => {
    res.innerHTML = ''
    
    pessoas.map((pe, indice) => {
        let p = document.createElement('p')
        p.setAttribute('class', 'pessoa')
    
        p.innerHTML = `Nome: ${pe.getNome()} <br> Idade: ${pe.getIdade()}<br>`
    
        res.appendChild(p)
        console.log("Indice: " + pe.nome0)
    })

}


btnAdd.addEventListener('click', () => {
    const nome = document.querySelector('input#nome')
    const idade = document.querySelector('input#idade')

    let nomeV = nome.value
    let idadeV = idade.value
    const pe = new Pessoa(nomeV, idadeV)

    pessoas.push(pe)

    nome.value = ''
    idade.value = ''
    nome.focus()
    console.log(pessoas)    
    imprimirPessoa(pe)

})









