import React from 'react';
import './About.css';


const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container about-container">
        <div className="about-image-wrapper">
          <img 
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80" 
            alt="Retrato de la fotógrafa" 
            className="about-image"
          />
        </div>
        
        <div className="about-content">
          <h2 className="section-title">La visión detrás del lente</h2>
          <p className="about-subtitle">Mi nombre es Yhadira, y mi pasion es detener el tiempo.</p>
          
          <div className="about-text">
            <p>
              Con más de 3 años de experiencia profesional, me especializo en fotografía de individual, 
              bodas, eventos y maternidad. Cada sesión es una experiencia única donde busco retratar la 
              esencia y la naturalidad de cada persona.
            </p>
            <p>
              Mi enfoque minimalista e íntimo busca dejar de lado las poses artificiales para enfocarse
              en la conexión real. Creo que las mejores fotografías son aquellas que, al verlas años 
              después, te hacen revivir exactamente la emoción de ese momento.
            </p>
          </div>
          
          <a href="#contact" className="btn-secondary">
            Conoce mis procesos <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
