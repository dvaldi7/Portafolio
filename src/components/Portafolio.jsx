import React from 'react'
import { proyectos } from '../data/proyectos'

export const Portafolio = () => {
  return (
    <div>

      <h3>Portafolio</h3>

      {
        proyectos.map(proyectos => {
          {console.log(proyectos)}
          <article>
            <h2>{proyectos.nombre}</h2>
          </article>
        })
      }

    </div>
  )
}
