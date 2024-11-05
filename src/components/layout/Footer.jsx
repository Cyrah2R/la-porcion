import React from 'react';
import Icono from '../assets/iconos';
import '../../index.css';

export const Footer = () => {
  return (
    <footer>
      <div className='footer'>

        <div className='footer-section section_padding'>

          <div className='footer-links'>

            <div className='footer-links-div'>
              <h4>Pedidos</h4>
              <a href='tel:+34854737308'>
                <p>Teléfono: +34 854 737 308</p>
              </a>
              <a href='https://oidokocina.com/comida-domicilio/ecija/pizzeria-la-porcion' target='_blank' rel='noopener noreferrer'>
                <p>OidoKocina</p>
              </a>
            </div>

            <div className='footer-links-div'>
              <h4>Contacto</h4>
              <a href='/contacto'>
                <p>Escribenos</p>
              </a>
              <p>Email: laporcion@email.com</p>
            </div>
            
            <div className='footer-links-div'>
              <h4>¡Ven a conocernos!</h4>
              <p>Avd. Blas Infante, 8</p>
              <p>'EL Recinto' Écija</p>
            </div>

            <div className='footer-links-div'>
              <h4>Mapa</h4>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3137.4515226833234!2d-5.084837484680664!3d37.538839779801726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd128f27b6e65f15%3A0xa2b08b2375073bc2!2sAvd.%20Blas%20Infante%2C%208%2C%20%C3%89cija!5e0!3m2!1ses!2ses!4v1612445116732!5m2!1ses!2ses"
                width="100%"
                height="70px"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Mapa de la ubicación de Avd. Blas Infante, 8, Écija"
              ></iframe>
            </div>

            <div className='footer-links-div'>
              <h4>Siguenos:</h4>
              <div className='socialmedia-footer'>
                <a href='https://instagram.com/pizzerialaporcion/' target='_blank' rel='noopener noreferrer'>
                  <Icono nombre='instagram' className='footer-icons' />
                </a>
              </div>
            </div>

            <hr></hr>

            <div className='footer-below'>
              <div className='footer-copyright'>
                <p>
                  &copy; {new Date().getFullYear()} La Porción. Todos los derechos reservados.
                </p>
              </div>
              <div className='footer-below-links'>
                <a href='/terms'><p>Términos y Condiciones</p></a>
                <a href='/privacy'><p>Privacidad</p></a>
                <a href='/security'><p>Seguridad</p></a>
                <a href='/cookies'><p>Declaración de Cookies</p></a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}