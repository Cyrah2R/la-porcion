import React from 'react';
import Icono from '../assets/iconos';
import './pages.css';

const Servicios = () => {

  return (

    <div className="servicios">

      <h2>¡Conocenos, como quieras!</h2>

      {/* Horario */}
      <section className="horario">
        <h2>Horario de Atención</h2>
        <p>Lunes a Viernes: 20:00 - 23:30</p>
        <p>Sábado y Domingo: 13:00 - 16:00 / 20:00 - 23:30</p>
      </section>

      {/* Pedidos */}
      <div className="servicios-contenido">
        <h2>Haz tu pedido ahora:</h2>

        <div className="servicios-columnas">
          {/* Columna 1: Recogida en local */}
          <div className="servicios-columna">
            <div className="recoger">
              <h3>Recoger:</h3>
              <p>Haz tu pedido ahora para recoger. Llamanos al,</p>
              <a href="tel:+34854737308">+34 854 737 308</a>
            </div>
          </div>

          {/* Columna 2: Envío a domicilio */}
          <div className="servicios-columna">
            <div className="domicilio">
              <h3>Domicilio:</h3>
              <p>Haz tu pedido fácilmente a través de la aplicación <strong>Oidokocina</strong>. ¡Descárgala aquí y pide al instante!</p>
              <a href='https://oidokocina.com/comida-domicilio/ecija/pizzeria-la-porcion' target="_blank" rel="noopener noreferrer">
                <button className="btn-oidokocina">Pedir con Oidokocina</button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Ubicación */}
      <section className="ubicacion">
        <h3>Visítanos en nuestro local</h3>
        <p>
          Estamos ubicados en Avd. Blas Infante, 8 (El Recinto). 
          <br/>
          ¡Ven a disfrutar de nuestra deliciosa comida en un ambiente acogedor!
        </p>
        <iframe 
          title="Mapa"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3137.4515226833234!2d-5.084837484680664!3d37.538839779801726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd128f27b6e65f15%3A0xa2b08b2375073bc2!2sAvd.%20Blas%20Infante%2C%208%2C%20%C3%89cija!5e0!3m2!1ses!2ses!4v1612445116732!5m2!1ses!2ses"
          width="100%" 
          height="300" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy"
        />
      </section>

      {/* Redes sociales */}
      <div className="redes">
        <h3>Síguenos en redes sociales</h3>
        <p>Mantente al tanto de nuestras promociones y novedades siguiéndonos en redes sociales.</p>
        <div className="socialmedia">
          <a href='https://www.instagram.com/pizzerialaporcion/' target='_blank' rel='noopener noreferrer'>
            <Icono nombre='instagram' className='footer-icons' /> Instagram
          </a>
          {/* <a href='https://facebook.com' target='_blank' rel='noopener noreferrer'>
            <Icono nombre='facebook' className='footer-icons' /> Facebook
          </a> */}
          {/* Añadir más redes si es necesario */}
        </div>
      </div>
     

    </div>
  );
};

export default Servicios;