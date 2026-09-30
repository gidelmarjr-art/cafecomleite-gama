// CARDÁPIO: edite aqui. Cada categoria vira uma seção na página /cardapio.
// Item: { name, description, price?: 'R$ 00', tag?: 'Novo', featured?: true }
// Os itens abaixo são EXEMPLOS baseados em imprensa/iFood. Sem preços até confirmar.
export const menuCategories = [
  { id: 'cafes', title: 'Cafés', note: 'Coador de pano, prensa francesa ou Hario V60.', items: [
    { name: 'Café especial', description: 'Escolha o método de extração.', featured: true },
    { name: 'Cappuccino', description: 'Espresso, leite vaporizado e espuma.', featured: true },
    { name: 'Mocha', description: 'Café com chocolate e leite.' },
    { name: 'Chocolate quente', description: 'Para os dias de chuva.' },
  ] },
  { id: 'cozinha', title: 'Da cozinha', note: 'Receitas caseiras, cozinha afetiva.', items: [
    { name: 'Sanduíche natural', description: 'Leve e fresquinho.', featured: true },
    { name: 'Tapioca e cuscuz', description: 'Recheios do dia.' },
    { name: 'Croissant', description: 'Folhado, na hora do lanche.' },
    { name: 'Saladas e massas', description: 'Caesar com tiras de frango e spaghetti de legumes.' },
  ] },
  { id: 'doces', title: 'Doces', note: 'Gostinho de infância.', items: [
    { name: 'Bolinho de chuva', description: 'Com doce de leite.', featured: true },
    { name: 'Waffles e toasts', description: 'Doces ou salgados.' },
    { name: 'Bolo de chocolate e café', description: 'Fatia da casa.' },
  ] },
  { id: 'gelados', title: 'Gelados', note: 'Refrescantes do primeiro ao último gole.', items: [
    { name: 'Matcha gelado', description: 'Com geleia de morango da casa.', featured: true },
    { name: 'Sucos naturais', description: 'Feitos na hora.' },
    { name: 'Milkshakes', description: 'Cremosos.' },
  ] },
  { id: 'drinks-classicos', title: 'Drinks Clássicos', note: 'Os clássicos da coquetelaria.', items: [
    { name: 'FITZGERALD', description: 'Cítrico (Gin Beefeater, sumo limão, xarope simples, angostura, limão siciliano)', price: 'R$ 37,90' },
    { name: 'CUERVO MARGARITA', description: 'Cítrico (Tequila, sumo de limão, licor curaçau fino)', price: 'R$ 33,90' },
    { name: 'PINA COLADA', description: 'Doce (Rum Branco, leite condensado, purê de coco, suco de abacaxi)', price: 'R$ 30,90' },
    { name: 'MOJITO', description: 'Refrescante (Rum Branco, sumo de limão, hortelã, água com gás)', price: 'R$ 30,90' },
    { name: 'KIR ROYAL', description: 'Suave (Espumante brut, licor de cassis, cereja)', price: 'R$ 29,90' },
    { name: 'NEGRONI', description: 'Forte amargo (Gin Beefeater, Campari, Vermouth martini rosso)', price: 'R$ 37,90' }
  ] },
  { id: 'drinks-exclusivos', title: 'Exclusivos Tarumã', note: 'Receitas exclusivas da casa.', items: [
    { name: 'TARUMÃ', description: 'Refrescante (Gin Beefeater, syrup toranja, licor morango, sumo limão, espuma frutas vemelhas)', price: 'R$ 37,90', featured: true },
    { name: 'GREGO', description: 'Cítrico refrescante (Gin Beefeater, Licor de canela, syrup limao siciliano e gengibre, sumo de limão, tonica)', price: 'R$ 34,90' },
    { name: 'YPÊ ROSA', description: 'Doce suave (Vodka Absolut Raspberry, sumo limão, hortelã, limão siciliano, syrup gengibre, tonica pink lemonade, defumado)', price: 'R$ 37,90' },
    { name: 'COQUETELES', description: 'Cítrico (licor 43, sumo de limão)', price: 'R$ 34,90' },
    { name: 'NEVOEIRO', description: 'Doce cítrico (Vodka Absolut, sumo limão, algodao doce gliter blue, syrup maça verde, soda limonada, na chaleira)', price: 'R$ 36,90' },
    { name: 'PRECIOSA', description: 'Cítrico suave (Gin Beefeater, sumo limão, algodão doce gliter dourado, syrup caramelo salgado, tonica, na chaleira)', price: 'R$ 35,90' },
    { name: 'VERSATIL', description: 'Cítrico (Rum ouro, suco de maracujá, syrup caramelo salgado, vinho tinto, espuma gengibre)', price: 'R$ 37,90' }
  ] },
  { id: 'prossecos', title: 'Prosseco\'s', note: 'Bebidas à base de espumante e prosseco.', items: [
    { name: 'APEROL RED', description: 'Doce (Gin Beefeater, Aperol, sumo limão, morango e amora, xarope simples, espumante brut)', price: 'R$ 36,90' },
    { name: 'APEROL SPRITZ 321', description: 'Suave (Aperol, prosseco pro spritz, água com gás)', price: 'R$ 36,90', featured: true },
    { name: 'CLERICOT ESPUMANTE', description: 'Suave doce (Jarra 1l, espumante brut , syrup cereja, maçã verde, uva, morango, kiwi)', price: 'R$ 36,90' }
  ] },
  { id: 'drinks-cafe', title: 'Drinks Café', note: 'A união perfeita entre o café e a coquetelaria.', items: [
    { name: 'CARAJILLO', description: 'Marcante doce (Café expresso, licor 43)', price: 'R$ 24,90', featured: true },
    { name: 'CACAU L’ECLUSE', description: 'Café expresso, amarula, licor bayleys, jack daniels, calda de chocolate, servido com chocolate ralado', price: 'R$ 34,90' }
  ] },
  { id: 'drinks-sem-alcool', title: 'Drinks Sem Álcool', note: 'Saborosos e refrescantes, para qualquer momento.', items: [
    { name: 'SODA ITALIANA', description: 'Frutas vermelhas, maçã verde, cramberry', price: 'R$ 19,90' },
    { name: 'FRESH PEACH', description: 'Refrescante (Chá gelado limão, sumo limão, açucar mascavo)', price: 'R$ 19,90' },
    { name: 'MOSCOW PRAIANO', description: 'Refrescante doce (suco laranja, suco pessego, syrup cranberry)', price: 'R$ 23,90' },
    { name: 'GREEN DAY', description: 'Cítrico (Syrup maça verde, sumo de limão, schweppes citrus, hortelã)', price: 'R$ 24,90' }
  ] },
  { id: 'gin-tonica', title: 'Gin & Tônica', note: 'As melhores combinações com Gin.', items: [
    { name: 'GT SAFIRA', description: 'Doce (Gin, infusão pitaya, laranja bahia, tonica pink lemonade)', price: 'R$ 27,90' },
    { name: 'GT CLASSICO', description: 'Seco (Gin, limão siciliano, tônica)', price: 'R$ 27,90', featured: true },
    { name: 'GT GREEN', description: 'Cítrico (Gin, syrup maça verde, sumo de limão, ramo hortelã, scheppes citrus)', price: 'R$ 33,90' }
  ] }
];