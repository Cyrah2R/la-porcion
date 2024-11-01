import React, { useEffect, useState } from 'react';
import { novedades } from '../data/novedades';
import { fotos } from '../data/fotos';
import videoSrc from '../assets/videos/home-bienvenida.mp4';
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

        <div className='video-container'>
          <video 
            src={videoSrc} 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="video" 
          />
        </div>

        <div className='texto-container'>
          <h3>¡BIENVENIDOS A LA PORCION!</h3>
          <p>
            NUESTRA PASION ES LA PIZZA. AQUI ENCONTRARÁS SABORES AUTÉNTICOS, MASAS HECHAS A MANO Y LOS INGREDIENTES MÁS FRESCOS, 
            TODO PREPARADO CON DEDICACIÓN Y CARIÑO. YA SEA QUE PREFIERAS UNA CLÁSICA MARGARITA O UNA CREACIÓN ÚNICA DE LA CASA, 
            CADA BOCADO TE LLEVARÁ A UN VIAJE LLENO DE TRADICIÓN Y AMOR POR LA COCINA
            <br/><br/>
            SIÉNTETE COMO EN CASA MIENTRAS EXPLORAS NUESTRA CARTA, DESCUBRE NUESTRAS ESPECIALIDADES Y CONOCE LA EXPERIENCIA ÚNICA 
            QUE OFRECEMOS. TANTO SI NOS VISITAS CON AMIGOS, EN FAMILIA O DECIDES DISFRUTAR DE NUESTRAS PIZZAS EN LA COMODIDAD DE 
            TU HOGAR, ESTAMOS AQUÍ PARA HACER DE CADA COMIDA UNA OCASION ESPECIAL. 
          </p>
        </div>

      </section>

      {/* SECCION 3 */}
      <section className="section-conocenos">
      

        <div className="fotos-content">
          <div className="carrusel">
            <img
              src={require(`../assets/images/${fotos[indiceFoto].id}.png`)} 
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