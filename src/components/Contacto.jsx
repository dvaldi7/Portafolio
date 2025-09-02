import React, { useState } from 'react';

export const Contacto = () => {
  const [enviado, setEnviado] = useState(false);
  const [copiado, setCopiado] = useState(false);

  const handleSubmit = (e) => {
    setEnviado(true);
    setTimeout(() => setEnviado(false), 3000);
  };

  // Función para copiar el correo al portapapeles
  const copyEmail = () => {
    const email = "dvaldi7@gmail.com";
    navigator.clipboard.writeText(email)
      .then(() => {
        setCopiado(true);
        setTimeout(() => setCopiado(false), 3000);
      })
      .catch((error) => {
        console.error("Error al copiar el email: ", error);
      });
  };

  return (
    <div id='contacto'>
      <h3 className='contact_name'>Contacto</h3>

      {/* Formulario de contacto */}
      <form
        className='contact'
        action="https://formspree.io/f/xnnzyqqv"
        method="POST"
        onSubmit={handleSubmit}
      >
        <input 
          type='text' 
          name="nombre"
          placeholder='Nombre'
          id='input-nombre'
          autoComplete="name"
          required
        />
        <input
          type='text'
          name="apellido"
          placeholder='Apellido'
          id='input-apellido'
          autoComplete="family-name"
        />
        <input
          type='email'
          name="email"
          placeholder='Email'
          id='input-email'
          autoComplete="email"
          required
        />
        <textarea
          name="mensaje"
          placeholder='Motivo del contacto'
          id='textarea-motivoContacto'
          required
        />
        <input type='submit' value={enviado ? "¡Enviado!" : "Enviar"} />
      </form>

      {/* Copiar correo */}
      <div className="correo-alternativo">
        <p>
          *Si lo prefieres, puedes copiar mi email directamente:
        </p>

        <button className='correo-alternativo-btn' onClick={copyEmail}>
          {copiado ? "¡Email copiado!" : "Copiar email"}
        </button>
      </div>

    </div>
  );
};
