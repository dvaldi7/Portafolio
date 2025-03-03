import './App.css'
import "./responsive.css"
import { About } from './components/About'
import { Contacto } from './components/Contacto'
import { Footer } from './components/layout/Footer'
import { HeaderNav } from './components/layout/HeaderNav'
import { Portafolio } from './components/Portafolio'
import { useLocation } from 'react-router-dom'
import React, { useEffect } from 'react';

function App() {
  
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div className='layout'>

      {/* HEADER Y NAV */}
      <HeaderNav />

      {/* BODY/CONTENIDO CENTRAL */}
      <section className='content'>
        <About />
        <hr />
        <Portafolio />
        <hr />
        <Contacto />
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  )
}

export default App
