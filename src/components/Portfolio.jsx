import React, { useState, useEffect } from 'react';
import './Portfolio.css';
import { client, urlFor } from '../sanityClient';

const categories = ['Todos', 'Sesiones', 'Bodas', 'Maternidad', 'Eventos', 'Bautizos'];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('Todos');
  const [selectedProject, setSelectedProject] = useState(null);
  
  const [portfolioData, setPortfolioData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Carga asíncrona desde Sanity
  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const query = '*[_type == "portfolioItem"] | order(orderRank)';
        const sanityData = await client.fetch(query);
        setPortfolioData(sanityData);
      } catch (error) {
        console.error("Error al obtener datos de Sanity:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPortfolio();
  }, []);

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

  // Helper function para renderizar imágenes que viajan desde el CMS
  const renderCover = (item) => {
    if (item.cover && item.cover.asset) {
      return urlFor(item.cover).url();
    }
    return '';
  };

  const renderGalleryImg = (imgObj) => {
    if (imgObj && imgObj.asset) {
      return urlFor(imgObj).url();
    }
    return '';
  };

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

          {isLoading ? (
            <div style={{ textAlign: 'center', margin: '4rem 0', color: 'var(--text-secondary)' }}>
              Cargando obras recientes...
            </div>
          ) : portfolioData.length === 0 ? (
            <div style={{ textAlign: 'center', margin: '4rem 0', color: 'var(--text-secondary)' }}>
              Aún no hay proyectos subidos. Agrega tu primer proyecto desde Sanity Studio.
            </div>
          ) : (
            <div className="portfolio-grid">
              {filteredData.map(item => (
                <div key={item._id} className="portfolio-item" onClick={() => setSelectedProject(item)}>
                  <img src={renderCover(item)} alt={item.title} loading="lazy" />
                  <div className="portfolio-overlay">
                    <div className="portfolio-info">
                      <h3>{item.title}</h3>
                      <p>{item.category} • Ver Galería</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
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
              {selectedProject.gallery && selectedProject.gallery.map((imgObj, index) => (
                <div key={index} className="modal-gallery-item">
                  <img src={renderGalleryImg(imgObj)} alt={`${selectedProject.title} ${index + 1}`} loading="lazy" />
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
