import './MenuPage.css'
import { useEffect, useRef, useState } from 'react'
import MenuSheet from '../../components/MenuSheet/MenuSheet.jsx'
import Pagination from '../../components/Pagination/Pagination.jsx'
import { Arrow, Chat } from '../../components/Icons/Icons.jsx'
import { menuPages } from '../../data/menu.js'
import { links } from '../../data/site.js'

export default function MenuPage() {
  const [active, setActive] = useState(0)        // folha que está na tela agora
  const [showPager, setShowPager] = useState(false) // barra flutuante só aparece enquanto o cardápio está na tela
  const tabsRef = useRef(null)

  // Acompanha a rolagem: marca a folha atual e mostra/esconde a barra flutuante.
  useEffect(() => {
    let raf = 0
    const update = () => {
      raf = 0
      const els = menuPages.map((p) => document.getElementById(p.id)).filter(Boolean)
      if (!els.length) return
      const line = window.innerHeight * 0.4
      let idx = 0
      els.forEach((el, i) => { if (el.getBoundingClientRect().top <= line) idx = i })
      setActive(idx)
      const first = els[0].getBoundingClientRect()
      const last = els[els.length - 1].getBoundingClientRect()
      setShowPager(first.top < window.innerHeight * 0.7 && last.bottom > window.innerHeight * 0.55)
    }
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update) }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  // mantém a aba ativa visível quando as abas rolam na horizontal (celular)
  useEffect(() => {
    const nav = tabsRef.current
    const btn = nav?.querySelector('button.on')
    if (nav && btn) nav.scrollTo({ left: btn.offsetLeft - nav.clientWidth / 2 + btn.clientWidth / 2, behavior: 'smooth' })
  }, [active])

  // Pula para uma folha (o cliente também pode só ir descendo).
  const go = (i) => {
    const id = menuPages[i].id
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    window.history.replaceState(window.history.state, '', `#${id}`)
  }

  return (
    <div className="menu-page">
      <header className="menu-hero">
        <p className="eyebrow fade">CARDÁPIO</p>
        <h1 className="menu-title fade" style={{ '--d': '120ms' }}>O que tem <em>hoje.</em></h1>
        <p className="fade" style={{ '--d': '240ms' }}>Cafés especiais, brunch, cozinha afetiva e doces. Role para ver tudo ou pule direto para a seção que quiser.</p>
        <div className="hero-actions fade" style={{ '--d': '360ms' }}>
          <a className="btn btn-red" href="/cardapio-cafe-com-leite.pdf" download>Baixar PDF <Arrow size={18} /></a>
          <a className="btn btn-line" href={links.whatsapp} target="_blank" rel="noreferrer"><Chat size={18} /> Pedir no WhatsApp</a>
        </div>
      </header>

      <nav className="menu-tabs" aria-label="Seções do cardápio" ref={tabsRef}>
        {menuPages.map((p, i) => (
          <button key={p.id} type="button" aria-pressed={i === active} className={i === active ? 'on' : ''} onClick={() => go(i)}>{p.tab}</button>
        ))}
      </nav>

      <div className="menu-sheets">
        {menuPages.map((p) => <MenuSheet key={p.id} id={p.id} blocks={p.blocks} />)}
      </div>

      <div className={`menu-pager-float ${showPager ? 'show' : ''}`}>
        <Pagination total={menuPages.length} current={active + 1} onChange={(n) => go(n - 1)} label="Páginas do cardápio" />
      </div>
    </div>
  )
}
