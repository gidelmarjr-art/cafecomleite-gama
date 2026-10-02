import './Header.css'
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { links } from '../../data/site.js'
import { isOpenNow } from '../../utils/hours.js'
import logoIcon from '../../assets/logo-icon.png'

const navItems = [
  ['A casa', '/#casa'],
  ['Cardápio', '/cardapio'],
  ['Avaliação', '/#avaliacoes'],
  ['Eventos', '/#agenda'],
  ['Contato', '/#contato'],
  ['Localização', '/#localizacao']
]

export default function Header() {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [aberto, setAberto] = useState(isOpenNow())

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 30)
    on()
    window.addEventListener('scroll', on, { passive: true })
    const id = setInterval(() => setAberto(isOpenNow()), 60000)
    return () => { window.removeEventListener('scroll', on); clearInterval(id) }
  }, [])

  const close = () => setOpen(false)

  return (
    <header className={`site-header ${scrolled || pathname.startsWith('/cardapio') ? 'scrolled' : ''}`}>
      <Link className="brand" to="/" onClick={close} aria-label="Café com Leite, início">
        <img className="brand-logo" src={logoIcon} alt="" width="40" height="40" />
        <span className="brand-text"><span>Café</span><i>com</i><span>Leite</span></span>
      </Link>

      <nav className={open ? 'nav open' : 'nav'} aria-label="Navegação principal">
        {navItems.map(([label, path], i) => (
          <Link 
            key={path} 
            to={path} 
            onClick={close} 
            style={{ '--i': i }}
          >
            {label}
          </Link>
        ))}
        <a className="nav-cta" href={links.whatsapp} target="_blank" rel="noreferrer" style={{ '--i': navItems.length }}>
          Pedir no WhatsApp
        </a>
      </nav>

      <span className={`status ${aberto ? 'on' : ''}`}><b />{aberto ? 'Aberto agora' : 'Fechado'}</span>
      
      <button className="menu-button" type="button" aria-expanded={open} aria-label={open ? 'Fechar menu' : 'Abrir menu'} onClick={() => setOpen(!open)}>
        <span /><span />
      </button>
    </header>
  )
}