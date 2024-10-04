import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDoorOpen } from '@fortawesome/free-solid-svg-icons';
//import soundEffect from './path/to/sound-effect.mp3'; // Asegúrate de que la ruta sea correcta


export const Inicio = () => {

  const navigate = useNavigate();
  const videoRef = useRef(null);
  const [showIcon, setShowIcon] = useState(false);
  const [isEntering, setIsEntering] = useState(false);

  //Sonido para video
  // const playSound = () => {
  //   const audio = new Audio(soundEffect);
  //   audio.play();
  // };

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

  // Manejo icono - direccion
  const handleDoorClick = () => {
    setIsEntering(true);
    setTimeout(() => {
      navigate('/home');
    }, 1000);
  };

  return (
    <div className='inicio'>
      <div className='video-container'>
        <video 
          ref={videoRef}
          className='responsive-video'
          autoPlay 
          muted 
          //onPlay={playSound} // Reproduce el sonido cuando el video comienza
          onEnded={(e) => e.target.pause()}
        >
          <source src="/videos/Logo_inicio.mp4" type="video/mp4" />
          Tu navegador no soporta la reproducción de video.
        </video>
      </div>

      {showIcon && (
        <div className={`icon-container ${isEntering ? 'entering' : ''}`}>
          <FontAwesomeIcon
            icon={faDoorOpen}
            size="2x"
            className='door-icon'
            onClick={handleDoorClick}
          />
          <h3>¡Adelante!</h3>
        </div>
      )}
    </div>
  );
};
