import Hero from '../../components/Hero/Hero.jsx'
import Marquee from '../../components/Marquee/Marquee.jsx'
import About from '../../components/About/About.jsx'
import MenuPreview from '../../components/MenuPreview/MenuPreview.jsx'
import Testimonials from '../../components/Testimonials/Testimonials.jsx'
import Events from '../../components/Events/Events.jsx'
import Contact from '../../components/Contact/Contact.jsx' // Importe o componente de contato
import FAQ from '../../components/FAQ/FAQ.jsx'
import Locations from '../../components/Locations/Locations.jsx'

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee words={['CAFÉ', 'BISTRÔ', 'ENCONTROS', 'DOCES', 'CAFÉ ESPECIAL']} />
      <About />
      <MenuPreview />
      <Testimonials />
      <Marquee reverse words={['CRIANDO LAÇOS', 'E MEMÓRIAS', 'ATRAVÉS DO SABOR']} />
      <Events />
      
      {/* Seção de Contato (destacando iFood e Instagram) logo antes do FAQ */}
      <Contact />

      <FAQ />
      <Locations />
    </>
  )
}