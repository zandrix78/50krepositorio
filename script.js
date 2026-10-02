const pedidosRecentes = [
  { pedido: '#1042', cliente: 'Maria L.', canal: 'Delivery', status: 'Em preparo', valor: 'R$ 128,90' },
  { pedido: '#1045', cliente: 'João P.', canal: 'Salão', status: 'Em entrega', valor: 'R$ 214,40' },
  { pedido: '#1048', cliente: 'Ana S.', canal: 'Balcão', status: 'Finalizado', valor: 'R$ 86,20' },
  { pedido: '#1050', cliente: 'Lucas M.', canal: 'Delivery', status: 'Em preparo', valor: 'R$ 154,75' }
];

const produtosVendidos = [
  { nome: 'Hambúrguer Artesanal', qtd: '248 pedidos', valor: 'R$ 7.420' },
  { nome: 'Pizza Margherita', qtd: '193 pedidos', valor: 'R$ 5.310' },
  { nome: 'Coca-Cola 600ml', qtd: '314 pedidos', valor: 'R$ 2.890' },
  { nome: 'Batata Frita', qtd: '287 pedidos', valor: 'R$ 2.440' }
];

const rankingFuncionarios = [
  { nome: 'Carlos Silva', cargo: 'Atendente', score: '96%' },
  { nome: 'Renata Costa', cargo: 'Caixa', score: '93%' },
  { nome: 'Eduardo N.', cargo: 'Delivery', score: '91%' },
  { nome: 'Fernanda A.', cargo: 'Cozinha', score: '89%' }
];

const modulos = [
  { titulo: 'Gestão de Pedidos', descricao: 'Abertura e controle de mesas, delivery, balcão e comanda digital.', icon: '📦' },
  { titulo: 'Cardápio Inteligente', descricao: 'Categorias, combos, promoções, adicionais e disponibilidade em tempo real.', icon: '🍔' },
  { titulo: 'Controle de Estoque', descricao: 'Entradas, saídas, inventário, vencimento e alertas automáticos.', icon: '📦' },
  { titulo: 'Financeiro', descricao: 'Receitas, despesas, fluxo de caixa, DRE e controle de faturamento.', icon: '💰' },
  { titulo: 'CRM e Fidelidade', descricao: 'Histórico, recorrência, pontos e campanhas de relacionamento.', icon: '🎯' },
  { titulo: 'WhatsApp Integrado', descricao: 'Mensagens inteligentes para confirmação, entrega e feedback.', icon: '💬' },
  { titulo: 'IA e Analytics', descricao: 'Sugestões automáticas, previsões de demanda e insights de gestão.', icon: '🤖' },
  { titulo: 'Multiunidades', descricao: 'Comparação por loja, metas, desempenho e gestão centralizada.', icon: '🏬' }
];

function renderPedidos() {
  const tbody = document.getElementById('pedidosRecentes');
  if (!tbody) return;

  tbody.innerHTML = pedidosRecentes
    .map((item) => {
      const statusClass =
        item.status === 'Em preparo'
          ? 'status-prepare'
          : item.status === 'Em entrega'
          ? 'status-delivery'
          : 'status-finished';

      return `
        <tr>
          <td>${item.pedido}</td>
          <td>${item.cliente}</td>
          <td>${item.canal}</td>
          <td><span class="table-status ${statusClass}">${item.status}</span></td>
          <td>${item.valor}</td>
        </tr>
      `;
    })
    .join('');
}

function renderProdutos() {
  const list = document.getElementById('produtosVendidos');
  if (!list) return;

  list.innerHTML = produtosVendidos
    .map(
      (item, index) => `
        <li>
          <div class="product-meta">
            <div class="product-icon">${index + 1}</div>
            <div>
              <strong>${item.nome}</strong><br>
              <small>${item.qtd}</small>
            </div>
          </div>
          <span class="product-value">${item.valor}</span>
        </li>
      `
    )
    .join('');
}

function renderFuncionarios() {
  const list = document.getElementById('rankingFuncionarios');
  if (!list) return;

  list.innerHTML = rankingFuncionarios
    .map(
      (item) => `
        <li>
          <div class="employee-meta">
            <div class="employee-avatar">${item.nome.charAt(0)}</div>
            <div>
              <strong>${item.nome}</strong><br>
              <small>${item.cargo}</small>
            </div>
          </div>
          <span class="employee-score">${item.score}</span>
        </li>
      `
    )
    .join('');
}

function renderModulos() {
  const grid = document.getElementById('modulosSistema');
  if (!grid) return;

  grid.innerHTML = modulos
    .map(
      (item) => `
        <article class="module-card">
          <div class="icon">${item.icon}</div>
          <h4>${item.titulo}</h4>
          <p>${item.descricao}</p>
        </article>
      `
    )
    .join('');
}

renderPedidos();
renderProdutos();
renderFuncionarios();
renderModulos();
