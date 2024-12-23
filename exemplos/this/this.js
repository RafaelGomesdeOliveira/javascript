
var nome = "Tiago"
var nota = 10

function aluno(nome, nota) {
    this.nome = nome
    this.nota = nota

    
    this.dados_anonimos = function() { //Essa não funciona porque ela não usa o contexto do pai
        const self = this // Para corrigir eu tenho que atribuir o valor de this do contexto da função aluno a constante self
        setTimeout(function() {
            console.log(self.nome)
            console.log(self.nota)
        },
        2000
    )

    this.dados_anonimos2 = function () { //Essa funciona porque usa o contexto do pai, ou seja, a function aluno
        setTimeout(
            () => {
                console.log(this.nome)
                console.log(this.nota)
            },
            1000

        )

    }
    }
    console.log(nome, nota)

}



aluno("Rafaek", 10)

dados_anonimos() 

dados_anonimos2()