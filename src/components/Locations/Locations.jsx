import './Locations.css'
import Reveal from '../Reveal/Reveal.jsx'
import { Arrow, Pin, Chat } from '../Icons/Icons.jsx'
import { units, hours, links } from '../../data/site.js'

export default function Locations() {
  const u = units[0]
  return (
    <section className="locations" id="localizacao">
      <Reveal><p className="eyebrow">VEM TOMAR UM CAFÉ</p><h2>Nos encontre <em>aqui.</em></h2></Reveal>
      <Reveal className="location-solo" delay={120}>
        <iframe 
          className="map-frame" 
          title={`Mapa: ${u.title}`} 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15340.61925987411!2d-48.06152509227822!3d-16.00545441342025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9359810afdf7cf8d%3A0xd3744e8a70b10141!2sCaf%C3%A9%20com%20Leite!5e0!3m2!1spt-BR!2sbr!4v1790907772774!5m2!1spt-BR!2sbr" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade" 
        />
        <div className="location-info">
          <h3>{u.title}</h3>
          <p>{u.address}</p>
          {hours.map((h) => <p className="location-details" key={h.label}>{h.label} · {h.time}</p>)}
          <div className="actions">
            <a className="btn btn-red" href={u.map} target="_blank" rel="noreferrer"><Pin size={18} /> Como chegar <Arrow size={16} /></a>
            <a className="btn btn-line" href={links.whatsapp} target="_blank" rel="noreferrer"><Chat size={18} /> WhatsApp</a>
            <a className="btn btn-line" href={links.ifood} target="_blank" rel="noreferrer">iFood <Arrow size={16} /></a>
          </div>
        </div>
      </Reveal>
    </section>
  )
}