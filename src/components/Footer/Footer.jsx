import './Footer.css'
import { Link } from 'react-router-dom'
import { links, hours } from '../../data/site.js'
import { Instagram } from '../Icons/Icons.jsx'
import logoIcon from '../../assets/logo-icon.png'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <Link className="brand footer-brand" to="/"><img className="brand-logo" src={logoIcon} alt="" width="40" height="40" /><span className="brand-text"><span>Café</span><i>com</i><span>Leite</span></span></Link>
        <ul className="footer-hours">{hours.map((h) => <li key={h.label}><span>{h.label}</span><b>{h.time}</b></li>)}</ul>
        <div className="footer-links">
          <Link to="/cardapio">Cardápio</Link>
          <a href={links.whatsapp} target="_blank" rel="noreferrer">WhatsApp</a>
          <a href={links.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={20} /></a>
        </div>
      </div>
      <p>Criando laços e memórias através do sabor · Gama, DF</p>
    </footer>
  )
}
