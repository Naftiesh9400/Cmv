import { motion } from 'framer-motion';
import { Target, Lightbulb, TrendingUp, Cpu } from 'lucide-react';

const solutions = [
  { icon: <Target size={32} />, title: 'Enterprise Digital Strategy', desc: 'Comprehensive roadmaps for digital transformation, aligning technology with business outcomes.' },
  { icon: <Cpu size={32} />, title: 'AI & Intelligent Automation', desc: 'Integrating generative AI and machine learning to automate complex workflows and drive efficiency.' },
  { icon: <Lightbulb size={32} />, title: 'Product Innovation', desc: 'From MVP to full-scale enterprise products, we build scalable digital solutions.' },
  { icon: <TrendingUp size={32} />, title: 'Scalable Cloud Infrastructure', desc: 'Modernizing legacy systems with cloud-native architectures for resiliency and growth.' }
];

export default function Solutions() {
  return (
    <div className="pt-32 pb-32">
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 6rem' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#ff4d00', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Solutions for Scale</span>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, color: '#0f172a', fontFamily: 'Outfit, sans-serif', margin: '1rem 0', lineHeight: 1.1 }}>
              Transforming Challenges into <span className="gradient-text">Success</span>
            </h1>
            <p style={{ color: '#64748b', fontSize: '1.1rem', lineHeight: 1.6 }}>
              Our enterprise solutions are designed to handle complex business requirements and provide measurable competitive advantages.
            </p>
          </motion.div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
          {solutions.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
            >
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'linear-gradient(135deg, #ff4d00 0%, #ff8c00 100%)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 20px rgba(255,77,0,0.2)' }}>
                {item.icon}
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0f172a', fontFamily: 'Outfit, sans-serif' }}>{item.title}</h3>
              <p style={{ color: '#64748b', fontSize: '1.05rem', lineHeight: 1.7 }}>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
