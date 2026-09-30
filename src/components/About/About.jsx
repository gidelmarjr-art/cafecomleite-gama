import './About.css'
import Reveal from '../Reveal/Reveal.jsx'
import CountUp from '../CountUp/CountUp.jsx'
import { stats, methods, links } from '../../data/site.js'

export default function About() {
  return (
    <section className="about" id="casa">
      <Reveal className="about-head">
        <p className="eyebrow">A NOSSA CASA</p>
        <h2>Café é desculpa pra <em>ficar.</em></h2>
        <p>Com mais de cinco anos de história, o Café com Leite foi a primeira casa a levar a cultura dos cafés especiais ao Gama. Receitas caseiras, ambiente de vizinhança e o jornal do dia à mesa. Uma casa de Janine Nessralla e Diego Emanohel.</p>
        <a className="text-link" href={links.interview} target="_blank" rel="noreferrer">Assistir à entrevista “Negócio dos Sonhos” →</a>
      </Reveal>
      <ul className="stats">
        {stats.map((s, i) => (
          <Reveal as="li" key={s.label} delay={i * 100}><strong><CountUp to={s.value} suffix={s.suffix} /></strong><span>{s.label}</span></Reveal>
        ))}
      </ul>
      <div className="methods">
        {methods.map((m, i) => (
          <Reveal className="method" key={m.name} delay={i * 120}><b>0{i + 1}</b><h3>{m.name}</h3><p>{m.desc}</p></Reveal>
        ))}
      </div>
    </section>
  )
}
