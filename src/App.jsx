import './App.css'
import { About } from './components/About'
import { Contacto } from './components/Contacto'
import { Footer } from './components/layout/Footer'
import { HeaderNav } from './components/layout/HeaderNav'
import { Portafolio } from './components/Portafolio'

function App() {
  

  return (
    <div className='layout'>

      <HeaderNav />

      <About />

      <Contacto />

      <Portafolio />

      <Footer />
    </div>
  )
}

export default App
