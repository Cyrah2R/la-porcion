import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icono from '../assets/iconos';
import './pages.css';

const Inicio = () => {
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const [showIcon, setShowIcon] = useState(false);

  // Mostrar icono - retardo 
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }

    const timer = setTimeout(() => {
      setShowIcon(true);
    }, 3000); // 3 segundos de retraso

    return () => clearTimeout(timer);
  }, []);

  // Manejo de navegación
  const handleDoorClick = () => {
    navigate('/home');
  };
  
  return (

    <div className='inicio'>

      <div className='video-container'>
        <video 
          ref={videoRef}
          className='video-inicio'
          autoPlay 
          muted
          playsInline
          onEnded={(e) => e.target.pause()}
        >
          <source src={require('../assets/videos/logo_inicio.mp4')} type="video/mp4" />
          Tu navegador no soporta la reproducción de video.
        </video>
      </div>

      {showIcon && (
        <div className={`icon-container`}>
          <button 
            onClick={handleDoorClick}
            className='inicio-button'
          >
            <Icono className='icono' nombre='puerta' />
          </button>
          <h3>¡Adelante!</h3>
        </div>
      )}
      
    </div>
  );
};

export default Inicio;
