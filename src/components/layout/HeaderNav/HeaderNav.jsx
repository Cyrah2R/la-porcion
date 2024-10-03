import React, { useState }from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './HeaderNav.css';

export const HeaderNav = () => {

  const [ menu , setMenu ] = useState( false );

  const toggleMenu = () => {
    setMenu( !menu )
  };

  const handleLinkClick = () => {
    setMenu(false);
  };

  return (
    <header className='header'>

        <button 
          onClick={ toggleMenu }
          className='header-button'
        >
          <FontAwesomeIcon className='header-icon' icon={faBars} />
        </button>

        <nav className={ `header-nav ${ menu ? 'menu' : ''}` }>

            <ul className='header-ul'>

              <li className='header-li'><NavLink to="/home" className='header-NavLink' onClick={handleLinkClick}>Home</NavLink></li>
              <li className='header-li'><NavLink to="/carta" className='header-NavLink' onClick={handleLinkClick}>Carta</NavLink></li>
              <li className='header-li'><NavLink to="/servicios" className='header-NavLink' onClick={handleLinkClick}>Servicios</NavLink></li>
              <li className='header-li'><NavLink to="/contacto" className='header-NavLink' onClick={handleLinkClick}>Contacto</NavLink></li>
          
            </ul>
        </nav>
    </header>
  );
};
