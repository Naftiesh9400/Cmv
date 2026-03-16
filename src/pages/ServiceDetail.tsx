import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Globe, Smartphone, Code2, Cloud, Database,
  Brain, Building2, Network, Palette, DollarSign,
  ArrowRight,
} from 'lucide-react';
import { serviceCategories } from '../data/serviceData';
import TechSection from '../components/TechSection';

// Icon mapping to match ServicesSection
const categoryIcons: Record<string, React.ReactNode> = {
  'web-dev': <Globe size={18} />,
  'mobile-dev': <Smartphone size={18} />,
  'software-dev': <Code2 size={18} />,
  'cloud-mgmt': <Cloud size={18} />,
  'data-eng': <Database size={18} />,
  'ai-ml': <Brain size={18} />,
  'enterprise-dev': <Building2 size={18} />,
  'sys-arch': <Network size={18} />,
  'ui-ux': <Palette size={18} />,
  'cloud-cost': <DollarSign size={18} />,
};

const ServiceDetail = () => {
  const { categorySlug } = useParams();
  const [activeId, setActiveId] = useState(serviceCategories[0].id);

  useEffect(() => {
    if (categorySlug) {
      const category = serviceCategories.find(c => c.slug === categorySlug);
      if (category) setActiveId(category.id);
    }
  }, [categorySlug]);

  const active = serviceCategories.find((s) => s.id === activeId) || serviceCategories[0];

  return (
    <div className="service-detail-page">
      {/* ── Page Header ── */}
      <div className="page-header">
        <div className="container">
          <div className="header-flex">
            <div className="header-text">
              <div className="badge">
                <div className="badge-dot" />
                <span className="badge-text">Expert Solutions</span>
              </div>
              <h1 className="main-title">
                Digital Transformation <br />
                <span className="orange-text">Services</span>
              </h1>
            </div>
            <div className="header-cta">
              <p className="subtitle">
                Helping businesses navigate the digital landscape with state-of-the-art technology and strategic innovation.
              </p>
              <Link to="/contact" className="cta-button">
                Schedule a Consultation <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── Main Services Content (Matching Home Design) ── */}
      <div className="container py-content">
        <div className="services-main-layout">
          {/* Sidebar Menu */}
          <aside className="services-sidebar">
            <div className="sidebar-menu">
              {serviceCategories.map((svc) => {
                const isActive = svc.id === activeId;
                return (
                  <div key={svc.id} className="sidebar-item-wrapper">
                    <button
                      onClick={() => setActiveId(svc.id)}
                      className={`service-menu-btn ${isActive ? "active" : ""}`}
                    >
                      <span className="menu-icon">{categoryIcons[svc.id] || <Code2 size={18} />}</span>
                      <span className="menu-label">{svc.title}</span>
                      <ArrowRight className="menu-arrow" size={16} />
                    </button>

                    {/* Mobile Accordion Content */}
                    <div className="mobile-accordion">
                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <div className="mobile-grid">
                              {svc.subServices.map((sub, i) => (
                                <Link to={`/services/${svc.slug}/${sub.slug}`} key={i} className="mobile-card">
                                  <div className="mobile-card-header">
                                    <span className="sub-icon">{sub.icon || '🚀'}</span>
                                    <h4 className="sub-title">{sub.title}</h4>
                                  </div>
                                  <p className="sub-desc">{sub.description}</p>
                                  <span className="read-more-link">Read More <ArrowRight size={12} /></span>
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                );
              })}
            </div>
          </aside>

          {/* Desktop Grid Layout */}
          <div className="services-grid-panel">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeId}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="desktop-grid"
              >
                {active.subServices.map((sub, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.04 }}
                    className="service-card"
                  >
                    <div className="card-top">
                      <span className="card-icon">{sub.icon || '🚀'}</span>
                      <h3 className="card-title">{sub.title}</h3>
                    </div>
                    <p className="card-description">{sub.description}</p>
                    <Link to={`/services/${active.slug}/${sub.slug}`} className="card-link">
                      Read More <ArrowRight size={16} />
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* ── Technologies & Tools ── */}
      <div className="tech-wrapper">
        <TechSection />
      </div>

      <style>{`
        .service-detail-page {
          background: #fff;
          min-height: 100vh;
          font-family: 'Outfit', sans-serif;
        }

        .py-content {
          padding-top: 60px;
          padding-bottom: 100px;
        }

        /* Page Header */
        .page-header {
          padding-top: 140px;
          padding-bottom: 60px;
          border-bottom: 1px solid #f1f5f9;
        }

        .header-flex {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          flex-wrap: wrap;
          gap: 40px;
        }

        .main-title {
          font-size: clamp(2.5rem, 5vw, 3.5rem);
          font-weight: 800;
          color: #0f172a;
          line-height: 1.1;
          margin: 16px 0;
        }

        .orange-text {
          color: #ff4d00;
        }

        .header-cta {
          max-width: 450px;
        }

        .subtitle {
          font-size: 1.1rem;
          color: #64748b;
          line-height: 1.6;
          margin-bottom: 24px;
        }

        .cta-button {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 28px;
          background: #ff4d00;
          color: #fff;
          border-radius: 999px;
          font-weight: 700;
          text-decoration: none;
          box-shadow: 0 10px 25px rgba(255, 77, 0, 0.2);
          transition: all 0.3s;
        }

        .cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 30px rgba(255, 77, 0, 0.3);
        }

        /* Sidebar & Grid Reuse Styles (Consolidated) */
        .services-main-layout {
          display: flex;
          gap: 48px;
          align-items: stretch;
        }

        .services-sidebar {
          width: 320px;
          flex-shrink: 0;
        }

        .sidebar-menu {
          display: flex;
          flex-direction: column;
          gap: 12px;
          height: 100%;
        }

        .service-menu-btn {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 16px 20px;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          cursor: pointer;
          text-align: left;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          color: #1e293b;
        }

        .service-menu-btn.active {
          background: #ff4d00;
          border-color: #ff4d00;
          color: #ffffff;
          box-shadow: 0 10px 25px rgba(255, 77, 0, 0.15);
        }

        .menu-icon {
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
          background: rgba(255, 77, 0, 0.08);
          color: #ff4d00;
        }

        .service-menu-btn.active .menu-icon {
          background: rgba(255, 255, 255, 0.2);
          color: #ffffff;
        }

        .menu-label {
          flex: 1;
          font-weight: 700;
          font-size: 0.95rem;
        }

        .menu-arrow {
          opacity: 0.3;
          transition: all 0.3s;
        }

        .service-menu-btn.active .menu-arrow {
          opacity: 1;
          transform: translateX(4px);
        }

        /* Desktop Grid */
        .services-grid-panel {
          flex: 1;
        }

        .desktop-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-template-rows: repeat(3, 1fr);
          gap: 24px;
          height: 100%;
        }

        .service-card {
          background: #ffffff;
          border-radius: 20px;
          padding: 32px;
          border: 1px solid #f1f5f9;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: all 0.3s ease;
          height: 100%;
          min-height: 220px;
        }

        .service-card:hover {
          transform: translateY(-8px);
          border-color: #ff4d00;
          box-shadow: 0 20px 40px rgba(255, 77, 0, 0.08);
        }

        .card-title {
          font-size: 1.4rem;
          font-weight: 800;
          margin: 0;
        }

        .card-description {
          font-size: 1rem;
          color: #64748b;
          line-height: 1.6;
          margin-bottom: 24px;
        }

        .card-link {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #ff4d00;
          font-weight: 800;
          text-decoration: none;
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 4px 14px;
          background: rgba(255, 77, 0, 0.08);
          border: 1px solid rgba(255, 77, 0, 0.15);
          border-radius: 999px;
        }

        .badge-dot {
          width: 7px;
          height: 7px;
          background: #ff4d00;
          border-radius: 50%;
        }

        .badge-text {
          font-size: 0.75rem;
          font-weight: 800;
          color: #ff4d00;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .tech-wrapper {
          padding-bottom: 80px;
        }

        /* Mobile */
        .mobile-accordion { display: none; }

        @media (max-width: 1024px) {
          .services-main-layout { flex-direction: column; gap: 16px; }
          .services-sidebar { width: 100%; }
          .services-grid-panel { display: none; }
          .mobile-accordion { display: block; }
          
          .mobile-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
            padding: 16px 0;
          }

          .mobile-card {
            background: #ffffff;
            border: 1px solid #f1f5f9;
            border-radius: 16px;
            padding: 20px 16px;
            text-decoration: none;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            min-height: 140px;
          }

          .sub-title { font-size: 0.95rem; font-weight: 800; color: #0f172a; margin: 0; }
          .sub-desc { font-size: 0.75rem; color: #64748b; margin-top: 8px; line-height: 1.4; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
          .read-more-link { font-size: 0.75rem; font-weight: 800; color: #ff4d00; display: flex; align-items: center; gap: 4px; margin-top: 10px; }
          
          .service-menu-btn.active .menu-arrow { transform: rotate(90deg); }
          .header-flex { flex-direction: column; align-items: flex-start; }
          .page-header { padding-top: 100px; }
        }
      `}</style>
    </div>
  );
};

export default ServiceDetail;
