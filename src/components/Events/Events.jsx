import './Events.css'
import Reveal from '../Reveal/Reveal.jsx'
import { events } from '../../data/site.js'

export default function Events() {
  return (
    <section className="events">
      <Reveal><p className="eyebrow">ALÉM DO CAFÉ</p><h2>Arte, conversa e <em>encontro.</em></h2></Reveal>
      <div className="event-grid">
        {events.map((e, i) => <Reveal className="event" key={e.name} delay={i * 90}><h3>{e.name}</h3><p>{e.desc}</p></Reveal>)}
      </div>
    </section>
  )
}
