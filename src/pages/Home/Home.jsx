import Hero from '../../components/Hero/Hero.jsx'
import Marquee from '../../components/Marquee/Marquee.jsx'
import About from '../../components/About/About.jsx'
import MenuPreview from '../../components/MenuPreview/MenuPreview.jsx'
import Events from '../../components/Events/Events.jsx'
import FAQ from '../../components/FAQ/FAQ.jsx'
import Locations from '../../components/Locations/Locations.jsx'

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee words={['CAFÉ', 'BISTRÔ', 'ENCONTROS', 'DOCES', 'CAFÉ ESPECIAL']} />
      <About />
      <MenuPreview />
      <Marquee reverse words={['CRIANDO LAÇOS', 'E MEMÓRIAS', 'ATRAVÉS DO SABOR']} />
      <Events />
      <FAQ />
      <Locations />
    </>
  )
}
