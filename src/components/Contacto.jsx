import React, { useState } from 'react';

export const Contacto = () => {
  const [enviado, setEnviado] = useState(false);
  const [copiado, setCopiado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setEnviado(true);
    setTimeout(() => setEnviado(false), 5000);
  };

  // Función para copiar el correo al portapapeles
  const copiarCorreo = () => {
    const correo = "dvaldi7@gmail.com";
    navigator.clipboard.writeText(correo) // Copia el texto al portapapeles
      .then(() => {
        setCopiado(true);
        setTimeout(() => setCopiado(false), 5000);
      })
      .catch((error) => {
        console.error("Error al copiar el correo: ", error);
      });
  };

  return (
    <div>
      <h3 className='contact_name' id='contacto'>Contacto</h3>

      {/* Formulario de contacto */}
      <form className='contact' action="mailto:dvaldi7@gmail.com" onSubmit={handleSubmit}>
        <input type='text' placeholder='Nombre' />
        <input type='text' placeholder='Apellido' />
        <input type='email' placeholder='Email' />
        <textarea placeholder='Motivo del contacto' />
        <input type='submit' value={enviado ? "¡Enviado!" : "Enviar"} />
      </form>

      {/* Copiar correo */}
      <div className="correo-alternativo">
        <p>
          *Si lo prefieres, puedes copiar mi correo directamente :{" "}
        </p>

        <button className='correo-alternativo-btn' onClick={copiarCorreo}>
          {copiado ? "¡Correo copiado!" : "Copiar correo"}
        </button>
      </div>

    </div>
  );
};