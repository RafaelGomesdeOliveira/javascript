

// object {}
const atividade = {
    nome: 'Almoço',
    data: new Date("2024-09-25 10:36:00"),
    estado: true,

}

// lista, array, vetor []

const atividades = [
    atividade,
    {
        nome: 'Jantar',
        data: new Date("2024-09-25 18:00:00"),
        estado: false,
    },
    {
        nome: 'Café da tarde',
        data: new Date("2024-09-25 15:30:00"),
        estado: false,
    },
] 

const criarItemDaAtividade = (atividade) => {
    
    input = '<input type="checkbox" '

    if(atividade.estado){
        input = input + 'checked'
    }
    input += '>'

    return `         
    <div>
        ${input}
        <span>${atividade.nome}</span>
        <time>sábado, ${atividade.data}</time>

    
    </div>
    `
}

const section = document.querySelector('section')

for (let atividade of atividades) {
    section.innerHTML += criarItemDaAtividade(atividade)
}
