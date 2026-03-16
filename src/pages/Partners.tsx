import { motion } from 'framer-motion';
import { Shield, Globe, Zap, Award } from 'lucide-react';

const partnerships = [
  { icon: <Shield size={32} />, name: 'AWS Partner', desc: 'Certified AWS consulting partner providing expert cloud solutions and managed services.' },
  { icon: <Globe size={32} />, name: 'Google Cloud Platform', desc: 'Strategic partner for big data, machine learning, and scalable infrastructure.' },
  { icon: <Zap size={32} />, name: 'Microsoft Azure', desc: 'Gold partner for enterprise cloud transition and hybrid cloud architectures.' },
  { icon: <Award size={32} />, name: 'Cisco Gold', desc: 'Premier partner for network infrastructure and security solutions.' }
];

export default function Partners() {
  return (
    <div className="pt-32 pb-32">
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 6rem' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#ff4d00', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Global Ecosystem</span>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, color: '#0f172a', fontFamily: 'Outfit, sans-serif', margin: '1rem 0', lineHeight: 1.1 }}>
              Our Strategic <span className="gradient-text">Partners</span>
            </h1>
            <p style={{ color: '#64748b', fontSize: '1.1rem', lineHeight: 1.6 }}>
              We collaborate with the world's leading technology providers to deliver comprehensive and robust solutions to our clients.
            </p>
          </motion.div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {partnerships.map((partner, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{ padding: '2.5rem', borderRadius: '24px', background: '#fff', border: '1px solid #f1f5f9', boxShadow: '0 10px 30px rgba(0,0,0,0.03)', textAlign: 'center' }}
            >
              <div style={{ width: '70px', height: '70px', borderRadius: '18px', background: 'rgba(255,77,0,0.08)', color: '#ff4d00', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                {partner.icon}
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', fontFamily: 'Outfit, sans-serif', marginBottom: '1rem' }}>{partner.name}</h3>
              <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: 1.6 }}>{partner.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
