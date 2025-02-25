import React from 'react';
import { Link } from 'react-router-dom';

export const HeaderNav = () => {
    return (
        <header className='header' id='inicio'>
            <div className='logo'>
                <div className='marca'>
                    <span className='span__d'>D</span>
                    <span className='span__v'>V</span>
                </div>
                <h3 className='logo'>Daniel Valdivieso-M.</h3>
            </div>


            <nav>
                <ul>
                <li>
                        <Link to="/#inicio">Inicio</Link> 
                    </li>
                    <li>
                        <Link to="/#sobreMi">Sobre mí</Link> 
                    </li>
                    <li>
                        <Link to="/#portafolio">Proyectos</Link> 
                    </li>
                    <li>
                        <Link to="/#contacto">Contacto</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
