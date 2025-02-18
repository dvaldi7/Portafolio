import React from 'react'
import fotoCurriculum from "../assets/img/foto-cv.png"

export const About = () => {
  return (
    <section className='about_me'>

      <div className='photo'>
        <img src={fotoCurriculum} alt='Foto-CV' />
      </div>

      <div className='description'>
        <h1>Hola, soy Valdi</h1>

        <p>Soy un apasionado de la programación que, aunque
          descubrí este mundo un poco más tarde, estoy dedicando
          todo mi tiempo y esfuerzo a alcanzarlo con constancia
          y determinación. Actualmente, estoy cursando una FP en
          Desarrollo de Aplicaciones Web para obtener el título
          oficial, pero mi enfoque principal sigue siendo el
          aprendizaje autodidacta. La programación me ha fascinado
          desde el primer momento, y con esfuerzo y entusiasmo,
          estoy construyendo las habilidades necesarias para
          convertirme en desarrollador web.

          Mi objetivo es aportar valor en proyectos de desarrollo web y
          seguir mejorando cada día en este camino. Me caracterizo por
          mi perseverancia y capacidad para aprender de manera
          independiente, y estoy decidido a abrirme paso en este
          sector a través del compromiso y la pasión que siento
          por la tecnología.</p>
      </div>

    </section>
  )
}
