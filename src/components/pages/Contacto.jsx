import React, { useState } from 'react';

const Contacto = () => {
  const [motivo, setMotivo] = useState('');
  // const [archivo, setArchivo] = useState(null);
  const [enviado, setEnviado] = useState(false); // Estado para manejar el mensaje de éxito

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target); // Crea un objeto FormData con los datos del formulario

    fetch('https://formspree.io/f/{tu_form_id}', { // Reemplaza con tu URL de Formspree
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json', // Aceptar respuesta en JSON
      },
    })
      .then((response) => {
        if (response.ok) {
          setEnviado(true); // Marca el formulario como enviado
          e.target.reset(); // Reinicia el formulario
        } else {
          throw new Error('Error en el envío del formulario');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const handleArchivoChange = (e) => {
    setArchivo(e.target.files[0]); // Guarda el archivo seleccionado
  };

  return (

    <div className="contacto">
      <h1>Contacto</h1>
      <p>Déjanos tu mensaje y nos pondremos en contacto contigo a la brevedad posible.</p>

      {/* Mensaje de éxito */}
      {enviado && <p>Tu mensaje ha sido enviado correctamente. Gracias por contactarnos!</p>} 

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" name="nombre" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>

        <div className="form-group">
          <label htmlFor="motivo">Motivo de Contacto:</label>
          <select id="motivo" name="motivo" value={motivo} onChange={(e) => setMotivo(e.target.value)} required>
            <option value="">Selecciona un motivo</option>
            <option value="proveedores">Proveedores</option>
            <option value="quejas">Reclamaciones</option>
            <option value="cv">Empleo</option>
          </select>
        </div>
        
        <div className="form-group">
          <label htmlFor="archivo">Subir archivo:</label>
          <input type="file" id="cv" name="cv" accept=".pdf,.doc,.docx,.png,.jpeg" onChange={handleArchivoChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="mensaje">Mensaje:</label>
          <textarea id="mensaje" name="mensaje" rows="4" required></textarea>
        </div>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Contacto;