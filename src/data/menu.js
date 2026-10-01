// =====================================================================
// CARDÁPIO: refeito a partir do PDF. Edite textos e preços aqui.
// Texto com *asteriscos* vira negrito em itálico (como no PDF).
// Fotos: nomes de arquivos em src/assets/menu (sem .webp).
//
// Blocos disponíveis (t = tipo):
//  head     { title, aside, items:[{name,desc,price,note}] }
//  title    { text, size:'md'|'lg', note, right, badges, line }
//  cards    { cols, ratio:'wide'|'tall'|'sq'|'none', layout:'side', items }
//           item: { img, name, desc, prices:[[rótulo, valor]], price, bullets,
//                   badges:['lactose'|'gluten'|'vegan'], natural }
//  gallery  { cols, ratio, items:[{img, alt}] }
//  image    { img, ratio, alt }
//  list     { title, sub, cols, layout:'stack', items:[{name,desc,price,badges}] }
//  split    { cols:'1fr 1fr', children:[[blocos],[blocos]] }
//  note     { text, align }     rule {}
// =====================================================================

export const menuPages = [
  {
    id: 'cafes', tab: 'Cafés e brunch', blocks: [
      { t: 'head', title: 'Um *café* para começar.', aside: 'Todos os nossos cafés são extraídos com grãos *especiais*.' },
      { t: 'cards', cols: 4, ratio: 'tall', items: [
        { img: 'espresso-cafe-carioca', name: 'Espresso / Café Carioca', prices: [['Grão especial:', 'R$9 / 60ml'], ['Descafeinado:', 'R$9 / 60ml']] },
        { img: 'coador-de-pano', name: 'Coador de Pano', prices: [['Grão especial:', 'R$6 / 60ml']] },
        { img: 'prensa-francesa', name: 'Prensa Francesa', prices: [['Grão especial:', 'R$14,50 / 150ml'], ['', 'R$18,50 / 300ml']] },
        { img: 'hario-v60', name: 'Hario V60', prices: [['Grão especial:', 'R$14,50 / 150ml'], ['', 'R$18,50 / 300ml']] },
      ] },
      { t: 'split', cols: '1fr 2.2fr', children: [
        [{ t: 'cards', cols: 1, ratio: 'none', items: [{ name: 'Macchiato Especial', prices: [['Espresso com espuma de leite:', 'R$9 / 60ml']] }] }],
        [{ t: 'note', align: 'right', text: 'Adicional de chantilly: *R$5*' }, { t: 'rule' }, { t: 'note', align: 'right', text: '*Grãos especiais* Anero' }],
      ] },
      { t: 'cards', cols: 3, ratio: 'brunch', items: [
        { img: 'brunch-afeto', name: 'Brunch Afeto', price: 'R$55', bullets: ['2 mini panquecas americanas', '2 mini waffles', 'Ovos mexidos com bacon', 'Mini parfait de frutas', '1 suco de laranja ou capuccino italiano'] },
        { img: 'brunch-zhelo', name: 'Brunch Zhelo', price: 'R$55', bullets: ['Mini waffle caprese', 'Mini sanduíche de patê de frango com creamcheese', 'Mini sanduíche de peito de peru e queijo minas', 'Frutas (banana, mamão e morango)', 'Suco de laranja ou capuccino da casa'] },
        { img: 'brunch-aconchego', name: 'Brunch Aconchego', price: 'R$55', bullets: ['Croissant (acompanha manteiga)', 'French toast (pão artesanal tostado caramelizado com manteiga e mel)', 'Iogurte natural caseiro com geleia de frutas vermelhas', 'Capuccino italiano ou V60 de 150ml ou suco de laranja'] },
      ] },
    ],
  },
  {
    id: 'quentes', tab: 'Bebidas quentes', blocks: [
      { t: 'split', cols: '1fr 1fr', children: [
        [{ t: 'image', img: 'cappuccino', ratio: 'portrait', alt: 'Cappuccino com canela' }],
        [
          { t: 'title', size: 'lg', text: 'Para *aquecer* o coração.' },
          { t: 'note', text: 'Um conforto para o *corpo* e *coração*.', big: true },
          { t: 'list', items: [
            { name: 'Cappuccino Italiano', desc: 'Café espresso com leite vaporizado', price: 'R$15 / 250ml' },
            { name: 'Cappuccino da Casa', desc: 'Preparado com leite Ninho, chocolate 50%, canela e nescafé solúvel', price: 'R$15 / 220ml' },
            { name: 'Caramelo Machiato', desc: 'Leite, espresso e syrup de caramelo salgado', price: 'R$16 / 220ml' },
            { name: 'Mocha', desc: 'Leite, espresso e calda artesanal de chocolate', price: 'R$16 / 220ml' },
            { name: 'Café Mocinha', desc: 'Espresso com leite condensado e canela', price: 'R$12,50 / 100ml' },
          ] },
        ],
      ] },
      { t: 'rule' },
      { t: 'gallery', cols: 3, ratio: 'wide', items: [{ img: 'cha-especial', alt: 'Chá especial' }, { img: 'matcha-latte', alt: 'Matcha latte' }, { img: 'chocolate-quente', alt: 'Chocolate quente' }] },
      { t: 'split', cols: '1fr 1fr', children: [
        [{ t: 'list', items: [
          { name: 'Chá Especial "Aquece Coração"', desc: 'Chá de frutas vermelhas, syrup de cranberry, laranja, canela e cravo', price: 'R$13,50 / 200ml' },
          { name: 'Chá Artesanal @adoravelcha', desc: 'Verificar blends disponíveis', price: 'R$10 / 200ml' },
          { name: 'Chá Mate Gelado Com Limão', desc: 'Refrescante e delicioso', price: 'R$13,50 / 300ml' },
        ] }],
        [{ t: 'list', items: [
          { name: 'Chai Latte', price: 'R$18,50 / 220ml' },
          { name: 'Matcha Latte', price: 'R$18,50 / 220ml' },
          { name: 'Chocolate Quente', desc: 'Feito com chocolate puro meio amargo e raspas de chocolate ao leite', price: 'R$25 / 180ml' },
        ] }],
      ] },
    ],
  },
  {
    id: 'refrescantes', tab: 'Refrescantes', blocks: [
      { t: 'head', title: '*Refrescante* & único.', aside: 'Surpreendentemente *delicioso*.' },
      { t: 'cards', cols: 4, ratio: 'wide', items: [
        { img: 'iced-coffee', name: 'Iced Coffee', desc: 'Caramelo salgado', price: 'R$16,00 / 250ml' },
        { img: 'frapuccino', name: 'Frapuccino', desc: 'Caramelo salgado ou doce de leite', price: 'R$23,50 / 300ml' },
        { img: 'tiramissu-coffee', name: 'Tiramissu Coffee', desc: 'Sorvete premium Vai bem, bolacha champagne, espresso e chantilly', price: 'R$18,50 / 200ml' },
        { img: 'matcha-gelado', name: 'Matcha Gelado', desc: 'Servido com geleia de frutas vermelhas', price: 'R$23,50 / 300ml' },
      ] },
      { t: 'rule' },
      { t: 'title', size: 'md', text: '*Milkshakes*', note: 'Preparados com sorvete premium Vai Bem', right: 'R$29,90 / 300ml' },
      { t: 'gallery', cols: 4, ratio: 'tall', items: [
        { img: 'manga-com-geleia', alt: 'Milkshake de manga com geléia artesanal de maracujá' },
        { img: 'morango', alt: 'Milkshake de morango (contém traços de hortelã e gengibre)' },
        { img: 'ovomaltine', alt: 'Milkshake de Ovomaltine' },
        { img: 'matcha-com-geleia', alt: 'Milkshake de matcha com geléia de frutas vermelhas' },
      ] },
      { t: 'rule' },
      { t: 'split', cols: '1fr 1.2fr', children: [
        [{ t: 'title', size: 'md', text: '*Sucos*' }, { t: 'list', cols: 2, layout: 'stack', items: [
          { name: 'Uva Integral', price: 'R$8,00 / 200ml' },
          { name: 'Mix', desc: 'Morango com Laranja ou Maracujá com Manga', price: 'R$17,50 / 300ml' },
          { name: 'Naturais', desc: 'Consulte os sabores', price: 'R$13,50 / 300ml' },
          { name: 'Detox', desc: 'Preparado com abacaxi, couve, maçã, hortelã e gengibre', price: 'R$17,50 / 300ml' },
        ] }],
        [{ t: 'title', size: 'md', text: '*Bebidas*' }, { t: 'list', cols: 2, layout: 'stack', items: [
          { name: 'Água prata', desc: 'Com ou sem gás', price: 'R$7,90 / 200ml' },
          { name: 'Vitaminas', desc: 'Consulte os sabores', price: 'R$15,00 / 300ml' },
          { name: 'Coca-Cola KS', desc: 'Tradicional ou Zero', price: 'R$8,50 / 290ml' },
          { name: 'Smothie de Morango', desc: 'Iogurte natural, morango, mel, gengibre e hortelã', price: 'R$17,50 / 300ml' },
          { name: 'H2O', price: 'R$10,00 / 500ml' },
        ] }],
      ] },
      { t: 'rule' },
      { t: 'cards', cols: 4, ratio: 'sq', items: [
        { img: 'drinks', name: '', natural: true },
        { img: 'pinklemonade', name: 'Pinklemonade', desc: 'Refresco preparado a base de limão siciliano e syrup pinklemonade', price: 'R$15,00 / 300ml' },
        { img: 'mocktail-de-roma', name: 'Mocktail de Romã', desc: 'Mocktail sem álcool de romã com cereja', price: 'R$19,90' },
        { img: 'crericot-especial', name: 'Crericot Especial', desc: 'Clericot (drink preparado com vinho rosé e frutas vermelhas)', price: 'R$29,90' },
      ] },
    ],
  },
  {
    id: 'infancia', tab: 'Sabores da infância', blocks: [
      { t: 'head', title: 'Sabores da *infância*.', aside: 'Laços e memórias *através* do sabor.' },
      { t: 'cards', cols: 3, ratio: 'wide', items: [
        { img: 'pao-de-queijo', name: 'Pão de queijo ou Biscoito de queijo', desc: '4 unid', price: 'R$12,00' },
        { img: 'biscoito-de-polvilho', name: 'Biscoito de polvilho frito da vovó', desc: '4 unid', price: 'R$10,00' },
        { img: 'bolinho-de-chuva', name: 'Bolinho de chuva', desc: 'Acompanha doce de leite', price: '6 unid / R$15,00' },
      ] },
      { t: 'rule' },
      { t: 'split', cols: '1.1fr 1fr 1fr', children: [
        [{ t: 'title', size: 'md', text: 'Toasts.' }, { t: 'list', items: [
          { name: 'Toast de banana', price: 'R$15' },
          { name: 'Queijo com requeijão cremoso', price: 'R$15' },
          { name: 'Peito de Peru com queijo Minas', price: 'R$15' },
        ] }],
        [{ t: 'image', img: 'toasts', ratio: 'sq', alt: 'Toast de banana' }],
        [{ t: 'title', size: 'md', text: 'Empadas' }, { t: 'note', text: 'Consultar sabores' }, { t: 'note', text: '*R$9,50*' }],
      ] },
      { t: 'title', size: 'lg', text: 'Leves e *nutritivos*.' },
      { t: 'cards', cols: 3, ratio: 'wide', items: [
        { img: 'parfait-de-frutas', name: 'Parfait de frutas', desc: 'Iogurte grego, granola, frutas e mel', price: 'R$16,50' },
        { img: 'creme-de-pitaya', name: 'Creme de Pitaya', desc: 'Creme de pitaya com banana, finalizado com frutas e granola', price: 'R$19,90' },
        { img: 'sanduiche-natural', name: 'Sanduíche Natural', desc: 'Recheio de patê de frango e cream cheese, tomate cereja e alface OU Recheio de Salpicão', price: 'R$22,50' },
      ] },
      { t: 'rule' },
      { t: 'cards', cols: 4, ratio: 'none', items: [
        { name: 'Panqueca funcional', badges: ['lactose', 'gluten'], desc: 'Banana, ovos, aveia, canela e mel. Opcional: Queijo minas ou mussarela', price: 'R$17,50' },
        { name: 'Salgado de batata doce', badges: ['lactose', 'gluten'], desc: 'Recheio de frango com cenoura', price: 'R$12' },
        { name: 'Bolo vegano de banana', badges: ['vegan'], price: 'R$12' },
        { name: 'Bolo de maçã', badges: ['lactose', 'gluten'], desc: 'Acompanha compota de maçã artesanal', price: 'R$12,50' },
      ] },
    ],
  },
  {
    id: 'ovos-waffles', tab: 'Ovos e waffles', blocks: [
      { t: 'head', title: '*Ovos*\n& omelete.', items: [
        { name: 'Mexidos com bacon', price: 'R$16,50', note: 'Adicional de torradas recheadas: *R$12,00*' },
        { name: 'Omelete Napolitano', desc: 'Presunto, queijo, tomate e orégano', price: 'R$17,50', note: 'Adicional de torradas recheadas: *R$12,00*' },
      ] },
      { t: 'gallery', cols: '1.5fr 1fr', ratio: 'wide', items: [{ img: 'croissants', alt: 'Croissant' }, { img: 'panqueca-americanas', alt: 'Panquecas americanas com ovos e bacon' }] },
      { t: 'split', cols: '1.5fr 1fr', children: [
        [{ t: 'title', size: 'lg', text: 'Croissants' }, { t: 'list', cols: 2, layout: 'inline', items: [
          { name: 'Caprese', desc: 'Ricota, pesto, Parma, tomate confit, rúcula e parmesão', price: 'R$33,50' },
          { name: 'Morango com Nutella', price: 'R$25,00' },
          { name: 'Peito de peru e queijo minas', price: 'R$25,00' },
          { name: 'Banana, doce de leite e canela', price: 'R$22,50' },
        ] }],
        [{ t: 'title', size: 'lg', text: 'Panquecas americanas', badges: ['lactose', 'gluten'] }, { t: 'note', text: 'Com frutas e calda de chocolate OU Com ovos, bacon e manteiga' }, { t: 'note', text: '*R$30,00*' }],
      ] },
      { t: 'rule' },
      { t: 'title', size: 'lg', text: 'Waffles.', note: 'Substitua sua massa tradicional pela nossa massa especial *sem glúten* e *lactose*' },
      { t: 'gallery', cols: 2, ratio: 'wide', items: [{ img: 'waffles', alt: 'Waffle recheado' }, { img: 'waffles-com-sorvete', alt: 'Waffle com morango, sorvete e calda de chocolate' }] },
      { t: 'split', cols: '1fr 1fr', children: [
        [{ t: 'list', items: [
          { name: 'Waffle Napolitano', desc: 'presunto, queijo, tomate e orégano', price: 'R$25' },
          { name: 'Waffle com ovos mexidos e bacon', desc: 'acompanha cream cheese', price: 'R$30' },
          { name: 'Waffle Crispy', desc: 'Waffle recheado com presunto, queijo, ovo, bacon, crispy de couve e crispy de cebola', price: 'R$32,50' },
          { name: 'Waffle Caprese', desc: 'ricota, pesto parma, tomate confit, rúcula e parmesão', price: 'R$38,50' },
        ] }],
        [{ t: 'list', items: [
          { name: 'Waffle com manteiga e mel', price: 'R$17,50' },
          { name: 'Waffle com banana, queijo e mel', price: 'R$25' },
          { name: 'Waffle morango com Nutella', price: 'R$30' },
          { name: 'Waffle Doce Combinação', desc: 'morango, sorvete premium Vai Bem e calda quente de chocolate', price: 'R$30' },
        ] }],
      ] },
      { t: 'rule' },
      { t: 'split', cols: '1fr 1.2fr', children: [
        [{ t: 'cards', cols: 1, layout: 'side', items: [{ img: 'croque-madame', name: 'Croque Madame', desc: 'Preparado com presunto, queijo, molho bechamel, queijo parmesão e ovo. (Escolha entre pão artesanal ou waffle para o preparo)', price: 'R$25' }] }],
        [{ t: 'title', size: 'lg', text: 'Sanduíches da Casa.' }, { t: 'list', items: [
          { name: 'Pão francês recheado com carne de panela e queijo', price: 'R$25' },
          { name: 'Baguete recheada com frango grelhado, creamcheese, bacon, queijo, tomate e manjericão', price: 'R$25' },
        ] }],
      ] },
    ],
  },
  {
    id: 'cuscuz-doces', tab: 'Cuscuz e doces', blocks: [
      { t: 'split', cols: '1fr 1fr', children: [
        [{ t: 'title', size: 'lg', text: 'Cuzcuz.' }, { t: 'gallery', cols: 2, ratio: 'tall', items: [{ img: 'cuzcuz', alt: 'Cuscuz com carne de panela' }, { img: 'cuscuz-do-jose', alt: 'Cuscuz do José' }] }, { t: 'list', items: [
          { name: 'Manteiga e queijo', price: 'R$12' },
          { name: 'Maria Bonita', desc: 'Cuscuz preparado com melaço de cana, banana da terra e queijo', price: 'R$16,50' },
          { name: 'Ovos mexidos e queijo', price: 'R$17,50' },
          { name: 'Carne de panela e queijo', price: 'R$27,50' },
          { name: 'Cuscuz do José', desc: 'cuscuz, carne de panela desfiada, saladinha de feijão fradinho e queijo coalho', price: 'R$32,50' },
        ] }],
        [{ t: 'title', size: 'lg', text: 'Tapiocas.' }, { t: 'image', img: 'tapioca', ratio: 'wide', alt: 'Tapioca' }, { t: 'list', items: [
          { name: 'Invertida com carne de panela e banana da terra', price: 'R$27,50' },
          { name: 'Manteiga e queijo minas', price: 'R$13,50' },
          { name: 'Ovos mexidos e queijo', price: 'R$17,50' },
          { name: 'Peito de peru e queijo minas', price: 'R$17,50' },
          { name: 'Tomate seco, queijo minas e manjericão', price: 'R$18,50' },
        ] }],
      ] },
      { t: 'title', size: 'lg', text: 'Para *adoçar* a vida!', line: true },
      { t: 'cards', cols: 2, ratio: 'wide', items: [
        { img: 'torta-de-prestigio', name: 'Torta de Prestígio ou Chocolate com café', price: 'Fatia / R$18,50' },
        { img: 'bolo-de-chocolate', name: 'Bolo de Chocolate com calda quente', price: 'Fatia / R$12,00' },
        { img: 'french-toast', name: 'French Toast', desc: 'Acompanha frutas e mel', price: 'R$22,50' },
        { img: 'delicia-tropical', name: 'Delícia Tropical', desc: 'Sorvete premium Vai Bem, banana e abacaxi flambados com raspas de limão', price: 'R$18,50' },
      ] },
    ],
  },
  {
    id: 'da-casa', tab: 'Sabores da casa', blocks: [
      { t: 'head', title: 'Sabores\nda *casa*.', aside: 'Todo *frescor* e *leveza* que o seu dia merece.', extraNote: 'Adicional de frango (150g in natura) R$12,50' },
      { t: 'gallery', cols: 2, ratio: 'wide', items: [{ img: 'salada-caesar', alt: 'Salada Caesar' }, { img: 'rondelle', alt: 'Rondelle gratinado' }] },
      { t: 'cards', cols: 4, ratio: 'none', items: [
        { name: 'Salada Caesar', desc: 'Acompanha tiras de frango', price: 'R$35' },
        { name: 'Salada da Casa', desc: 'Acompanha molho especial da casa', price: 'R$25' },
        { name: 'Rondelle', price: 'R$35' },
        { name: 'Nhoque à bolonhesa', price: 'R$35' },
      ] },
      { t: 'rule' },
      { t: 'split', cols: '1fr 1fr', children: [
        [{ t: 'title', size: 'md', text: 'Spaghetti de legumes' }, { t: 'image', img: 'spaghetti-de-legumes', ratio: 'wide', alt: 'Spaghetti de legumes' }, { t: 'list', items: [{ name: 'Spaghetti de legumes', price: 'R$20' }] }],
        [{ t: 'title', size: 'md', text: 'Talharim' }, { t: 'image', img: 'talharim', ratio: 'wide', alt: 'Talharim' }, { t: 'list', items: [{ name: 'Acompanha molho pomodoro, à bolonhesa ou pesto', price: 'R$35' }] }],
      ] },
      { t: 'rule' },
      { t: 'title', size: 'md', text: 'Bruschettas da casa' },
      { t: 'cards', cols: 2, ratio: 'wide', items: [
        { img: 'bruschettas-tomate-seco', name: 'Bruschettas preparadas com tomate seco da casa, queijo minas e manjericão', price: '6 unidades / R$25' },
        { img: 'bruschettas-banana-da-terra', name: 'Bruschettas de banana da terra com tomate seco, queijo minas e manjericão', badges: ['gluten'], price: '6 unidades / R$25' },
      ] },
    ],
  },
]

