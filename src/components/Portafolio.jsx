import React from 'react'
import { proyectos } from '../data/proyectos'
import { iconosTecnologias } from "../data/tecnologias"



export const Portafolio = () => {
  return (
    <div className="portafolio" id='portafolio'>

      <h3 className='portafolio-title'>Proyectos</h3>

      <section className='works'>
        {
          proyectos.map(proyectos => {
            return (
              <article key={proyectos.id} className='project-item'>
                <div className='mask'>
                  <img src={`/images/${proyectos.id}.png`}
                    alt={`imagen del proyecto ${proyectos.nombre}`} />
                </div>

                <div className='project-info'>
                  <h2 className='project-url'>
                    <a href={proyectos.url}
                      target="_blank"
                      rel="noopener noreferrer">
                      {proyectos.nombre}
                    </a>
                  </h2>

                  <h3 className='project-desc'>{proyectos.descripcion}</h3>
                  
                  <h3 className="project-tech">
                    {proyectos.tecnologias.split(", ").map((tecnologia, index) => (
                        <img
                          src={iconosTecnologias[tecnologia]} key={index}
                          className="tech-icon" alt={tecnologia}
                          title={tecnologia}
                        />
                    ))}
                  </h3>

                </div>
              </article>
            );
          })
        }
      </section>

    </div>
  )
}
