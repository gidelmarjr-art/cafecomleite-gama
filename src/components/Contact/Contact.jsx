import './Contact.css'
import Reveal from '../Reveal/Reveal.jsx'
import { Arrow, Chat, Sparkles } from '../Icons/Icons.jsx'
import { links } from '../../data/site.js'

// Importação correta dos assets para o Vite empacotar e funcionar no Vercel
import croissantImg from '../../assets/menu/croissants.webp'
import matchaImg from '../../assets/menu/matcha-latte.webp'
import panquecaImg from '../../assets/menu/panqueca-americanas.webp'
import waffleImg from '../../assets/menu/waffles-com-sorvete.webp'

export default function Contact() {
  const showcasePhotos = [
    { src: croissantImg, title: 'Croissants Recheados' },
    { src: matchaImg, title: 'Matcha Latte' },
    { src: panquecaImg, title: 'Panquecas' },
    { src: waffleImg, title: 'Waffles com Sorvete' },
  ]

  return (
    <section className="contact-section" id="contato">
      <div className="contact-container">
        
        {/* Coluna da Esquerda: Textos e Chamadas */}
        <Reveal>
          <div className="contact-content">
            <span className="contact-badge">
              <Sparkles size={14} /> PEDIDOS E REDES SOCIAIS
            </span>
            <h2>O dia a dia e o sabor <em>estão online.</em></h2>
            <p className="contact-sub">
              Acompanha as novidades e bastidores pelo nosso Instagram ou pede os teus favoritos diretamente no iFood para receber em casa.
            </p>

            <div className="contact-buttons">
              <a 
                className="btn-contact btn-ifood" 
                href={links.ifood} 
                target="_blank" 
                rel="noreferrer"
              >
                <Chat size={16} /> Pedir no iFood <Arrow size={14} />
              </a>

              <a 
                className="btn-contact btn-instagram" 
                href={links.instagram || "https://instagram.com"} 
                target="_blank" 
                rel="noreferrer"
              >
                <Sparkles size={16} /> Seguir no Instagram <Arrow size={14} />
              </a>
            </div>
          </div>
        </Reveal>

        {/* Coluna da Direita: As 4 fotos em grade moderna */}
        <Reveal delay={150}>
          <div className="contact-photos-grid">
            {showcasePhotos.map((photo, index) => (
              <div className="contact-photo-card" key={index}>
                <img src={photo.src} alt={photo.title} />
                <div className="contact-photo-caption">{photo.title}</div>
              </div>
            ))}
          </div>
        </Reveal>

      </div>
    </section>
  )
}