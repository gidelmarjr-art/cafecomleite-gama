import './Testimonials.css'
import Reveal from '../Reveal/Reveal.jsx'
import { Sparkles } from '../Icons/Icons.jsx'

export default function Testimonials() {
  const dummyTestimonialData = [
    {
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
      name: "Inês Costa",
      content: "A comida estava deliciosa. As porções são generosas e tem uma ótima apresentação. O atendimento do local também é excelente. A depender do horário fica movimentado e pode haver uma pequena demora na entrega dos pedidos. O ambiente é bastante agradável.",
      rating: 5,
    },
    {
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
      name: "Glecy Lenis",
      content: "Definitivamente o meu café preferido no Gama. Tem um cardápio com variedade maravilhosa. Acho que já fui umas quatro vezes e tudo que pedi estava muito gostoso. Recomendo!!",
      rating: 5,
    },
    {
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
      name: "Rosiane Silva Gabano",
      content: "Já se tornou uma das minhas cafeterias favoritas. Um ambiente acolhedor e agradável, com um brunch impecável: lindo, bem apresentado e extremamente saboroso.Super recomendo a experiência!",
      rating: 5,
    },
  ];

  return (
    <section className="testimonials-section" id="avaliacoes">
      <Reveal>
        <span className="testimonials-badge">
          <Sparkles size={14} /> Avaliações
        </span>
        <h2>O que dizem <em>sobre nós.</em></h2>
        <p className="testimonials-sub">
          O carinho de quem passa por aqui todos os dias é a nossa melhor energia.
        </p>
      </Reveal>

      <Reveal delay={120}>
        <div className="testimonials-grid">
          {dummyTestimonialData.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div>
                <div className="testimonial-stars">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      width="16"
                      height="15"
                      viewBox="0 0 16 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.04894 0.92705C7.3483 0.00573921 8.6517 0.00573969 8.95106 0.92705L10.0206 4.21885C10.1545 4.63087 10.5385 4.90983 10.9717 4.90983H14.4329C15.4016 4.90983 15.8044 6.14945 15.0207 6.71885L12.2205 8.75329C11.87 9.00793 11.7234 9.4593 11.8572 9.87132L12.9268 13.1631C13.2261 14.0844 12.1717 14.8506 11.388 14.2812L8.58778 12.2467C8.2373 11.9921 7.7627 11.9921 7.41221 12.2467L4.61204 14.2812C3.82833 14.8506 2.77385 14.0844 3.0732 13.1631L4.14277 9.87132C4.27665 9.4593 4.12999 9.00793 3.7795 8.75329L0.979333 6.71885C0.195619 6.14945 0.598395 4.90983 1.56712 4.90983H5.02832C5.46154 4.90983 5.8455 4.63087 5.97937 4.21885L7.04894 0.92705Z"
                        fill={i < testimonial.rating ? "var(--orange)" : "#E5E7EB"}
                      />
                    </svg>
                  ))}
                </div>
                <p className="testimonial-content">"{testimonial.content}"</p>
              </div>
              <div>
                <hr className="testimonial-divider" />
                <div className="testimonial-author">
                  <img
                    src={testimonial.image}
                    className="testimonial-avatar"
                    alt={testimonial.name}
                  />
                  <div className="testimonial-info">
                    <h3>{testimonial.name}</h3>
                    <p>{testimonial.title}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}