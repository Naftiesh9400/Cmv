import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, MessageSquare, Zap, Shield, Globe } from 'lucide-react';
import { serviceCategories } from '../data/serviceData';

export default function ServiceItemDetail() {
  const { categorySlug, serviceSlug } = useParams();
  const navigate = useNavigate();

  const category = serviceCategories.find(c => c.slug === categorySlug);
  const service = category?.subServices.find(s => s.slug === serviceSlug);

  useEffect(() => {
    if (!service && categorySlug && serviceSlug) {
      // If not found, maybe redirect to services
      // navigate('/services');
    }
    if (service) {
      document.title = `${service.title} | CMV Technologies`;
    }
    window.scrollTo(0, 0);
  }, [service, categorySlug, serviceSlug, navigate]);

  if (!service) {
    return (
      <div className="pt-32 pb-32 container text-center">
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Service Not Found</h2>
        <Link to="/services" style={{ color: '#ff4d00', fontWeight: 700 }}>Back to Services</Link>
      </div>
    );
  }

  return (
    <div style={{ background: '#fff', paddingTop: '140px', paddingBottom: '80px' }}>
      <div className="container" style={{ maxWidth: '1000px' }}>
        {/* Back Link */}
        <Link 
          to={`/services/${categorySlug}`} 
          style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '8px', 
            color: '#64748b', 
            textDecoration: 'none', 
            fontSize: '0.9rem',
            fontWeight: 600,
            marginBottom: '2rem'
          }}
        >
          <ArrowLeft size={18} /> Back to {category?.title}
        </Link>

        {/* Hero Section */}
        <header style={{ marginBottom: '4rem' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div style={{ 
              display: 'inline-block', 
              padding: '6px 20px', 
              background: 'rgba(255,77,0,0.08)', 
              color: '#ff4d00', 
              borderRadius: '9999px', 
              fontSize: '0.8rem', 
              fontWeight: 800,
              marginBottom: '1.5rem',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              {category?.title}
            </div>
            <h1 style={{ 
              fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
              fontWeight: 800, 
              color: '#0f172a', 
              fontFamily: 'Outfit, sans-serif', 
              lineHeight: 1.1,
              marginBottom: '1.5rem',
              letterSpacing: '-0.02em'
            }}>
              {service.title}
            </h1>
            <p style={{ fontSize: '1.2rem', color: '#64748b', lineHeight: 1.6, maxWidth: '700px' }}>
              {service.description}
            </p>
          </motion.div>
        </header>

        {/* Main Content */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', marginBottom: '5rem' }}>
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0f172a', fontFamily: 'Outfit, sans-serif', marginBottom: '1.5rem' }}>
              Overview
            </h2>
            <div style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#475569', whiteSpace: 'pre-line' }}>
              {service.content || `Our ${service.title} services are built on years of industrial experience and technical mastery. We focus on delivering high-quality, scalable solutions that drive measurable business value.`}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}
            style={{ 
              background: '#f8fafc', 
              padding: '2.5rem', 
              borderRadius: '2rem', 
              border: '1px solid #e2e8f0',
              height: 'fit-content'
            }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0f172a', fontFamily: 'Outfit, sans-serif', marginBottom: '2rem' }}>
              Key Features
            </h2>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {(service.features || ['Custom Strategy', 'Performance Tuning', 'Security Audits', '24/7 Support']).map((feature, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <CheckCircle2 size={20} style={{ color: '#ff4d00', marginTop: '3px', flexShrink: 0 }} />
                  <span style={{ fontSize: '1.05rem', fontWeight: 600, color: '#334155' }}>{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Trust Badges Section */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginBottom: '6rem' }}>
          {[
            { icon: <Zap size={24} />, title: 'Rapid Delivery', desc: 'Accelerated development cycles' },
            { icon: <Shield size={24} />, title: 'Enterprise Security', desc: 'Bank-grade protection protocols' },
            { icon: <Globe size={24} />, title: 'Global Scale', desc: 'Built for worldwide distribution' }
          ].map((item, i) => (
            <div key={i} style={{ textAlign: 'center', padding: '2rem', borderRadius: '20px', background: '#fff', border: '1px solid #f1f5f9' }}>
              <div style={{ margin: '0 auto 1rem', width: '50px', height: '50px', borderRadius: '12px', background: 'rgba(255,77,0,0.1)', color: '#ff4d00', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {item.icon}
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '0.5rem' }}>{item.title}</h3>
              <p style={{ fontSize: '0.9rem', color: '#64748b' }}>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div style={{ 
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', 
          borderRadius: '32px', 
          padding: '4rem 3rem', 
          textAlign: 'center', 
          color: '#fff',
          boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, fontFamily: 'Outfit, sans-serif', marginBottom: '1.5rem' }}>
            Ready to get started?
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: 1.6 }}>
            Let's discuss how our {service.title} expertise can help your business reach new heights.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link 
              to="/contact" 
              style={{ 
                padding: '16px 40px', 
                background: '#ff4d00', 
                color: '#fff', 
                borderRadius: '9999px', 
                textDecoration: 'none', 
                fontWeight: 800,
                fontSize: '1rem',
                transition: 'all 0.3s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              Start Your Project
            </Link>
            <Link 
              to="/contact" 
              style={{ 
                padding: '16px 40px', 
                background: 'rgba(255,255,255,0.1)', 
                color: '#fff', 
                borderRadius: '9999px', 
                textDecoration: 'none', 
                fontWeight: 800,
                fontSize: '1rem',
                border: '1px solid rgba(255,255,255,0.2)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <MessageSquare size={18} /> Talk to Expert
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
