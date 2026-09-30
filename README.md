# Café com Leite Gama

React + Vite + React Router. Rodar: `npm install && npm run dev`. Build: `npm run build`.

## Estrutura
- `src/components/<Nome>/<Nome>.jsx` + `<Nome>.css`: cada componente com seu CSS na própria pasta.
- `src/pages/<Nome>/`: páginas (`Home` e `MenuPage`, com CSS próprio).
- `src/styles/`: `theme.css` (cores da marca), `global.css` (base), `buttons.css`, `animations.css`.
- `src/data/menu.js`: cardápio (edite aqui). `src/data/site.js`: horários, links, unidade e textos.
- Hospedagem: `vercel.json` e `public/_redirects` fazem o /cardapio funcionar ao recarregar.
