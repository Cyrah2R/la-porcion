import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Inicio } from '../components/Inicio';
import { Home } from '../components/Home';
import { Carta } from '../components/Carta';
import { Servicios } from '../components/Servicios';
import { Contacto } from '../components/Contacto';
import Terms from '../legal/Terms';
import Privacy from '../legal/Privacy';
import Security from '../legal/Security';
import Cookies from '../legal/Cookies';

export const Rutas = () => {
    return (
        <Routes>
            
            {/* PAGINA INTRODUCCION */}
            <Route path='/' element={<Inicio />} />
            <Route path='/inicio' element={<Inicio />} />
            
            {/* PAGINAS PRINCIPALES */}
            <Route path='/home' element={<Home />} />
            <Route path='/carta' element={<Carta />} />
            <Route path='/servicios' element={<Servicios />} />
            <Route path='/contacto' element={<Contacto />} />

            {/* PAGINAS POLITICAS */}
            <Route path='/terms' element={<Terms />} />
            <Route path='/privacy' element={<Privacy />} />
            <Route path='/security' element={<Security />} />
            <Route path='/cookies' element={<Cookies />} />

        </Routes>
    );
};
