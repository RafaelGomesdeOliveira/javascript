

exports.teste = { //Se torna o this global
    nome: 'Agnes'

}

console.log('This no escopo global')
console.log(this)

console.log('This no escopo globalThis')
console.log(globalThis)


function fnExpression() {
    console.log("Dentro da function expression " + this) //Utiliza local, quando se tiver o strict mode habilitado, quando desativado usa o global = teste

}

const fnArrow = () => {
    console.log(this) //Utiliza o this global

}

fnExpression()


fnArrow()