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
  { name: 'HTML', src: htmlIcon, className: 'html-item' },
  { name: 'CSS', src: cssIcon, className: 'css-item' },
  { name: 'JavaScript', src: jsIcon, className: 'js-item' },
  { name: 'React', src: reactIcon, className: 'react-item' },
  { name: 'Tailwind', src: tailwindIcon, className: 'tailwind-item' },
  { name: 'Node', src: nodeIcon, className: 'node-item' },
  { name: 'GitHub', src: gitHubIcon, className: 'github-item' },
  { name: 'Git', src: gitIcon, className: 'git-item' },
  { name: 'MongoDB', src: mongoDBIcon, className: 'mongodb-item' },
  { name: 'MySql', src: mySqlIcon, className: 'mysql-item' },
  { name: 'Postman', src: postmanIcon, className: 'postman-item' },
  { name: 'Vite', src: viteIcon, className: 'vite-item' },
];

export const Tecnologias = () => {

    const duplicatedLogos = [...techLogos, ...techLogos, ...techLogos];

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

            <div className='carousel-names'>
                {techLogos.map((tech) => (

                    <div key={tech.name} className={`tech-names ${tech.className}`}>
                        <p> {tech.name} </p>
                    </div>
                ))}
            </div>

        </div>
    );
};