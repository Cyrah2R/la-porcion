import React from 'react';
import Icono from '../../assets/iconos';
import './footer.css';

export const Footer = () => {
  return (
    <footer>
      <div className='footer'>
        <div className='footer-section'>
          <div className='footer-links'>

            <div className='footer-links-div'>
              <h4>Pedidos</h4>
              <a href='/Telefono'>
                <p>Tlfono: 909090909</p>
              </a>
              <a href='/OidoKocina'>
                <p>OidoKocina</p>
              </a>

            </div>

            <div className='footer-links-div'>
              <h4>Contacto</h4>
              <a>
                <p>Email: laporcion@email.com</p>
              </a>
              <a href='/contacto'>
                <p>Escribenos</p>
              </a>
            </div>
            
            <div className='footer-links-div'>
              <h4>Ven a conocernos!</h4>
              <a>
                <p>Avd. Blas Infante</p>
                <p>'EL Recinto' Écija</p>
              </a>
              <a>
                <p>Mapa</p>
              </a>
            </div>

            <div className='footer-links-div'>
              <h4>Siguenos:</h4>
              <div className='socialmedia'>
                <a href='https://instagram.com' target='_blank' rel='noopener noreferrer'>
                  <Icono nombre='instagram' className='footer-icons'/>
                </a>
                <a href='https://instagram.com' target='_blank' rel='noopener noreferrer'>
                  <Icono nombre='instagram' />
                </a>
              </div>
            </div>

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