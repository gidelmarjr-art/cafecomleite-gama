import './FAQ.css'
import { useState } from 'react'
import Reveal from '../Reveal/Reveal.jsx'
import { Arrow, Chat, Chevron, Sparkles } from '../Icons/Icons.jsx'
import { faqs } from '../../data/faq.js'
import { links, contact } from '../../data/site.js'

export default function FAQ() {
  const [open, setOpen] = useState(0)
  return (
    <section className="faq" id="duvidas">
      <Reveal>
        <span className="faq-badge"><Sparkles size={14} /> FAQ</span>
        <h2>Perguntas <em>frequentes.</em></h2>
        <p className="faq-sub">Respostas rápidas para o que mais perguntam. Não achou a sua? Escreva para <a href={`mailto:${contact.email}`}>{contact.email}</a>.</p>
      </Reveal>
      <Reveal delay={120}>
        <div className="faq-list">
          {faqs.map((f, i) => {
            const isOpen = open === i
            return (
              <div className={`faq-item ${isOpen ? 'open' : ''}`} key={f.q}>
                <h3>
                  <button type="button" className="faq-q" aria-expanded={isOpen} aria-controls={`faq-a-${i}`} id={`faq-q-${i}`} onClick={() => setOpen(isOpen ? null : i)}>
                    {f.q}<Chevron size={20} />
                  </button>
                </h3>
                <div className="faq-a" id={`faq-a-${i}`} role="region" aria-labelledby={`faq-q-${i}`}>
                  <div><p>{f.a}</p></div>
                </div>
              </div>
            )
          })}
        </div>
      </Reveal>
      <Reveal delay={160}>
        <div className="faq-cta">
          <div className="faq-cta-text">
            <span className="faq-cta-icon"><Chat size={18} /></span>
            <div><strong>Ficou com alguma dúvida?</strong><p>Chame a gente no WhatsApp, no horário de funcionamento.</p></div>
          </div>
          <a className="btn btn-red" href={links.whatsapp} target="_blank" rel="noreferrer">Fale com a gente <Arrow size={18} /></a>
        </div>
      </Reveal>
    </section>
  )
}
