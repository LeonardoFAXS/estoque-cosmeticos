// js/lista.js

document.addEventListener('DOMContentLoaded', () => {
  const busca = document.getElementById('busca');
  const tabela = document.getElementById('tabelaEstoque');

  function renderTabela() {
    let produtos = carregarProdutos();
    const termo = busca.value.toLowerCase();
    tabela.innerHTML = '';

    produtos = produtos.filter(p => p.nome.toLowerCase().includes(termo));

    produtos.forEach(p => {
      const tr = document.createElement('tr');

      tr.innerHTML = `
        <td>${p.nome}</td>
        <td>${p.marca}</td>
        <td>${p.categoria}</td>
        <td>${p.quantidade}</td>
        <td>R$ ${p.preco.toFixed(2)}</td>
        <td>${p.validade || '-'}</td>
        <td>${p.localizacao}</td>
        <td>
          <button onclick="entrada(${p.id})" style="background:green;color:white;border:none;padding:5px 8px;margin-right:3px;border-radius:4px;cursor:pointer;">+</button>
          <button onclick="saida(${p.id})" style="background:orange;color:white;border:none;padding:5px 8px;margin-right:3px;border-radius:4px;cursor:pointer;">-</button>
          <button onclick="excluirProduto(${p.id})" style="background:red;color:white;border:none;padding:5px 8px;border-radius:4px;cursor:pointer;">Excluir</button>
        </td>
      `;

      tabela.appendChild(tr);
    });
  }

  busca.addEventListener('input', renderTabela);

  window.entrada = function(id) {
    let produtos = carregarProdutos();
    let prod = produtos.find(p => p.id === id);
    if (prod) {
      prod.quantidade++;
      salvarProdutos(produtos);
      renderTabela();
    }
  };

  window.saida = function(id) {
    let produtos = carregarProdutos();
    let prod = produtos.find(p => p.id === id);
    if (prod && prod.quantidade > 0) {
      prod.quantidade--;
      salvarProdutos(produtos);
      renderTabela();
    }
  };

  window.excluirProduto = function(id) {
    let produtos = carregarProdutos();
    produtos = produtos.filter(p => p.id !== id);
    salvarProdutos(produtos);
    renderTabela();
  };

  renderTabela();
});
