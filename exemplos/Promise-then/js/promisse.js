const myPromise = new Promise((resolve, reject) => {
    const nome = 'Rafael'

    if (nome === "Rafael") {
        resolve('Deu certo')
    } else {
        reject('Deu ruim')
    }

})

myPromise.then((resposta) => {
    console.log(resposta)
})

//Encadeamento de then's

const myPromise2 = new Promise((resolve, reject) => {
    const nome = 'Rafael'

    if (nome === "Rafael") {
        resolve('Deu certo')
    } else {
        reject('Deu ruim')
    }

})

myPromise2.then((resposta) => {
    return resposta.toUpperCase()
}).then(stringCaixaAlta => {
    console.log(stringCaixaAlta)
})

//Retorno catch

const myPromise3 = new Promise((resolve, reject) => {
    const nome = 'Rafae'

    if (nome === "Rafael") {
        resolve('Deu certo')
    } else {
        reject('Deu ruimm')
    }

})

myPromise3
    .then((data) => {
        console.log(data)
    }).catch((respostaErr) => {
        console.log('Ouve um erro: ' + respostaErr)
    })

const p1 = new Promise((resolve, reject)=> {
    setTimeout(() => {
        resolve('P1 OK')
    }, 2000);
})
const p2 = new Promise((resolve, reject)=> {
    resolve('P2 OK')
})
const p3 = new Promise((resolve, reject)=> {
    resolve('P3 OK')
})


const resolveAll = Promise.all([p1, p2, p3]).then((dados)=>{
    console.log(dados)
})


console.log("Está no final do código e no início do console")

//Várias Promessas com race

const p4 = new Promise((resolve, reject)=> {
    setTimeout(() => {
        resolve('P4 OK')
    }, 2000);
})
const p5 = new Promise((resolve, reject)=> {
    resolve('P5 OK')
})
const p6 = new Promise((resolve, reject)=> {
    resolve('P6 OK')
})

const resolveAllRace = Promise.race([p4, p5, p6]).then((dados)=>{ //Retorna o que tiver a resolução mais rápida

    console.log(dados)
})


const userName = 'RafaelGomesdeOliveira'

fetch(`https://api.github.com/users/${userName}`, {
    method: 'GET',
    headers: {
        Accept: 'application/vnd.github.v3+json'
    }
}).then((resposta) => {
    console.log(typeof resposta)
    console.log(resposta)
    return resposta.json(

    )
}).then(data => {
    console.log(data)
    console.log('O nome do usuário é ' + data.name)
}).catch((err)=> {
    console.log(`Ocorreu algum erro ${err}`)
})