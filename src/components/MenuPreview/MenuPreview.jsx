import './MenuPreview.css'
import { Link } from 'react-router-dom'
import Reveal from '../Reveal/Reveal.jsx'
import MenuSheet from '../MenuSheet/MenuSheet.jsx'
import { Arrow } from '../Icons/Icons.jsx'
import { menuPages } from '../../data/menu.js'

// Prévia do cardápio: mostra o começo da primeira folha com um desfoque embaixo.
// Para mostrar mais ou menos conteúdo, ajuste slice() e a altura em MenuPreview.css.
export default function MenuPreview() {
  const blocks = menuPages[0].blocks.slice(0, 2)
  return (
    <section className="preview" id="destaques">
      <Reveal className="preview-head">
        <p className="eyebrow">DESTAQUES DA CASA</p>
        <h2>Gostos que <em>ficam.</em></h2>
      </Reveal>
      <Reveal delay={120}>
        <Link to="/cardapio" className="preview-card" aria-label="Ver o cardápio completo">
          <div className="preview-sheet" aria-hidden="true"><MenuSheet blocks={blocks} /></div>
          <div className="preview-fade" />
          <span className="btn btn-red preview-btn">Ver cardápio completo <Arrow size={18} /></span>
        </Link>
      </Reveal>
    </section>
  )
}
