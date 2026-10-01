import './MenuSheet.css'
import Reveal from '../Reveal/Reveal.jsx'
import Block from '../MenuBlocks/MenuBlocks.jsx'
import logo from '../../assets/logo-cafe-com-leite.png'

// Uma "folha" do cardápio, como cada página do PDF.
export default function MenuSheet({ id, blocks }) {
  return (
    <article className="sheet" id={id}>
      {blocks.map((b, i) => <Reveal key={i} delay={Math.min(i, 4) * 60}><Block b={b} /></Reveal>)}
      <footer className="sheet-foot">
        <p>Criando <em>laços</em> e <em>memórias</em><br />através do sabor.</p>
        <img src={logo} alt="Café com Leite"  />
      </footer>
    </article>
  )
}
