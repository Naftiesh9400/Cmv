import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { projectPosts as projects } from '../data/projectData';

const ProjectsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Responsive cards to show
  const [cardsToShow, setCardsToShow] = useState(3);
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setCardsToShow(1);
      else if (window.innerWidth < 1024) setCardsToShow(2);
      else setCardsToShow(3);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const next = () => {
    if (currentIndex < projects.length - cardsToShow) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setCurrentIndex(0); // Loop back
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    } else {
      setCurrentIndex(projects.length - cardsToShow); // Go to end
    }
  };

  return (
    <section id="projects" style={{ padding: '100px 0', background: '#f8fafc', overflow: 'hidden' }}>
      <div className="container" style={{ position: 'relative' }}>
        
        {/* --- Header --- */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 60px' }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '8px', 
              padding: '6px 18px', 
              borderRadius: '99px', 
              background: 'rgba(255, 77, 0, 0.08)',
              border: '1px solid rgba(255, 77, 0, 0.15)',
              marginBottom: '20px'
            }}
          >
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ff4d00' }} />
            <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#ff4d00', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              Our Case Studies
            </span>
          </motion.div>
          
          <h2 style={{ 
            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', 
            fontWeight: 900, 
            color: '#0f172a', 
            margin: '0 0 16px',
            lineHeight: 1.1,
            fontFamily: 'Outfit, sans-serif'
          }}>
            Real Results, <span style={{ color: '#ff4d00' }}>Real Impact</span>
          </h2>
          
          <p style={{ fontSize: '1.2rem', color: '#64748b', lineHeight: 1.6, maxWidth: '640px', margin: '0 auto' }}>
            Explore how we've helped businesses transform through strategic technology implementation and innovative digital solutions.
          </p>
        </div>

        {/* --- Carousel Controls --- */}
        <div className="carousel-controls" style={{ 
          position: 'absolute', 
          top: '50%', 
          left: '0', 
          right: '0', 
          display: 'flex', 
          justifyContent: 'space-between', 
          padding: '0 20px', 
          pointerEvents: 'none',
          zIndex: 10,
          transform: 'translateY(-50%)'
        }}>
          <button 
            onClick={prev}
            style={{ 
              width: '50px', 
              height: '50px', 
              borderRadius: '50%', 
              background: '#fff', 
              border: '1px solid #e2e8f0', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              cursor: 'pointer', 
              pointerEvents: 'auto',
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
              transition: 'all 0.3s ease',
              color: '#ff4d00'
            }}
            className="ctrl-btn"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={next}
            style={{ 
              width: '50px', 
              height: '50px', 
              borderRadius: '50%', 
              background: '#fff', 
              border: '1px solid #e2e8f0', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              cursor: 'pointer', 
              pointerEvents: 'auto',
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
              transition: 'all 0.3s ease',
              color: '#ff4d00'
            }}
            className="ctrl-btn"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* --- Projects Container --- */}
        <div className="carousel-wrapper" style={{ margin: '0 -15px', padding: '0.5rem 0 1rem' }}>
          <motion.div
            className="carousel-inner"
            animate={{ x: `-${currentIndex * (100 / cardsToShow)}%` }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            style={{ 
              display: 'flex',
              gap: '0',
            }}
          >
            {projects.map((project, i) => (
              <div 
                key={i} 
                style={{ 
                  flex: `0 0 ${100 / cardsToShow}%`, 
                  padding: '0 15px',
                  boxSizing: 'border-box'
                }}
              >
                <div style={{
                  background: '#fff',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  border: '1px solid #f1f5f9',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.05), 0 10px 30px rgba(0,0,0,0.02)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column'
                }} className="project-card">
                  {/* Image wrapper */}
                  <div style={{ position: 'relative', overflow: 'hidden', paddingTop: '65%' }}>
                    <img 
                      src={project.img} 
                      alt={project.title} 
                      style={{ 
                        position: 'absolute',
                        top: 0, left: 0,
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'cover',
                        transition: 'transform 0.6s ease'
                      }} 
                      className="card-img"
                    />
                    <div style={{ 
                      position: 'absolute', 
                      bottom: '20px', 
                      left: '20px', 
                      background: 'rgba(15, 23, 42, 0.8)', 
                      backdropFilter: 'blur(4px)',
                      color: '#fff', 
                      padding: '6px 14px', 
                      borderRadius: '8px', 
                      fontSize: '0.75rem', 
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}>
                      {project.category}
                    </div>
                  </div>

                  {/* Content wrapper */}
                  <div style={{ padding: '28px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <h3 style={{ 
                      fontSize: '1.4rem', 
                      fontWeight: 800, 
                      color: '#0f172a', 
                      marginBottom: '12px',
                      fontFamily: 'Outfit, sans-serif',
                      lineHeight: 1.25
                    }}>
                      {project.title}
                    </h3>
                    <p style={{ 
                      fontSize: '0.95rem', 
                      color: '#64748b', 
                      lineHeight: 1.6, 
                      marginBottom: '20px',
                      flex: 1
                    }}>
                      {project.desc}
                    </p>
                    <Link 
                      to={`/projects/${project.slug}`}
                      style={{ 
                        display: 'inline-flex', 
                        alignItems: 'center', 
                        gap: '8px', 
                        color: '#ff4d00', 
                        textDecoration: 'none', 
                        fontWeight: 800, 
                        fontSize: '0.9rem',
                        transition: 'gap 0.3s ease'
                      }}
                      className="read-btn"
                    >
                      View Case Study <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* --- Pagination Dots --- */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '10px' }}>
          {Array.from({ length: projects.length - cardsToShow + 1 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              style={{
                width: currentIndex === idx ? '24px' : '8px',
                height: '8px',
                borderRadius: '4px',
                background: currentIndex === idx ? '#ff4d00' : '#e2e8f0',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            />
          ))}
        </div>

      </div>

      <style>{`
        .project-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 30px 60px rgba(255, 77, 0, 0.12);
          border-color: rgba(255, 77, 0, 0.2);
        }
        .project-card:hover .card-img {
          transform: scale(1.1);
        }
        .ctrl-btn:hover {
          background: #ff4d00 !important;
          color: #fff !important;
          transform: scale(1.1);
          border-color: #ff4d00 !important;
        }
        .read-btn:hover {
          gap: 12px !important;
        }
        @media (max-width: 1024px) {
          .carousel-controls { display: none !important; }
        }
        @media (max-width: 640px) {
          .carousel-wrapper { margin: 0 -10px; padding: 0 0 20px; }
          .project-card { min-height: auto !important; }
          .project-card h3 { font-size: 1.25rem !important; }
        }
      `}</style>
    </section>
  );
};

export default ProjectsSection;
