import { motion } from 'framer-motion';
import { Hospital, Landmark, ShoppingCart, Factory, Smartphone, Globe } from 'lucide-react';

const industryList = [
  { icon: <Hospital size={28} />, title: 'Healthcare', desc: 'Patient management systems, medical AI, and HIPAA-compliant infrastructures.' },
  { icon: <Landmark size={28} />, title: 'FinTech', desc: 'Secure payment gateways, blockchain integration, and algorithmic trading platforms.' },
  { icon: <ShoppingCart size={28} />, title: 'E-commerce', desc: 'Omnichannel retail solutions, AI-driven recommendation engines, and supply chain tech.' },
  { icon: <Factory size={28} />, title: 'Manufacturing', desc: 'Smart factory solutions, predictive maintenance, and IoT-enabled monitoring.' },
  { icon: <Smartphone size={28} />, title: 'Media & Entertainment', desc: 'Streaming platforms, digital rights management, and immersive AR/VR experiences.' },
  { icon: <Globe size={28} />, title: 'Public Sector', desc: 'E-governance tools, digital public services, and large-scale data management.' }
];

export default function Industries() {
  return (
    <div className="pt-32 pb-32">
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 6rem' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#ff4d00', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Domain Expertise</span>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, color: '#0f172a', fontFamily: 'Outfit, sans-serif', margin: '1rem 0', lineHeight: 1.1 }}>
              Industries We <span className="gradient-text">Empower</span>
            </h1>
            <p style={{ color: '#64748b', fontSize: '1.1rem', lineHeight: 1.6 }}>
              Deep technical knowledge paired with vertical-specific business insight allows us to deliver exceptional value in various sectors.
            </p>
          </motion.div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
          {industryList.map((ind, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{ padding: '2.5rem', borderRadius: '24px', background: '#f8fafc', border: '1px solid #f1f5f9', display: 'flex', flexDirection: 'column', gap: '1rem' }}
            >
              <div style={{ width: '56px', height: '56px', borderRadius: '14px', background: '#fff', color: '#ff4d00', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                {ind.icon}
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0f172a', fontFamily: 'Outfit, sans-serif' }}>{ind.title}</h3>
              <p style={{ color: '#64748b', fontSize: '1rem', lineHeight: 1.6 }}>{ind.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
