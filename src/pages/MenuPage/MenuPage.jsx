import './MenuPage.css'
import { useState } from 'react'
import MenuSheet from '../../components/MenuSheet/MenuSheet.jsx'
import { Arrow, Chat } from '../../components/Icons/Icons.jsx'
import { menuPages } from '../../data/menu.js'
import { links } from '../../data/site.js'

export default function MenuPage() {
  const [active, setActive] = useState(menuPages[0].id)
  const go = (id) => {
    setActive(id)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  return (
    <div className="menu-page">
      <header className="menu-hero">
        <p className="eyebrow fade">CARDÁPIO</p>
        <h1 className="menu-title fade" style={{ '--d': '120ms' }}>O que tem <em>hoje.</em></h1>
        <p className="fade" style={{ '--d': '240ms' }}>Cafés especiais, brunch, cozinha afetiva e doces. Escolha uma seção ou peça pelo WhatsApp.</p>
        <div className="hero-actions fade" style={{ '--d': '360ms' }}>
          <a className="btn btn-red" href="/cardapio-cafe-com-leite.pdf" download>Baixar PDF <Arrow size={18} /></a>
          <a className="btn btn-line" href={links.whatsapp} target="_blank" rel="noreferrer"><Chat size={18} /> Pedir no WhatsApp</a>
        </div>
      </header>
      <nav className="menu-tabs" aria-label="Seções do cardápio">
        {menuPages.map((p) => (
          <button key={p.id} type="button" aria-pressed={active === p.id} className={active === p.id ? 'on' : ''} onClick={() => go(p.id)}>{p.tab}</button>
        ))}
      </nav>
      <div className="menu-sheets">
        {menuPages.map((p) => <MenuSheet key={p.id} id={p.id} blocks={p.blocks} />)}
      </div>
    </div>
  )
}
