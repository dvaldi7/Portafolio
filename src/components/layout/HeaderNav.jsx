import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const HeaderNav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <header className='header'>
                <div className='logo'>
                    <div className='marca'>
                        <span className='span__d'>D</span>
                        <span className='span__v'>V</span>
                    </div>
                    <h3 className='logo'>Daniel Valdivieso-M.</h3>
                </div>

                {/* Botón de hamburguesa */}
                 <div className={`hamburger-menu ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <div className='bar'></div>
                    <div className='bar'></div>
                    <div className='bar'></div>
                </div>

            
                <nav className={menuOpen ? 'menu-open' : ''}>
                    <ul>
                        <li>
                            <Link to="/#inicio" onClick={toggleMenu}>Inicio</Link>
                        </li>
                        <li>
                            <Link to="/#sobreMi" onClick={toggleMenu}>Sobre mí</Link>
                        </li>
                        <li>
                            <Link to="/#portafolio" onClick={toggleMenu}>Proyectos</Link>
                        </li>
                        <li>
                            <Link to="/#tecnologias" onClick={toggleMenu}>Tecnologías</Link>
                        </li>
                        <li>
                            <Link to="/#contacto" onClick={toggleMenu}>Contacto</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            {/* Overlay con blur que se mostrará solo cuando el menú esté abierto */}
            {menuOpen && <div className="overlay" onClick={toggleMenu}></div>}
        </>
    );
};