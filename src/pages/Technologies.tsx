import { motion } from 'framer-motion';
import TechSection from '../components/TechSection';

export default function Technologies() {
  return (
    <div className="pt-32 pb-32">
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 5rem' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#ff4d00', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Our Stack</span>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, color: '#0f172a', fontFamily: 'Outfit, sans-serif', margin: '1rem 0', lineHeight: 1.1 }}>
              Future-Proof <span className="gradient-text">Technologies</span>
            </h1>
            <p style={{ color: '#64748b', fontSize: '1.1rem', lineHeight: 1.6 }}>
              We leverage a diverse and modern technology stack to build scalable, secure, and high-performance digital products for global enterprises.
            </p>
          </motion.div>
        </div>
      </div>
      
      <TechSection />

      <div className="container" style={{ marginTop: '5rem', marginBottom: '4rem' }}>
        <div style={{ 
          background: '#ffffff', 
          borderRadius: '32px', 
          padding: '4rem', 
          textAlign: 'center', 
          color: '#0f172a',
          border: '1px solid #f1f5f9',
          boxShadow: '0 20px 50px rgba(0,0,0,0.05)'
        }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, fontFamily: 'Outfit, sans-serif', marginBottom: '1.5rem', color: '#0f172a' }}>Need a custom tech consultation?</h2>
          <p style={{ color: '#64748b', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
            Our architects are ready to help you choose the right technology stack for your specific business requirements and growth goals.
          </p>
          <button style={{ padding: '1.1rem 3rem', borderRadius: '12px', background: '#ff4d00', color: '#fff', fontWeight: 700, border: 'none', cursor: 'pointer', fontSize: '1rem', transition: 'all 0.3s', boxShadow: '0 10px 20px rgba(255, 77, 0, 0.2)' }} onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 15px 30px rgba(255, 77, 0, 0.3)'; }} onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 10px 20px rgba(255, 77, 0, 0.2)'; }}>
            Schedule a Call
          </button>
        </div>
      </div>
    </div>
  );
}
