import React from 'react';
import htmlIcon from "../assets/icons/htmlIcon.png";
import cssIcon from "../assets/icons/cssIcon.png";
import jsIcon from "../assets/icons/jsIcon.png";
import reactIcon from "../assets/icons/reactIcon.png";
// Asegúrate de que este import es correcto y que iconosTecnologias
// no es necesario si lo vas a definir localmente.

// Definimos los iconos en un formato de array de objetos para facilitar el mapeo.
const techLogos = [
    { name: 'HTML', src: htmlIcon },
    { name: 'CSS', src: cssIcon },
    { name: 'JavaScript', src: jsIcon },
    { name: 'React', src: reactIcon },
];

export const Tecnologias = () => {
    // Duplicamos el array de logos para el efecto de bucle infinito
    const duplicatedLogos = [...techLogos, ...techLogos, ...techLogos, ...techLogos, ...techLogos, ...techLogos ];

    return (
        <div className="carousel-container">

            <h3 className='carousel_name'>Tecnologías</h3>

            <div className="carousel-track">

                {duplicatedLogos.map((tech, index) => (
                    // Usamos la propiedad `src` y `name` del objeto `tech`
                    <div key={index} className="tech-item">
                        <img src={tech.src} alt={`${tech.name} Logo`} className="tech-logo" />

                    </div>
                ))}
            </div>
        </div>
    );
};