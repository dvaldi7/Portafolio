import React from 'react'
import { proyectos } from '../data/proyectos'
import { Link } from "react-router-dom"

export const Portafolio = () => {
  return (
    <div className="portafolio" id='portafolio'>

      <h3 className='portafolio-title'>Proyectos</h3>

      {
        proyectos.map(proyectos => {
          return (
          <article key={proyectos.id}>
            <h2>
              <a href={proyectos.url} 
                  target="_blank" 
                  rel="noopener noreferrer">
                    {proyectos.nombre}
              </a>
            </h2>
            <h3>{proyectos.tecnologias}</h3>
            <h3>{proyectos.descripcion}</h3>
          </article>
          );
        })
      }

    </div>
  )
}
