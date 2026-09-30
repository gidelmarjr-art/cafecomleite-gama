import './Hero.css'
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
        <svg className="cup" viewBox="0 0 300 300">
          <path className="steam s1" d="M115 95c-12-16 12-28 0-46" />
          <path className="steam s2" d="M150 95c-12-16 12-28 0-46" />
          <path className="steam s3" d="M185 95c-12-16 12-28 0-46" />
          <path d="M82 118h136v52a68 60 0 0 1-136 0Z" fill="var(--paper)" />
          <path d="M218 132h14a24 24 0 0 1 0 48h-22" fill="none" stroke="var(--paper)" strokeWidth="12" />
          <ellipse cx="150" cy="118" rx="68" ry="12" fill="#5a3a2a" />
          <ellipse cx="150" cy="248" rx="112" ry="16" fill="var(--bg)" opacity=".35" />
          <ellipse cx="150" cy="238" rx="100" ry="14" fill="var(--yellow)" />
        </svg>
        <svg className="badge" viewBox="0 0 200 200">
          <defs><path id="c" d="M100 100m-78 0a78 78 0 1 1 156 0a78 78 0 1 1-156 0" /></defs>
          <text><textPath href="#c">CAFÉ COM LEITE · GAMA · DF · DESDE SEMPRE ·</textPath></text>
        </svg>
      </div>
    </section>
  )
}
