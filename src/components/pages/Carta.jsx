import React, { useState } from 'react';
import Icono from '../assets/iconos';
import { Pizzas } from '../data/carta/pizzas';
import { Bocadillos } from '../data/carta/bocadillos';
import { Hamburguesas } from '../data/carta/hamburguesas';
import { Complementos } from '../data/carta/complementos';
import { Patatas } from '../data/carta/patatas';
import { Link } from 'react-router-dom';
import './pages.css';

const Carta = () => {

  const [categoria, setCategoria] = useState(null);
  const [subcategoria, setSubcategoria] = useState(null);

  const categorias = [
    { nombre: 'Pizzas', key: 'pizzas' },
    { nombre: 'Bocadillos', key: 'bocadillos' },
    { nombre: 'Hamburguesas', key: 'hamburguesas' },
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
          {['Tomate', 'BBQ', 'Nata', 'BBQ-Creme', 'Kebab'].map((item) => (
            <div key={item}>
              <button onClick={() => handleSubcategoriaChange(item)}>
                <div className='base'>
                  <p>Base</p>
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </div>
                <Icono nombre='flechaD' className='flechaD-icon' />
              </button>
              <div className={`items-container ${subcategoria === item ? 'open' : ''}`}>
                {subcategoria === item && renderItems('pizzas', item)}
              </div>
            </div>
          ))}
        </div>
      );
    }
    return null;
  };

  const renderItems = (categoria, subcategoria) => {

    let items = [];

    switch (categoria) {
      case 'pizzas':
        items = Pizzas.filter((pizza) => pizza.base === subcategoria);
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
              {items.map((pizza) => (
                <tr key={pizza.id}>
                  <td>{pizza.name}</td>
                  <td>{pizza.ingredientes}</td>
                  <td>{pizza.precioChapata}</td>
                  <td>{pizza.precioMediana}</td>
                  <td>{pizza.precioFamiliar}</td>
                </tr>
              ))}
            </tbody>
          </table>
        );

      case 'bocadillos':
        items = Bocadillos;
        break;

      case 'hamburguesas':
        items = Hamburguesas;
        break;

      case 'complementos':
        items = Complementos;
        return (
          <table className="items-table">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Chica (€)</th>
                <th>Mediana (€)</th>
                <th>Grande (€)</th>
              </tr>
            </thead>
            <tbody>
              {items.map((complemento) => (
                <tr key={complemento.id}>
                  <td>{complemento.name}</td>
                  <td>{complemento.priceChica}</td>
                  <td>{complemento.priceMediana || '-'}</td>
                  <td>{complemento.priceGrande || '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        );

      case 'patatas':
        items = Patatas;
        break;

      default:
        return null;
    }

    return (
      <table className="items-table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Precio (€)</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.description || '-'}</td>
              <td>{item.price || '-'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (

    <div className="carta">

      <div className="logo-container">
        <img src={require('../assets/images/logo-laporcion-blanco.png')} className='logo' alt="La Porción" />
      </div>
      
      <div className='link-container'>
        <Link to="/servicios" className='link'>¡Haz tu pedido aqui!</Link>
      </div>

      <div className="categorias">
        {categorias.map((cat) => (
          <div key={cat.key}>
            <button onClick={() => handleCategoriaChange(cat.key)}>
              {cat.nombre}
              <Icono nombre='flechaD' className='flechaD-icon' />
            </button>
            <div className={`subcategorias ${categoria === cat.key ? 'open' : ''}`}>
              {categoria === cat.key && renderSubcategorias()}
              {categoria !== 'pizzas' && categoria === cat.key && renderItems(cat.key)}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Carta;
