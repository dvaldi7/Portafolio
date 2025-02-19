import './App.css'
import { About } from './components/About'
import { Contacto } from './components/Contacto'
import { Footer } from './components/layout/Footer'
import { HeaderNav } from './components/layout/HeaderNav'
import { Portafolio } from './components/Portafolio'

function App() {


  return (
    <div className='layout'>

      {/* HEADER Y NAV */}
      <HeaderNav />

      {/* BODY/CONTENIDO CENTRAL */}
      <section className='content'>
        <About />
        <hr/>
        <Contacto />
        <hr/>
        <Portafolio />

      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  )
}

export default App
