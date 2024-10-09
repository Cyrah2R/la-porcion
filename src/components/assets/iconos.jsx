import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCoffee, faDoorOpen } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

// Crea un objeto con los iconos que vas a usar
const iconos = {
  hamburguesa: faBars,
  cafe: faCoffee,
  puerta: faDoorOpen,
  instagram: faInstagram,
  facebook: faFacebook,
};

const Icono = ({ nombre }) => {
  return <FontAwesomeIcon icon={iconos[nombre]} />;
};

export default Icono;
