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

      <div className='novedades'>
        {/* <h3>Novedades:</h3> */}
        
        <div className='novedades-container'>
          {novedades.map((novedad, indice) => (
            <div 
              key={novedad.id || indice} // Usar el id o el índice como fallback si no hay id único.
              className={`novedad ${indice === indiceNovedades ? 'active' : ''}`}
            >
              {/*SI QUISIERA AÑADIR TITULO Y DESCRIPCION EN VEZ DE IMAGEN PONER LO SIGUIENTE: */}
              {/* <h2>{novedad.title}</h2>
              <p>{novedad.description}</p> */}

              {/*SI QUISIERA AÑADIR IMAGEN EN VEZ DE TITULO Y DESCRIPCION PONER LO SIGUIENTE: */}
              <img src={novedad.image} alt={novedad.title} />
            </div>
          
          ))}
        </div>
      </div>

      <hr className='hr' />

      <div className='fotos-empresa'>
        <h3>Conócenos:</h3>
        <Carrusel limite='' />
      </div>

      <hr className='hr' />

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
    </div>
  )
};

export default Home;