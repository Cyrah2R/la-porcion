import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faDoorOpen, faSortDown } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

const iconos = {
  flechaD: faSortDown,
  hamburguesa: faBars,
  puerta: faDoorOpen,
  instagram: faInstagram,
  facebook: faFacebook,
};

const Icono = ({ nombre, className }) => {
  return <FontAwesomeIcon icon={iconos[nombre]} className={className} />;
};

export default Icono;