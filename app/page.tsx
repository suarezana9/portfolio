import Nav         from './components/nav/Nav'
import Hero        from './components/hero/Hero'
import Stats       from './components/stats/Stats'
import Expertise   from './components/expertise/Expertise'
import Sistemas    from './components/sistemas/Sistemas'
import Proyectos   from './components/proyectos/Proyectos'
import Stack       from './components/stack/Stack'
import Proceso     from './components/proceso/Proceso'
import Experiencia from './components/experiencia/Experiencia'
import Contacto    from './components/contacto/Contacto'
import Footer      from './components/footer/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Stats />
        <Expertise />
        <Sistemas />
        <Proyectos />
        <Stack />
        <Proceso />
        <Experiencia />
        <Contacto />
      </main>
      <Footer />
    </>
  )
}
