import React, { useState } from 'react';
import { Pizzas } from '../data/carta/pizzas';
import { Ensaladas } from '../data/carta/ensaladas';
import './pages.css';

const Carta = () => {

  const [categoria, setCategoria] = useState('pizzas'); 

  const handleCategoriaChange = (nuevaCategoria) => {
    setCategoria(nuevaCategoria);
  };

  const renderItems = () => {

    if (categoria === 'pizzas') {
      return Pizzas.map((pizza) => (
        <div key={pizza.id} className="item">
          <h3>{pizza.name}</h3>
          <p>{pizza.description}</p>
          <p>Precio: {pizza.price} €</p>
        </div>
      ));

    } else if (categoria === 'ensaladas') {
      return Ensaladas.map((ensalada) => (
        <div key={ensalada.id} className="item">
          <h3>{ensalada.name}</h3>
          <p>{ensalada.description}</p>
          <p>Precio: {ensalada.price} €</p>
        </div>
      ));
    }

    return null;
  };

  return (
    <div className="carta">

      <div className="logo">
        <img src={require('../assets/images/logo-home.png')} alt="Logo" />
      </div>
      
      <h2>Nuestra Carta</h2>
      <div className="categorias">
        <button onClick={() => handleCategoriaChange('pizzas')}>Pizzas</button>
        <button onClick={() => handleCategoriaChange('ensaladas')}>Ensaladas</button>
        {/* Puedes agregar más botones para otras categorías aquí */}
      </div>
      <div className="items-container">
        {renderItems()}
      </div>
    </div>
  );
};

export default Carta;
