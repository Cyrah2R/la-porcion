import React, { useEffect, useState } from 'react';
import { novedades } from '../data/novedades';
import { fotos } from '../data/fotos';
import videoSrc from '../assets/videos/home_bienvenida.mp4';
import './pages.css';

const Home = () => {
  const [indiceNovedades, setIndiceNovedades] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndiceNovedades((prevIndex) => (prevIndex + 1) % novedades.length);
    }, 3000); 

    return () => clearInterval(interval); 
  }, []);

  const [indiceFoto, setIndiceFoto] = useState(0); 

  useEffect(() => {
    const intervalFotos = setInterval(() => {
      setIndiceFoto((prevIndex) => (prevIndex + 1) % fotos.length);
    }, 5000); 

    return () => clearInterval(intervalFotos); 
  }, []);

  
  return (
    <div className="home">

      {/* SECCION 1 */}
      <section className="section-novedades">

        <div className="novedades-content">
          <div className="carrusel">
            <img
              src={novedades[indiceNovedades].image}
              alt={novedades[indiceNovedades].title}
              className="carrusel-imagen"
            />
          </div>
        </div>

      </section>

      {/* SECCION 2 */}
      <section className="section-video">

        <video 
          src={videoSrc} 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="video" />
          
      </section>

      {/* SECCION 3 */}
      <section className="section-conocenos">

        <div className="fotos-content">
          <h3>Conocenos:</h3>
          <div className="carrusel">
            <img
              src={require(`../assets/images/${fotos[indiceFoto].id}.png`)} // Asegúrate de que esta ruta sea correcta
              alt={fotos[indiceFoto].nombre} 
              className="carrusel-imagen"
            />
          </div>
        </div>

      </section>

    </div>
  );
};

export default Home;