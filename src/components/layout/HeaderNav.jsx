import React from 'react';

export const HeaderNav = () => {
    return (
        <header className='header'>
            <div className='logo'>
                <span className='span__d'>D</span>
                <span className='span__v'>V</span>

                <h3 className='logo'>Daniel Valdivieso-M.</h3>
            </div>


            <nav>
                <ul>
                    <li>
                        <a href='/inicio'>Inicio</a>
                    </li>
                    <li>
                        <a href='/portafolio'>Portafolio</a>
                    </li>
                    <li>
                        <a href='/contacto'>Contacto</a>
                    </li>
                    <li>
                        <a href='/about'>Sobre mí</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
