import React from 'react'
import fotoCurriculum from "../assets/img/foto-cv.png"
import githubIcon from "../assets/icons/github.png"

export const About = () => {
  return (
    <section className='about_me'>

      <div className='photo'>
        <img src={fotoCurriculum} alt='Foto-CV' />
      </div>

      <div className='description'>
        <h1>Hola, soy Valdi</h1>

        <h3>Y soy <strong>Desarrollador Web</strong></h3>

        <p>Soy un <strong>apasionado</strong> de la programación y, aunque
          ha descubierto este mundo un poco más tarde, estoy dedicando
          todo mi tiempo y <strong>esfuerzo</strong> a alcanzar la meta de ser un profesional del sector
          con <strong>constancia y determinación</strong>. Actualmente, estoy cursando una FP en
          Desarrollo de Aplicaciones Web para obtener el título
          oficial, pero mi enfoque principal sigue siendo el
          aprendizaje autodidacta.
        </p>
        <p>
          Mi objetivo: aportar valor en proyectos de desarrollo web y
          seguir mejorando cada día en este camino. Me caracterizo por
          mi <strong>perseverancia</strong>, mi capacidad para aprender de manera
          independiente y de <strong>trabajar en equipo</strong>, y estoy decidido a abrirme paso en este
          sector a través del compromiso, la <strong>pasión</strong> por el desarrollo
          y el <strong>esfuerzo</strong>
        </p>

        <a href="https://github.com/dvaldi7" title="github">
          <img src={githubIcon} alt='github icon' />
        </a>

      </div>

    </section>
  )
}
