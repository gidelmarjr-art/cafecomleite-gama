import './MenuPreview.css'
import { Link } from 'react-router-dom'
import Reveal from '../Reveal/Reveal.jsx'
import { Arrow } from '../Icons/Icons.jsx'
import { menuCategories } from '../../data/menu.js'

export default function MenuPreview() {
  const featured = menuCategories.flatMap((c) => c.items.filter((i) => i.featured).map((i) => ({ ...i, cat: c.title })))
  return (
    <section className="preview" id="destaques">
      <Reveal className="preview-head">
        <p className="eyebrow">DESTAQUES DA CASA</p>
        <h2>Gostos que <em>ficam.</em></h2>
      </Reveal>
      <ul className="preview-list">
        {featured.map((f, i) => (
          <Reveal as="li" key={f.name} delay={i * 60}>
            <Link to="/cardapio"><span className="n">{String(i + 1).padStart(2, '0')}</span><strong>{f.name}</strong><em>{f.cat}</em><Arrow size={22} /></Link>
          </Reveal>
        ))}
      </ul>
      <Reveal><Link to="/cardapio" className="btn btn-yellow">Ver cardápio completo <Arrow size={18} /></Link></Reveal>
    </section>
  )
}
