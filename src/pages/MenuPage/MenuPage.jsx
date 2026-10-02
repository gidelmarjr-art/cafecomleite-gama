import './MenuPage.css'
import { useEffect, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import MenuSheet from '../../components/MenuSheet/MenuSheet.jsx'
import Pagination from '../../components/Pagination/Pagination.jsx'
import { Arrow, Chat } from '../../components/Icons/Icons.jsx'
import { menuPages } from '../../data/menu.js'
import { links } from '../../data/site.js'

export default function MenuPage() {
  const { hash } = useLocation()
  const navigate = useNavigate()
  const tabsRef = useRef(null)
  // A folha atual vem do endereço (#id), então links do rodapé e da home funcionam.
  const index = Math.max(0, menuPages.findIndex((p) => `#${p.id}` === hash))
  const page = menuPages[index]
  const go = (i) => navigate(`/cardapio#${menuPages[i].id}`, { replace: true })

  // mantém a aba ativa visível quando as abas rolam na horizontal (celular)
  useEffect(() => {
    const nav = tabsRef.current
    const btn = nav?.querySelector('button.on')
    if (nav && btn) nav.scrollTo({ left: btn.offsetLeft - nav.clientWidth / 2 + btn.clientWidth / 2, behavior: 'smooth' })
  }, [index])

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

      <nav className="menu-tabs" aria-label="Seções do cardápio" ref={tabsRef}>
        {menuPages.map((p, i) => (
          <button key={p.id} type="button" aria-pressed={i === index} className={i === index ? 'on' : ''} onClick={() => go(i)}>{p.tab}</button>
        ))}
      </nav>

      <div className="menu-sheets">
        <MenuSheet key={page.id} id={page.id} blocks={page.blocks} />
      </div>

      <div className="menu-pager">
        <Pagination total={menuPages.length} current={index + 1} onChange={(n) => go(n - 1)} label="Páginas do cardápio" />
        <p className="menu-pager-caption">Página {index + 1} de {menuPages.length} · {page.tab}</p>
      </div>
    </div>
  )
}
