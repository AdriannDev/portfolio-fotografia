import React from 'react';
import './Hero.css';
import heroBg from '../assets/hero-image.jpg';


const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-bg">
        <img src={heroBg} alt="Fotografía de moda elegante" />
        <div className="hero-overlay"></div>
      </div>
      
      <div className="hero-content">
        <h2 className="hero-subtitle">CAPTURANDO MOMENTOS</h2>
        <h1 className="hero-title">Unicos y<br/>Especiales</h1>
        
        <div className="hero-actions">
          <a href="#contact" className="btn-primary">Reservar Sesión</a>
        </div>
      </div>
      
      <a href="#portfolio" className="scroll-indicator">
        <span className="scroll-text">Explorar</span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="scroll-icon"><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></svg>
      </a>
    </section>
  );
};

export default Hero;
