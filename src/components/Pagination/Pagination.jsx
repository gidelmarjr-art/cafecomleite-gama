import './Pagination.css'
import { useEffect, useState } from 'react'
import { Chevron } from '../Icons/Icons.jsx'

// Lista de páginas com reticências. No celular (compact) mostra só: 1 … atual … último.
function getItems(total, current, compact) {
  if (!compact && total <= 7) return Array.from({ length: total }, (_, i) => i + 1)
  const near = compact ? 0 : 1
  const set = new Set([1, total, current])
  for (let i = 1; i <= near; i++) { set.add(current - i); set.add(current + i) }
  const nums = [...set].filter((n) => n >= 1 && n <= total).sort((a, b) => a - b)
  const out = []
  nums.forEach((n, i) => {
    if (i > 0) {
      const gap = n - nums[i - 1]
      if (gap === 2) out.push(nums[i - 1] + 1)
      else if (gap > 2) out.push('gap')
    }
    out.push(n)
  })
  return out
}

function useCompact() {
  const [compact, setCompact] = useState(() => typeof window !== 'undefined' && window.matchMedia('(max-width: 520px)').matches)
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 520px)')
    const on = () => setCompact(mq.matches)
    mq.addEventListener('change', on)
    return () => mq.removeEventListener('change', on)
  }, [])
  return compact
}

export default function Pagination({ total, current, onChange, label = 'Paginação', prevLabel = 'Anterior', nextLabel = 'Próxima' }) {
  const compact = useCompact()
  const items = getItems(total, current, compact)
  return (
    <nav className="pg" aria-label={label}>
      <button type="button" className="pg-btn pg-nav prev" disabled={current === 1} onClick={() => onChange(current - 1)} aria-label={`${prevLabel} página`}>
        <Chevron size={16} /><span>{prevLabel}</span>
      </button>
      <ul className="pg-list">
        {items.map((it, i) => it === 'gap'
          ? <li key={`g${i}`} className="pg-gap" aria-hidden="true">…</li>
          : <li key={it}><button type="button" className="pg-btn pg-num" aria-current={it === current ? 'page' : undefined} aria-label={`Página ${it}`} onClick={() => onChange(it)}>{it}</button></li>)}
      </ul>
      <button type="button" className="pg-btn pg-nav next" disabled={current === total} onClick={() => onChange(current + 1)} aria-label={`${nextLabel} página`}>
        <span>{nextLabel}</span><Chevron size={16} />
      </button>
    </nav>
  )
}
