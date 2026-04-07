import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="logo">
          <a href="#home">Yhadira Bustamante Fotografia</a>
        </div>
        
        <button className="mobile-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? 'CERRAR' : 'MENÚ'}
        </button>

        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <a href="#home" onClick={() => setMenuOpen(false)}>Inicio</a>
          <a href="#portfolio" onClick={() => setMenuOpen(false)}>Portafolio</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>Sobre mi</a>
          <a href="#services" onClick={() => setMenuOpen(false)}>Servicios</a>
          <a href="#contact" className="contact-link" onClick={() => setMenuOpen(false)}>Reservar</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
