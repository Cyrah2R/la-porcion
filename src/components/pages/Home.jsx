import React, { useEffect, useState, useRef } from 'react';
import CarruselFotos from '../recursos/CarruselFotos';
import { novedades } from '../data/novedades';
export const Home = () => {

  const videoRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [indiceNovedades, setIndiceNovedades] = useState(0); // Estado para el índice de noticias

  useEffect(() => {
    // Mostrar el contenido después de que el componente se monte
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 0); // Se puede ajustar el tiempo si es necesario

    return () => clearTimeout(timer); // Limpiar el temporizador si el componente se desmonta
  }, []);

  // Cambia la noticia cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setIndiceNovedades((prevIndex) => (prevIndex + 1) % novedades.length);
    }, 5000); // 5000 ms = 5 segundos

    return () => clearInterval(interval); // Limpiar el intervalo al desmontar
  }, []);

  return (

    <div className={`home ${isVisible ? 'expand' : ''}`}>

        <div className="logo">
          <img src="/public/images/logo.png" alt="Logo" />
        </div>

        <div className='novedades'>
          <h2>Novedades:</h2>
          <div className='novedades-container'>
            {novedades.map((novedad, indice) => (
              <div 
                key={novedad.id} 
                className={`novedad ${indice === indiceNovedades ? 'active' : ''}`}
              >
                <h3>{novedad.title}</h3>
                <p>{novedad.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className='video-container'>
          <video 
            ref={videoRef}
            height="300px" 
            width="95%" 
            style={{ marginTop: '10px' }}
            autoPlay 
            muted 
            onEnded={(e) => e.target.pause()}
          >
            <source src="/videos/Home.mp4" type="video/mp4" />
            Tu navegador no soporta la reproducción de video.
          </video>
        </div>

        <div className='informacion-container'>
          
          <div className='fotos-empresa'>
            <h2>Conócenos:</h2>
            <CarruselFotos limite='' />
          </div>

          {/* AQUI SE PUEDE AÑADIR MAS CONTENIDO PARA EL INICIO */}

        </div>
    </div>
  )
}
