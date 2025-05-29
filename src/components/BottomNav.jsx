import React from 'react';
import { NavLink } from 'react-router-dom';

const BottomNav = () => {
  return (
    <nav style={styles.nav}>
      <NavLink to="/" style={styles.link}>Inicio</NavLink>
      <NavLink to="/search" style={styles.link}>Buscar</NavLink>
      <NavLink to="/favorites" style={styles.link}>Favoritos</NavLink>
      <NavLink to="/profile" style={styles.link}>Perfil</NavLink>
      <NavLink to="/surprise" style={styles.link}>surprise</NavLink>
      <NavLink to="/About" style={styles.link}>About</NavLink>
      <NavLink to="/usuario" style={styles.link}>Usuario</NavLink>
    </nav>
  );
};

const styles = {
  nav: {
    position: 'fixed',
    bottom: 0,
    width: '100%',
    background: '#eee',
    display: 'flex',
    justifyContent: 'space-around',
    padding: '10px 0',
    borderTop: '1px solid #ccc',
  },
  link: {
    textDecoration: 'none',
    color: '#333',
    fontWeight: 'bold',
  }
};

export default BottomNav;
