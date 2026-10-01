const labels = { lactose: 'Sem lactose', gluten: 'Sem glúten', vegan: 'Vegano' }

function Glyph({ kind }) {
  if (kind === 'lactose') return <><rect x="9" y="7" width="6" height="10" rx="1" /><path d="M9 7l1.5-2h3L15 7" /></>
  if (kind === 'gluten') return <><path d="M12 6v12M12 9c-2 0-3-1-3-3 2 0 3 1 3 3Zm0 0c2 0 3-1 3-3-2 0-3 1-3 3Zm0 4c-2 0-3-1-3-3 2 0 3 1 3 3Zm0 0c2 0 3-1 3-3-2 0-3 1-3 3Z" /></>
  return <path d="M7 16c0-5 4-8 10-8 0 6-3 10-8 10M7 16c2-2 4-4 7-5" />
}

export default function Badges({ list = [] }) {
  if (!list.length) return null
  return (
    <span className="badges">
      {list.map((k) => (
        <svg key={k} viewBox="0 0 24 24" role="img" aria-label={labels[k]} className="badge-ico">
          <title>{labels[k]}</title>
          <circle cx="12" cy="12" r="10.5" />
          <g><Glyph kind={k} /></g>
          {k !== 'vegan' && <path d="M5.5 18.5 18.5 5.5" className="slash" />}
        </svg>
      ))}
    </span>
  )
}
