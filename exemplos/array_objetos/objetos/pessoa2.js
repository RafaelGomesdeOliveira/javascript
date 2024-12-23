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

function Pessoa(nome, idade) {
    this.nome = nome,
    this.idade = idade,

    this.getNome = function(nome) {
        return this.nome
    },
    this.getIdade = function(idade) {
        return this.idade
    },
    this.getArray = function (){
        return [this.nome, this.idade]

    },

    this.setNome(nome) = function (nome) {
        this.nome = nome
    },
    this.setIdade = function (idade) {
        this.idade = idade
    },

    this.setArray = function (nome, idade) {
        this.nome = nome
        this.tipo = idade

    },

    this.detalhar = function (nome, idade) {
        
        console.log(`Nome: ${this.nome}`)
        console.log(`Tipo: ${this.idade}`)
        console.log('---------------------')

    },
    
}

var pessoas = []

const btnAdd = document.querySelector('#add')
const res = document.getElementById('res')


const imprimirPessoa = () => {
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









