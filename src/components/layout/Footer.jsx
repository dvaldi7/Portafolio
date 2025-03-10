import React from 'react'
import reactLogo from "../../assets/icons/react.svg"

export const Footer = () => {
    return (
        <footer className='footer'>
            Daniel Valdivieso-M. 2025 - Hecho con React
            <span className='react_logo'>
                <a href='https://react.dev/'>
                    <img src={reactLogo} alt='React-logo' />
                </a>
            </span>
        </footer>
    )
}
