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
        <iframe className="map-frame" title={`Mapa: ${u.title}`} src={u.embed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
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
