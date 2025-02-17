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
                        <a href='/inicio'>Inicio</a>
                    </li>
                    <li>
                        <a href='/portafolio'>Acerca de</a>
                    </li>
                    <li>
                        <a href='/contacto'>Proyectos</a>
                    </li>
                    <li>
                        <a href='/about'>Contacto</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
