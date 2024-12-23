let amigo = {
    nome: 'José',
    sexo: 'M',
    peso: 85.4,
    engordar(p) {
        this.peso += p
    }


}

amigo.engordar(4.6)

console.log(`O ${amigo.nome} pesa ${amigo.peso}`)