import React from 'react';
import { Routes, Route, BrowserRouter, NavLink } from 'react-router-dom';
import { Inicio } from '../components/Inicio';
import { Home } from '../components/Home';
import { Carta } from '../components/Carta';
import { Servicios } from '../components/Servicios';
import { Contacto } from '../components/Contacto';
import { HeaderNav } from '../components/layout/HeaderNav/HeaderNav';
import { Footer } from '../components/layout/Footer/Footer';

export const MisRutas = () => {
    return  (
    <BrowserRouter>
        {/* HEADER Y NAVEGACION */}
        <HeaderNav />

        {/* CONTENIDO CENTRAL */}
        <Routes>

            <Route path='/' element={<Inicio/>} />
            <Route path='/inicio' element={<Inicio/>} />
            <Route path='/home' element={<Home/>} />
            <Route path='/carta' element={<Carta/>} />
            <Route path='/servicios' element={<Servicios/>} />
            <Route path='/contacto' element={<Contacto/>} />

        </Routes>
        <hr/>
        
        {/* FOOTER */}
        <Footer />

    </BrowserRouter>
  )
}
