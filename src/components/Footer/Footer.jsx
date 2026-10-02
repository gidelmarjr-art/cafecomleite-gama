import './Footer.css'
import { Link } from 'react-router-dom'
import { links, hours, contact } from '../../data/site.js'
import { menuPages } from '../../data/menu.js'
import { Instagram, Chat, Pin } from '../Icons/Icons.jsx'
import logoIcon from '../../assets/logo-icon.png'

const explore = [['A casa', '/#casa'], ['Cardápio', '/cardapio'], ['Além do café', '/#agenda'], ['Dúvidas', '/#duvidas'], ['Localização', '/#localizacao']]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-about">
          <Link className="brand footer-brand" to="/" aria-label="Café com Leite, início">
            <img className="brand-logo" src={logoIcon} alt="" width="40" height="40" />
            <span className="brand-text"><span>Café</span><i>com</i><span>Leite</span></span>
          </Link>
          <p>Cafeteria e bistrô no Gama, com cafés especiais e cozinha afetiva. Criando laços e memórias através do sabor.</p>
          <div className="footer-social">
            <a href={links.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={22} /></a>
            <a href={links.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp"><Chat size={22} /></a>
            <a href={links.maps} target="_blank" rel="noreferrer" aria-label="Como chegar"><Pin size={22} /></a>
          </div>
        </div>

        <nav aria-label="Explorar">
          <h4>Explorar</h4>
          <ul>{explore.map(([l, to]) => <li key={to}><Link to={to}>{l}</Link></li>)}</ul>
        </nav>

        <nav aria-label="Cardápio">
          <h4>Cardápio</h4>
          <ul>{menuPages.map((p) => <li key={p.id}><Link to={`/cardapio#${p.id}`}>{p.tab}</Link></li>)}</ul>
        </nav>

        <div>
          <h4>Contato</h4>
          <ul>
            <li><a href={links.whatsapp} target="_blank" rel="noreferrer">{contact.phone}</a></li>
            <li><a href={`mailto:${contact.email}`}>{contact.email}</a></li>
            <li><a href={links.ifood} target="_blank" rel="noreferrer">Pedir no iFood</a></li>
          </ul>
          <h4 className="footer-h-sub">Horário</h4>
          <ul className="footer-hours">{hours.map((h) => <li key={h.label}>{h.label}<b>{h.time}</b></li>)}</ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Café com Leite Gama. Todos os direitos reservados.</p>
        <div>
          <a href="/cardapio-cafe-com-leite.pdf" download>Baixar cardápio (PDF)</a>
          <a href={links.instagram} target="_blank" rel="noreferrer">@cafecomleite_gama</a>
        </div>
      </div>
    </footer>
  )
}
