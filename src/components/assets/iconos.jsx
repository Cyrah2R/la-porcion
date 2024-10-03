import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCoffee, faHome } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';

// Crea un objeto con los iconos que vas a usar
const iconos = {
  hamburguesa: faBars,
  cafe: faCoffee,
  casa: faHome,
  instagram: faInstagram,
  facebook: faFacebook,
  twitter: faTwitter,
};

const Icono = ({ nombre }) => {
  return <FontAwesomeIcon icon={iconos[nombre]} />;
};

export default Icono;
