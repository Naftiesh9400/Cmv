import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { serviceCategories } from '../data/serviceData';
import TechSection from '../components/TechSection';

const ServiceDetail = () => {
  const { categorySlug } = useParams();
  const [activeCategory, setActiveCategory] = useState(serviceCategories[0]);

  useEffect(() => {
    if (categorySlug) {
      const category = serviceCategories.find(c => c.slug === categorySlug);
      if (category) setActiveCategory(category);
    }
  }, [categorySlug]);

  return (
    <div style={{ background: '#fff', paddingTop: '100px', minHeight: '100vh' }}>
      <div className="container">
        {/* Top Header Section */}
        <header style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'flex-start',
          marginBottom: '4rem',
          flexWrap: 'wrap',
          gap: '2rem'
        }}>
          <div>
            <h1 style={{ 
              fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', 
              fontWeight: 800, 
              color: '#0f172a', 
              fontFamily: 'Outfit, sans-serif',
              marginBottom: '1rem'
            }}>
              Our Digital Transformation <br />
              <span style={{ color: '#F43F5E' }}>Services</span>
            </h1>
          </div>
          <div style={{ textAlign: 'right', maxWidth: '400px' }}>
            <p style={{ color: '#64748b', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
              Identify and solve your business requirements with our wholesome transformative services.
            </p>
            <Link 
              to="/contact" 
              style={{ 
                display: 'inline-flex',
                alignItems: 'center',
                padding: '12px 24px',
                background: '#FF5722',
                color: '#fff',
                borderRadius: '9999px',
                textDecoration: 'none',
                fontWeight: 700,
                fontSize: '0.9rem',
                boxShadow: '0 10px 20px rgba(255, 87, 34, 0.2)'
              }}
            >
              I Need a Free Consultation
            </Link>
          </div>
        </header>

        {/* Main Services UI */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'clamp(250px, 30%, 350px) 1fr', 
          gap: '3rem',
          alignItems: 'flex-start'
        }} className="services-detail-grid">
          
          {/* Sidebar - Category List */}
          <aside style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {serviceCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat)}
                style={{
                  width: '100%',
                  padding: '1.25rem 1.5rem',
                  borderRadius: '1rem',
                  border: '1px solid',
                  borderColor: activeCategory.id === cat.id ? '#FF5722' : '#f1f5f9',
                  background: activeCategory.id === cat.id ? '#FF5722' : '#fff',
                  color: activeCategory.id === cat.id ? '#fff' : '#0f172a',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  textAlign: 'left'
                }}
              >
                <span style={{ fontWeight: 700, fontSize: '1.1rem' }}>{cat.title}</span>
                {activeCategory.id === cat.id ? <ArrowRight size={20} /> : <ArrowUpRight size={20} color="#FF5722" />}
              </button>
            ))}
          </aside>

          {/* Right Content - Sub-service Cards */}
          <main>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
                  gap: '1.5rem' 
                }}
              >
                {activeCategory.subServices.map((sub, idx) => (
                  <motion.div
                    key={idx}
                    style={{
                      padding: '2rem',
                      background: '#fff',
                      borderRadius: '1.5rem',
                      border: '1px solid #f1f5f9',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '1rem'
                    }}
                    whileHover={{ y: -5, boxShadow: '0 12px 30px rgba(0,0,0,0.06)' }}
                  >
                    <h3 style={{ 
                      fontSize: '1.5rem', 
                      fontWeight: 800, 
                      color: '#0f172a',
                      fontFamily: 'Outfit, sans-serif' 
                    }}>
                      {sub.title}
                    </h3>
                    <p style={{ color: '#64748b', lineHeight: 1.6, fontSize: '0.95rem' }}>
                      {sub.description}
                    </p>
                    <Link 
                      to="/contact"
                      style={{
                        marginTop: 'auto',
                        color: '#FF5722',
                        fontWeight: 700,
                        textDecoration: 'none',
                        fontSize: '0.9rem',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px'
                      }}
                    >
                      Enquire Now <ArrowRight size={16} />
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </main>
        </div>

        {/* Added Technologies Section */}
        <div style={{ marginTop: '5rem' }}>
          <TechSection />
        </div>
      </div>

      {/* Media Query Support via hidden style tag */}
      <style>{`
        @media (max-width: 991px) {
          .services-detail-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ServiceDetail;
