import React from 'react'



export const Contacto = () => {
  return (
    <div>
      <h3 className='contact_name'>Contacto</h3>

      <form className='contact' action="mailto:dvaldi7@gmail.com">
        <input type='text' placeholder='Nombre' />
        <input type='text' placeholder='Apellido' />
        <input type='email' placeholder='Email' />
        <textarea placeholder='Motivo del contacto' />
        <input type='submit' value="Enviar" />
      </form>
      
    </div>


  )
}
