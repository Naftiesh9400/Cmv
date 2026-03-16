import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe, Smartphone, Code2, Cloud, Database,
  Brain, Building2, Network, Palette, DollarSign,
  ArrowRight,
} from "lucide-react";
import { serviceCategories } from "../data/serviceData";

// Icon mapping for 10 categories
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

export default function ServicesSection() {
  const [activeId, setActiveId] = useState(serviceCategories[0].id);
  const active = serviceCategories.find((s) => s.id === activeId)!;

  return (
    <section id="service" className="services-section">
      <div className="services-container">

        {/* ── Section Header ── */}
        <div className="section-header">
          <div className="badge">
            <div className="badge-dot" />
            <span className="badge-text">What We Offer</span>
          </div>
          <h2 className="section-title">Our Core Services</h2>
          <p className="section-subtitle">
            End-to-end technology solutions designed to accelerate your business growth through innovation and technical excellence.
          </p>
        </div>

        {/* ── Main Layout ── */}
        <div className="services-main-layout">

          {/* ── Left Sidebar Menu ── */}
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

          {/* ── Right Card Grid (Desktop) ── */}
          <div className="services-grid-panel">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeId}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="desktop-grid"
              >
                {active.subServices.map((sub, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.05 }}
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

      <style>{`
        .services-section {
          background: #f8fafc;
          padding: 100px 24px;
          font-family: 'Outfit', sans-serif;
          overflow: hidden;
        }

        .services-container {
          max-width: 1280px;
          margin: 0 auto;
        }

        /* Header */
        .section-header {
          text-align: center;
          margin-bottom: 70px;
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 18px;
          background: rgba(255, 77, 0, 0.08);
          border: 1px solid rgba(255, 77, 0, 0.15);
          border-radius: 999px;
          margin-bottom: 20px;
        }

        .badge-dot {
          width: 8px;
          height: 8px;
          background: #ff4d00;
          border-radius: 50%;
        }

        .badge-text {
          font-size: 0.8rem;
          font-weight: 800;
          color: #ff4d00;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .section-title {
          font-size: clamp(2.5rem, 5vw, 3.5rem);
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 16px;
          line-height: 1.1;
        }

        .section-subtitle {
          font-size: 1.15rem;
          color: #64748b;
          max-width: 650px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* Layout */
        .services-main-layout {
          display: flex;
          gap: 40px;
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
          position: relative;
        }

        .service-menu-btn:hover:not(.active) {
          border-color: #ff4d00;
          color: #ff4d00;
          transform: translateX(5px);
          background: #fffaf9;
        }

        .service-menu-btn.active {
          background: #ff4d00;
          border-color: #ff4d00;
          color: #ffffff;
          box-shadow: 0 10px 25px rgba(255, 77, 0, 0.2);
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
          transition: all 0.3s;
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
          opacity: 0.2;
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

        .card-top {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 16px;
        }

        .card-icon {
          font-size: 2rem;
        }

        .card-title {
          font-size: 1.4rem;
          font-weight: 800;
          color: #0f172a;
          margin: 0;
          line-height: 1.2;
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
          font-size: 0.9rem;
          margin-top: auto;
          transition: gap 0.2s;
        }

        .card-link:hover {
          gap: 12px;
        }

        /* Mobile Adjustments */
        .mobile-accordion { display: none; }

        @media (max-width: 1024px) {
          .services-main-layout {
            flex-direction: column;
            gap: 16px;
          }
          .services-sidebar {
            width: 100%;
          }
          .services-grid-panel {
            display: none;
          }
          .mobile-accordion {
            display: block;
          }

          .service-menu-btn.active .menu-arrow {
            transform: rotate(90deg);
          }

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

          .mobile-card-header {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
          }

          .sub-icon { font-size: 1.5rem; }

          .sub-title {
            font-size: 0.95rem;
            font-weight: 800;
            color: #0f172a;
            margin: 0;
            line-height: 1.2;
          }

          .sub-desc {
            font-size: 0.75rem;
            color: #64748b;
            line-height: 1.5;
            margin-bottom: 12px;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }

          .read-more-link {
            font-size: 0.75rem;
            font-weight: 800;
            color: #ff4d00;
            display: flex;
            align-items: center;
            gap: 4px;
          }
        }

        @media (max-width: 640px) {
          .section-title { font-size: 2.25rem; }
          .services-section { padding: 60px 16px; }
        }
      `}</style>
    </section>
  );
}