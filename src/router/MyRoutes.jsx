import React from 'react';
import { Routes, Route, BrowserRouter, NavLink } from "react-router-dom";
import { Inicio } from '../components/Inicio';
import { Portafolio } from '../components/Portafolio';
import { Contacto } from '../components/Contacto';

export const MyRoutes = () => {
  return (
    <BrowserRouter >
      {/* HEADER Y NAVEGACIÓN */}


      {/* CONTENIDO CENTRAL */}
      <Routes>
        <Route path='/' element={<Inicio/>} />
        <Route path='/inicio' element={<Inicio/>} />
        <Route path='/portafolio' element={<Portafolio/>} />
        <Route path='/contacto' element={<Contacto/>} />
      </Routes>

       {/* FOOTER */}

    </BrowserRouter >
  )
}
