import React from 'react';
import './Services.css';

const servicesSet = [
  {
    title: 'Sesiones Individuales / Pareja',
    description: 'Sesión individual de 2 horas en estudio o exteriores. Incluye dirección creativa, 2 cambios de outfit y 15 fotografías editadas en alta resolución.',
  },
  {
    title: 'Maternidad',
    description: 'Sesión cálida e íntima para documentar tu dulce espera. Ideal entre la semana 28 y 34. Incluye 20 fotos en alta resolución.',
  },
  {
    title: 'Bodas & Eventos',
    description: 'Cobertura documental completa de tu día especial. Desde los preparativos hasta la fiesta. Se entrega galería online privada con +150 fotos.',
  }
];

const Services = () => {
  return (
    <section id="services" className="section services-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Servicios y Tarifas</h2>
          <p className="section-subtitle">Paquetes diseñados para cada etapa de tu vida</p>
        </div>

        <div className="services-grid">
          {servicesSet.map((service, idx) => (
            <div key={idx} className="service-card">
              <h3 className="service-title">{service.title}</h3>
              <div className="service-divider"></div>
              <p className="service-desc">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
