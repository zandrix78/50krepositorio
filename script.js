{
  "dashboard": {
    "faturamentoDia": "R$ 12.480,00",
    "pedidosAndamento": 42,
    "ticketMedio": "R$ 86,40",
    "vendasDia": "R$ 18.420",
    "lucroEstimado": "R$ 6.240",
    "clientesRecorrentes": "1.280",
    "estoqueCritico": 5
  },
  "pedidos": [
    { "pedido": "#1042", "cliente": "Maria L.", "canal": "Delivery", "status": "Em preparo", "pagamento": "Pix", "valor": "R$ 128,90" },
    { "pedido": "#1045", "cliente": "João P.", "canal": "Salão", "status": "Em entrega", "pagamento": "Cartão", "valor": "R$ 214,40" },
    { "pedido": "#1048", "cliente": "Ana S.", "canal": "Balcão", "status": "Finalizado", "pagamento": "Dinheiro", "valor": "R$ 86,20" },
    { "pedido": "#1050", "cliente": "Lucas M.", "canal": "Delivery", "status": "Em preparo", "pagamento": "Pix", "valor": "R$ 154,75" }
  ],
  "produtos": [
    { "nome": "Hambúrguer Artesanal", "qtd": "248 pedidos", "valor": "R$ 7.420" },
    { "nome": "Pizza Margherita", "qtd": "193 pedidos", "valor": "R$ 5.310" },
    { "nome": "Coca-Cola 600ml", "qtd": "314 pedidos", "valor": "R$ 2.890" },
    { "nome": "Batata Frita", "qtd": "287 pedidos", "valor": "R$ 2.440" }
  ],
  "cardapio": [
    { "id": 1, "nome": "Hambúrguer Artesanal", "preco": 34.9, "categoria": "Lanches", "quantidade": 248 },
    { "id": 2, "nome": "Pizza Margherita", "preco": 49.9, "categoria": "Pizzas", "quantidade": 193 },
    { "id": 3, "nome": "Batata Frita", "preco": 18.9, "categoria": "Acompanhamentos", "quantidade": 287 },
    { "id": 4, "nome": "Refrigerante 600ml", "preco": 9.9, "categoria": "Bebidas", "quantidade": 314 }
  ],
  "estoque": [
    { "produto": "Carne de Hambúrguer", "quantidade": "18 kg", "minimo": "25 kg", "status": "Acabando" },
    { "produto": "Queijo Mussarela", "quantidade": "12 kg", "minimo": "20 kg", "status": "Comprar" },
    { "produto": "Tomate", "quantidade": "4 kg", "minimo": "10 kg", "status": "Crítico" },
    { "produto": "Leite", "quantidade": "7 caixas", "minimo": "12 caixas", "status": "Normal" }
  ],
  "financeiro": {
    "receitas": "R$ 48.250",
    "despesas": "R$ 27.920",
    "lucroLiquido": "R$ 20.330",
    "fluxo": [35, 42, 58, 63, 71, 80, 90]
  },
  "clientes": [
    { "nome": "Maria L.", "telefone": "(11) 99999-1234", "ultimaCompra": "Hoje", "gastoTotal": "R$ 1.280,00", "frequencia": "Alta" },
    { "nome": "João P.", "telefone": "(11) 98888-4321", "ultimaCompra": "4 dias", "gastoTotal": "R$ 890,00", "frequencia": "Alta" },
    { "nome": "Ana S.", "telefone": "(11) 97777-8899", "ultimaCompra": "12 dias", "gastoTotal": "R$ 640,00", "frequencia": "Média" }
  ],
  "funcionarios": [
    { "nome": "Carlos Silva", "cargo": "Atendente", "score": "96%" },
    { "nome": "Renata Costa", "cargo": "Caixa", "score": "93%" },
    { "nome": "Eduardo N.", "cargo": "Delivery", "score": "91%" },
    { "nome": "Fernanda A.", "cargo": "Cozinha", "score": "89%" }
  ],
  "marketing": {
    "cupons": ["PRIMEIRACOMPRA", "VOLTEI10", "CLIENTEVIP"],
    "campanhas": ["WhatsApp", "SMS", "E-mail"],
    "conversao": { "PRIMEIRACOMPRA": "18,4%", "VOLTEI10": "12,8%", "CLIENTEVIP": "22,1%" }
  },
  "relatorios": [
    { "titulo": "Produtos mais lucrativos", "valor": "Hambúrguer", "detalhe": "Maior margem da semana" },
    { "titulo": "Horários de pico", "valor": "18h-21h", "detalhe": "34% dos pedidos" },
    { "titulo": "Retenção", "valor": "71%", "detalhe": "Clientes ativos no mês" },
    { "titulo": "ROI campanhas", "valor": "4,8x", "detalhe": "Retorno médio" }
  ],
  "modulos": [
    { "titulo": "Gestão de Pedidos", "descricao": "Abertura e controle de mesas, delivery, balcão e comanda digital.", "icon": "📦" },
    { "titulo": "Cardápio Inteligente", "descricao": "Categorias, combos, promoções, adicionais e disponibilidade em tempo real.", "icon": "🍔" },
    { "titulo": "Controle de Estoque", "descricao": "Entradas, saídas, inventário, vencimento e alertas automáticos.", "icon": "📦" },
    { "titulo": "Financeiro", "descricao": "Receitas, despesas, fluxo de caixa, DRE e controle de faturamento.", "icon": "💰" },
    { "titulo": "CRM e Fidelidade", "descricao": "Histórico, recorrência, pontos e campanhas de relacionamento.", "icon": "🎯" },
    { "titulo": "WhatsApp Integrado", "descricao": "Mensagens inteligentes para confirmação, entrega e feedback.", "icon": "💬" },
    { "titulo": "IA e Analytics", "descricao": "Sugestões automáticas, previsões de demanda e insights de gestão.", "icon": "🤖" },
    { "titulo": "Multiunidades", "descricao": "Comparação por loja, metas, desempenho e gestão centralizada.", "icon": "🏬" }
  ]
}
