document.addEventListener('DOMContentLoaded', () => {
    const produtoForm = document.getElementById('produto-form');
    const tabelaProdutos = document.getElementById('tabela-produtos');

    let produtos = JSON.parse(localStorage.getItem('produtos')) || [];

    function salvarProdutos() {
        localStorage.setItem('produtos', JSON.stringify(produtos));
    }

    function renderizarTabela() {
        tabelaProdutos.innerHTML = '';
        produtos.forEach((produto, index) => {
            const tr = document.createElement('tr');

            const tdNome = document.createElement('td');
            tdNome.textContent = produto.nome;

            const tdPreco = document.createElement('td');
            tdPreco.textContent = `R$ ${parseFloat(produto.preco).toFixed(2)}`;
 
            const tdCategoria = document.createElement('td');
            tdCategoria.textContent = produto.categoria;

            const tdAcoes = document.createElement('td');

            const botaoEditar = document.createElement('button');
            botaoEditar.textContent = 'Editar';
            botaoEditar.classList.add('botao-editar');
            botaoEditar.addEventListener('click', () => editarProduto(index));

            const botaoExcluir = document.createElement('button');
            botaoExcluir.textContent = 'Excluir';
            botaoExcluir.classList.add('botao-excluir');
            botaoExcluir.addEventListener('click', () => excluirProduto(index));

            tdAcoes.appendChild(botaoEditar);
            tdAcoes.appendChild(botaoExcluir);

            tr.appendChild(tdNome);
            tr.appendChild(tdPreco);
            tr.appendChild(tdCategoria);
            tr.appendChild(tdAcoes);

            tabelaProdutos.appendChild(tr);
        });
    }

    function adicionarProduto(event) {
        event.preventDefault();

        const novoProduto = {
            nome: produtoForm.nome.value,
            preco: produtoForm.preco.value,
            categoria: produtoForm.categoria.value
        };

        produtos.push(novoProduto);
        salvarProdutos();
        renderizarTabela();
        produtoForm.reset();
    }

    function editarProduto(index) {
        const produto = produtos[index];

        const novoNome = prompt('Editar Nome do Produto:', produto.nome);
        if (novoNome !== null && novoNome.trim() !== '') {
            produto.nome = novoNome.trim();
        }

        const novoPreco = prompt('Editar Preço do Produto:', produto.preco);
        if (novoPreco !== null && !isNaN(novoPreco)) {
            produto.preco = parseFloat(novoPreco).toFixed(2);
        }

        const novaCategoria = prompt('Editar Categoria do Produto:', produto.categoria);
        if (novaCategoria !== null && novaCategoria.trim() !== '') {
            produto.categoria = novaCategoria.trim();
        }

        produtos[index] = produto;
        salvarProdutos();
        renderizarTabela();
    }

    function excluirProduto(index) {
        if (confirm('Tem certeza que deseja excluir este produto?')) {
            produtos.splice(index, 1);
            salvarProdutos();
            renderizarTabela();
        }
    }

    produtoForm.addEventListener('submit', adicionarProduto);

    renderizarTabela();
});
