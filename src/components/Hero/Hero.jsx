import './Hero.css'
import logoCup from '../../assets/logo-cup.png'
import { Link } from 'react-router-dom'
import { Arrow, Chat } from '../Icons/Icons.jsx'
import { links, hours } from '../../data/site.js'

const lines = ['Todo encontro', 'começa com', 'café.']

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-copy">
        <p className="eyebrow fade" style={{ '--d': '100ms' }}>CAFETERIA & BISTRÔ · GAMA, DF</p>
        <h1>{lines.map((l, i) => <span className="mask" key={l}><span style={{ '--d': `${200 + i * 140}ms` }}>{i === 2 ? <em>{l}</em> : l}</span></span>)}</h1>
        <p className="hero-description fade" style={{ '--d': '700ms' }}>Cafés especiais, cozinha afetiva e uma mesa esperando por você. Cardápio, horários e pedidos num só lugar.</p>
        <div className="hero-actions fade" style={{ '--d': '850ms' }}>
          <Link to="/cardapio" className="btn btn-red">Ver cardápio <Arrow size={18} /></Link>
          <a href={links.whatsapp} target="_blank" rel="noreferrer" className="btn btn-line"><Chat size={18} /> Pedir pelo WhatsApp</a>
        </div>
        <p className="hero-hours fade" style={{ '--d': '1000ms' }}>{hours.map((h) => `${h.label} ${h.time}`).join('  ·  ')}</p>
      </div>
      <div className="hero-art" aria-hidden="true">
        <div className="sun" />
        <img className="cup" src={logoCup} alt="" />
        <svg className="badge" viewBox="0 0 200 200">
          <defs><path id="ring" d="M100 100m-91 0a91 91 0 1 1 182 0a91 91 0 1 1-182 0" /></defs>
          <text><textPath href="#ring" textLength="562" lengthAdjust="spacing">CAFÉ COM LEITE · GAMA · DF · DESDE SEMPRE · </textPath></text>
        </svg>
      </div>
    </section>
  )
}
