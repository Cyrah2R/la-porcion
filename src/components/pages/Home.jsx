import React, { useEffect, useState} from 'react';
import { novedades } from '../data/novedades';
import Carrusel from '../assets/carrusel/carrusel';
import videoSrc from '../assets/videos/home_bienvenida.mp4';
import './pages.css';

const Home = () => {

  // NOVEDADES: Cambia la noticia cada 5 segundos
  const [indiceNovedades, setIndiceNovedades] = useState(0); // Estado para el índice de noticias

  useEffect(() => {
    const interval = setInterval(() => {
      setIndiceNovedades((prevIndex) => (prevIndex + 1) % novedades.length);
    }, 5000); // 5000 ms = 5 segundos

    return () => clearInterval(interval); // Limpiar el intervalo al desmontar
  }, []);

  return (

    <div className='home'>

      <div className="logo">
        <img src={require('../assets/images/logo-header.png')} alt="Logo" />
      </div>

      <div className='novedades'>
        <h3>Novedades:</h3>
        <div className='novedades-container'>
          {novedades.map((novedad, indice) => (
            <div 
              key={novedad.id} 
              className={`novedad ${indice === indiceNovedades ? 'active' : ''}`}
            >
              <h2>{novedad.title}</h2>
              <p>{novedad.description}</p>
              
              {/*SI QUISIERA AÑADIR IMAGEN EN VEZ DE TITULO Y DESCRIPCION PONER LO SIGUIENTE: */}
              {/* <img src={novedad.image} alt={novedad.title} style={{ width: '100%', height: 'auto' }} /> */}
            </div>
          ))}
        </div>
      </div>

      <div className='video-container'>
        <video 
          src={videoSrc} 
          autoPlay 
          loop 
          muted 
          className='video'
          style={{ width: '95%', height: '300px' }} // Ajusta el tamaño según necesites
        />
      </div>

      <div className='fotos-empresa'>
        <h3>Conócenos:</h3>
        <Carrusel limite='' />
      </div>

    </div>
  )
};

export default Home;