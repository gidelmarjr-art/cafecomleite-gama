// Carrega todas as fotos de src/assets/menu. Use img('nome-do-arquivo-sem-extensao').
const files = import.meta.glob('../assets/menu/*.webp', { eager: true, import: 'default' })
const map = Object.fromEntries(Object.entries(files).map(([p, url]) => [p.split('/').pop().replace('.webp', ''), url]))

export const img = (name) => map[name]
