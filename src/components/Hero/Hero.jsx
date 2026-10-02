import './Hero.css'
import logoCup from '../../assets/logo-cup.png'
import { Link } from 'react-router-dom'
import { Arrow, Chat } from '../Icons/Icons.jsx'
import { links, hours } from '../../data/site.js'

// Linhas ajustadas para que "começa com café." fique agrupado na segunda linha
const lines = ['Todo encontro', 'começa com <em>café.</em>']

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-copy">
        <p className="eyebrow fade" style={{ '--d': '100ms' }}>CAFETERIA & BISTRÔ · GAMA, DF</p>
        <h1>
          {lines.map((l, i) => (
            <span className="mask" key={i}>
              <span 
                style={{ '--d': `${200 + i * 140}ms` }} 
                dangerouslySetInnerHTML={{ __html: l }} 
              />
            </span>
          ))}
        </h1>
        <p className="hero-description fade" style={{ '--d': '700ms' }}>Cafés especiais, cozinha afetiva e uma mesa esperando por você. Cardápio, horários e pedidos num só lugar.</p>
        <div className="hero-actions fade" style={{ '--d': '850ms' }}>
          <Link to="/cardapio" className="btn btn-red">Ver cardápio <Arrow size={18} /></Link>
          <a href={links.whatsapp} target="_blank" rel="noreferrer" className="btn btn-line"><Chat size={18} /> Pedir pelo WhatsApp</a>
        </div>
        
        {/* Bloco de Horários com quebra a partir do Domingo */}
        <div className="hero-hours-card fade" style={{ '--d': '1000ms' }}>
          <span className="hero-hours-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
          </span>
          <div className="hero-hours-content">
            <span className="hero-hours-title">Horário de Funcionamento</span>
            <span className="hero-hours-text">
              {hours[0]?.label}: {hours[0]?.time} 
              <br />
              {hours[1]?.label}: {hours[1]?.time}
            </span>
          </div>
        </div>

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