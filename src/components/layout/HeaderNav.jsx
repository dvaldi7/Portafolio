import React from 'react';

export const HeaderNav = () => {
    return (
        <header className='header'>
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
                        <a href='#'>Inicio</a>
                    </li>
                    <li>
                        <a href='#sobreMi'>Sobre mí</a>
                    </li>
                    <li>
                        <a href='#proyectos'>Proyectos</a>
                    </li>
                    <li>
                        <a href='#contacto'>Contacto</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
