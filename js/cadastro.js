// js/cadastro.js

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('formCadastro');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let nome = document.getElementById('nome').value.trim();
    let marca = document.getElementById('marca').value.trim();
    let categoria = document.getElementById('categoria').value;
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let preco = parseFloat(document.getElementById('preco').value) || 0;
    let validade = document.getElementById('validade').value;
    let localizacao = document.getElementById('localizacao').value.trim();

    if (!nome || quantidade < 0 || preco < 0) {
      alert('Preencha os campos obrigatórios corretamente.');
      return;
    }

    const produto = {
      id: Date.now(),
      nome,
      marca,
      categoria,
      quantidade,
      preco,
      validade,
      localizacao
    };

    let produtos = carregarProdutos();
    produtos.push(produto);
    salvarProdutos(produtos);

    alert('Produto cadastrado com sucesso!');
    form.reset();
  });
});
