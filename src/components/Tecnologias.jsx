import React from 'react';
import htmlIcon from "../assets/icons/htmlIcon.png";
import cssIcon from "../assets/icons/cssIcon.png";
import jsIcon from "../assets/icons/jsIcon.png";
import reactIcon from "../assets/icons/reactIcon.png";
import gitHubIcon from "../assets/icons/github.png";
import nodeIcon from "../assets/icons/nodejs.png"
import gitIcon from "../assets/icons/git.png"
import mongoDBIcon from "../assets/icons/mongodb.svg"
import mySqlIcon from "../assets/icons/mysql.png"
import postmanIcon from "../assets/icons/postman.svg"
import viteIcon from "../assets/icons/vite.svg"
import tailwindIcon from "../assets/icons/tailwind.svg"

const techLogos = [
    { name: 'HTML', src: htmlIcon },
    { name: 'CSS', src: cssIcon },
    { name: 'JavaScript', src: jsIcon },
    { name: 'React', src: reactIcon },
    { name: 'Tailwind', src: tailwindIcon },
    { name: 'Node', src: nodeIcon },
    { name: 'GitHub', src: gitHubIcon },
    { name: 'Git', src: gitIcon },
    { name: 'MongoDB', src: mongoDBIcon },
    { name: 'MySql', src: mySqlIcon },
    { name: 'Postman', src: postmanIcon },
    { name: 'Vite', src: viteIcon },
];

export const Tecnologias = () => {

    const duplicatedLogos = [...techLogos, ...techLogos, ...techLogos, ...techLogos, ...techLogos, ...techLogos];

    return (
        <div className="carousel-container">

            <h3 className='carousel_name'>Tecnologías</h3>

            <div className="carousel-track">

                {duplicatedLogos.map((tech, index) => (
                    
                    <div key={index} className="tech-item">
                        <img src={tech.src} alt={`${tech.name} Logo`} className="tech-logo" />

                    </div>
                ))}
            </div>
        </div>
    );
};