# Café com Leite Gama

React + Vite + React Router. Rodar: `npm install && npm run dev`. Build: `npm run build`.

## Estrutura
- `src/components/<Nome>/<Nome>.jsx` + `<Nome>.css`: cada componente com seu CSS.
- `src/pages/Home` e `src/pages/MenuPage` (página /cardapio).
- `src/styles/`: `theme.css` (cores da marca: laranja #eb6919 e branco; direção do degradê do início em --hero-gradient), `global.css`, `buttons.css`, `animations.css`.
- `src/data/site.js`: horários, links, unidade, textos. `src/data/menu.js`: CARDÁPIO.

## Cardápio (refeito do PDF)
- Edite tudo em `src/data/menu.js`: cada página do PDF é uma "folha" feita de blocos
  (head, title, cards, gallery, image, list, split, note, rule). A legenda dos blocos está no topo do arquivo.
- Texto com *asteriscos* vira negrito itálico, como no PDF.
- Fotos: `src/assets/menu/*.webp`. Para trocar, mantenha o nome do arquivo ou mude o nome no menu.js.
- PDF original para download: `public/cardapio-cafe-com-leite.pdf`.
- Estilos do layout: `src/components/MenuBlocks/MenuBlocks.css` e `MenuSheet.css`.
