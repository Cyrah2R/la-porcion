import React, { useState } from 'react';
import Icono from '../assets/iconos';
import { Pizzas } from '../data/carta/pizzas';
import { Link } from 'react-router-dom';
import './pages.css';

const Carta = () => {
  const [categoria, setCategoria] = useState(null);
  const [subcategoria, setSubcategoria] = useState(null);

  const categorias = [
    { nombre: 'Pizzas', key: 'pizzas' },
    { nombre: 'Burguers', key: 'burguers' },
    { nombre: 'Bocadillos', key: 'bocadillos' },
    { nombre: 'Complementos', key: 'complementos' },
    { nombre: 'Patatas Especiales', key: 'patatas' },
  ];

  const handleCategoriaChange = (nuevaCategoria) => {
    setCategoria(categoria === nuevaCategoria ? null : nuevaCategoria);
    setSubcategoria(null);
  };

  const handleSubcategoriaChange = (nuevaSubcategoria) => {
    setSubcategoria(subcategoria === nuevaSubcategoria ? null : nuevaSubcategoria);
  };

  const renderSubcategorias = () => {
    if (categoria === 'pizzas') {
      return (
        <div className={`subcategorias ${categoria ? 'open' : ''}`}>
          {['tomate', 'bbq', 'nata', 'bbq-creme', 'kebab'].map((item) => (
            <div key={item}>
              <button onClick={() => handleSubcategoriaChange(item)}>
                {item.charAt(0).toUpperCase() + item.slice(1)}
                <Icono nombre='flechaD' className='flechaD-icon' />
              </button>
              <div className={`items-container ${subcategoria === item ? 'open' : ''}`}>
                {subcategoria === item && renderItems(item)}
              </div>
            </div>
          ))}
        </div>
      );
    }
    return null;
  };

  const renderItems = (subcategoria) => {
    const pizzasFiltradas = Pizzas.filter(pizza => pizza.base === subcategoria);
    return (
      <table className="items-table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Ingredientes</th>
            <th>Chapata (€)</th>
            <th>Mediana (€)</th>
            <th>Familiar (€)</th>
          </tr>
        </thead>
        <tbody>
          {pizzasFiltradas.map((pizza) => (
            <tr key={pizza.id}>
              <td>{pizza.name}</td>
              <td>{pizza.description}</td>
              <td>{pizza.precioChapata}</td>
              <td>{pizza.precioMediana}</td>
              <td>{pizza.precioFamiliar}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div className="carta">
      <div className="logo">
        <img src="ruta/a/tu/logo.png" alt="La Porción" />
      </div>

      <Link to="/servicios">¡Haz tu pedido!</Link>

      <h2>Nuestra Carta</h2>

      <div className="categorias">
        {categorias.map((cat) => (
          <div key={cat.key}>
            <button onClick={() => handleCategoriaChange(cat.key)}>
              {cat.nombre}
              <Icono nombre='flechaD' className='flechaD-icon' />
            </button>
            <div className={`subcategorias ${categoria === cat.key ? 'open' : ''}`}>
              {categoria === cat.key && renderSubcategorias()}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carta;
