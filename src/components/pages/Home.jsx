import React, { useEffect, useState} from 'react';
//import CarruselFotos from '../recursos/CarruselFotos';
import { novedades } from '../data/novedades';
export const Home = () => {

  // NOVEDADES: Cambia la noticia cada 5 segundos
  const [indiceNovedades, setIndiceNovedades] = useState(0); // Estado para el índice de noticias

  useEffect(() => {
    const interval = setInterval(() => {
      setIndiceNovedades((prevIndex) => (prevIndex + 1) % novedades.length);
    }, 10000); // 5000 ms = 5 segundos

    return () => clearInterval(interval); // Limpiar el intervalo al desmontar
  }, []);

  return (

    <div className='home'>

      <div className="logo">
        <img src={require('../assets/images/logo-header.png')} alt="Logo" />
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
              
              {/*SI QUISIERA AÑADIR IMAGEN EN VEZ DE TITULO Y DESCRIPCION PONER LO SIGUIENTE: */}
              {/* <img src={novedad.image} alt={novedad.title} style={{ width: '100%', height: 'auto' }} /> */}
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}


/* 

<h3>{novedad.title}</h3>
<p>{novedad.description}</p>
        
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

  {/* AQUI SE PUEDE AÑADIR MAS CONTENIDO PARA EL INICIO

</div> 
        
**/