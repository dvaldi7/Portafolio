import React, { useState, useEffect } from 'react'
import fotoCurriculum from "../assets/img/foto-cv.png"
import githubIcon from "../assets/icons/github.png"
import linkedinIcon from "../assets/icons/linkedin.png"
import instagramIcon from "../assets/icons/instagram.png"
import curriculumDV_doc from "../assets/docs/CV-Daniel-Valdivieso-M..pdf"
import curriculumDV_icon from "../assets/icons/cv.png"

export const About = () => {

  const [text, setText] = useState("Hola, soy Valdi");

  useEffect(() => {
    const interval = setInterval(() => {
      setText((prevText) =>
        prevText === "Hola, soy Valdi" ? "Hola, soy Davaldev" : "Hola, soy Valdi"
      );
    }, 4000); 

    return () => clearInterval(interval);
  }, []);


  return (
    <section className='about_me' id='sobreMi'>

      <div className='photo'>
        <img src={fotoCurriculum} alt='Foto-CV' />
      </div>

      <div className='description'>
        <h1 id='typing-text'>{text}...</h1>

        <h3>Y soy <strong>Desarrollador Web</strong>.</h3>

        <p>Soy un <strong>apasionado</strong> de la programación y, aunque
          he descubierto este mundo un poco más tarde, estoy dedicando
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
          y el <strong>esfuerzo</strong>.
        </p>

        {/* GITHUB */}
        <a href="https://github.com/dvaldi7" target="_blank">
          <img src={githubIcon} alt='github icon' />
        </a>

        {/* LINKEDIN */}
        <a href="https://www.linkedin.com/in/danielvaldivieso/" target="_blank">
          <img src={linkedinIcon} alt='linkedin icon' />
        </a>

        {/* INSTAGRAM */}
        <a href="https://www.instagram.com/pollo_en_desarrollo" target="_blank">
          <img src={instagramIcon} alt='instagram icon' />
        </a>
          <span className='CV'>
          {/* DESCARGAR CURRICULUM */}
          <a href={curriculumDV_doc} target="_blank" rel="noopener noreferrer" download="CurriculumDV.pdf">
            <img src={curriculumDV_icon} alt='Descargar Curriculum' title='Curriculum Vitae'/>  
          </a>
          </span>
        {/*icons from Flaticon: https://www.flaticon.com/free-icons"*/}



      </div>

    </section>
  )
}
