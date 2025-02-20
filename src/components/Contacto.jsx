import React from 'react'



export const Contacto = () => {
  return (
    <div>
      <h3>Contacto</h3>

      <form className='contact' action="mailto:dvaldi7@gmail.com">
        <input type='text' placeholder='Nombre' />
        <input type='text' placeholder='Apellido' />
        <input type='email' placeholder='Email' />
        <input type='textarea' placeholder='Motivo del contacto' />
        <div className='mail'>
          <input type='text' placeholder='dvaldi7@gmail.com' />
          <input type='submit' value="Enviar" />
        </div>
      </form>


    </div>


  )
}
