import React, { useState, useEffect } from 'react';
import './Portfolio.css';

const categories = ['Todos', 'Sesiones', 'Bodas', 'Maternidad', 'Eventos'];

// Base de datos del portafolio enrutada a la estructura de carpetas locales en /public
const portfolioData = [
  { 
    id: 1, 
    category: 'Sesiones', 
    title: 'Retrato Estudio',
    cover: '/portfolio/sesiones/proyecto1/cover.jpg',
    gallery: [
      '/portfolio/sesiones/proyecto1/1.jpg',
      '/portfolio/sesiones/proyecto1/2.jpg',
      '/portfolio/sesiones/proyecto1/3.jpg'
    ]
  },
  { 
    id: 2, 
    category: 'Bodas', 
    title: 'Boda Civil',
    cover: '/portfolio/bodas/proyecto1/cover.jpg',
    gallery: [
      '/portfolio/bodas/proyecto1/1.jpg',
      '/portfolio/bodas/proyecto1/2.jpg',
      '/portfolio/bodas/proyecto1/3.jpg'
    ]
  },
  { 
    id: 3, 
    category: 'Maternidad', 
    title: 'Dulce Espera',
    cover: '/portfolio/maternidad/proyecto1/cover.jpg',
    gallery: [
      '/portfolio/maternidad/proyecto1/1.jpg',
      '/portfolio/maternidad/proyecto1/2.jpg',
      '/portfolio/maternidad/proyecto1/3.jpg'
    ]
  },
  { 
    id: 4, 
    category: 'Sesiones', 
    title: 'Editorial Moda',
    cover: '/portfolio/sesiones/proyecto2/cover.jpg',
    gallery: [
      '/portfolio/sesiones/proyecto2/1.jpg',
      '/portfolio/sesiones/proyecto2/2.jpg',
      '/portfolio/sesiones/proyecto2/3.jpg'
    ]
  },
  { 
    id: 5, 
    category: 'Bodas', 
    title: 'Ceremonia',
    cover: '/portfolio/bodas/proyecto2/cover.jpg',
    gallery: [
      '/portfolio/bodas/proyecto2/1.jpg',
      '/portfolio/bodas/proyecto2/2.jpg',
      '/portfolio/bodas/proyecto2/3.jpg'
    ]
  },
  { 
    id: 6, 
    category: 'Sesiones', 
    title: 'Beauty',
    cover: '/portfolio/sesiones/proyecto3/cover.jpg',
    gallery: [
      '/portfolio/sesiones/proyecto3/1.jpg',
      '/portfolio/sesiones/proyecto3/2.jpg',
      '/portfolio/sesiones/proyecto3/3.jpg'
    ]
  },
  { 
    id: 7, 
    category: 'Eventos', 
    title: 'Cumpleaños',
    cover: '/portfolio/eventos/proyecto1/cover.jpg',
    gallery: [
      '/portfolio/eventos/proyecto1/1.jpg',
      '/portfolio/eventos/proyecto1/2.jpg',
      '/portfolio/eventos/proyecto1/3.jpg'
    ]
  }
];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('Todos');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredData = activeFilter === 'Todos' 
    ? portfolioData 
    : portfolioData.filter(item => item.category === activeFilter);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [selectedProject]);

  const closeModal = () => setSelectedProject(null);

  return (
    <>
      <section id="portfolio" className="section portfolio-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Portafolio</h2>
            <p className="section-subtitle">Momentos eternizados a través de mi lente</p>
          </div>

          <div className="portfolio-filters">
            {categories.map((cat, idx) => (
              <button 
                key={idx} 
                className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
                onClick={() => setActiveFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="portfolio-grid">
            {filteredData.map(item => (
              <div key={item.id} className="portfolio-item" onClick={() => setSelectedProject(item)}>
                <img src={item.cover} alt={item.title} loading="lazy" />
                <div className="portfolio-overlay">
                  <div className="portfolio-info">
                    <h3>{item.title}</h3>
                    <p>{item.category} • Ver Galería</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal de Galería Expansiva */}
      {selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
              </svg>
            </button>
            
            <div className="modal-header">
              <h2>{selectedProject.title}</h2>
              <p>{selectedProject.category}</p>
            </div>

            <div className="modal-gallery">
              {selectedProject.gallery.map((imgUrl, index) => (
                <div key={index} className="modal-gallery-item">
                  <img src={imgUrl} alt={`${selectedProject.title} ${index + 1}`} loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Portfolio;
