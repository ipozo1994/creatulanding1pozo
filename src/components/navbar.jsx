import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav style={styles.nav}>
      <h1 style={styles.logo}>Mi Tienda</h1>
      <ul style={styles.links}>
        <li>Inicio</li>
        <li>Productos</li>
        <li>Contacto</li>
      </ul>
      <CartWidget />
    </nav>
  );
};

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#e3e3e3',
    padding: '10px 20px',
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  links: {
    listStyle: 'none',
    display: 'flex',
    gap: '15px',
  },
};

export default NavBar;
