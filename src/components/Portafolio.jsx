import React from 'react'
import { proyectos } from '../data/proyectos'


export const Portafolio = () => {
  return (
    <div className="portafolio" id='portafolio'>

      <h3 className='portafolio-title'>Proyectos</h3>

      {
        proyectos.map(proyectos => {
          return (
          <article key={proyectos.id}>
            <div className='mask'>
              <img src={"/images/" + proyectos.id + ".png"} 
                    alt='Proyecto-imagen' />
            </div>
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
