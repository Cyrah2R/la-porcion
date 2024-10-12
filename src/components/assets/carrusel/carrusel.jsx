import React, { useState } from 'react';
import { fotos } from '../../data/fotos';
import './carrusel.css';

const Carrusel = () => {
  const [id, setId] = useState(0);

  const siguiente = () => {
    setId((prev) => (prev + 1) % fotos.length);
  };

  const anterior = () => {
    setId((prev) => (prev - 1 + fotos.length) % fotos.length);
  };

  return (
    <div className='carrusel'>
      <div className='contenedor-fotos'>
        <img src={require(`../images/${fotos[id].id}.jpg`)} alt={`foto ${id + 1}`} />
      </div>

      <div className='flechas-contenedor'>
        <button className='flecha' onClick={anterior}>←</button>
        <button className='flecha' onClick={siguiente}>→</button>
      </div>
    </div>
  );
};

export default Carrusel;
