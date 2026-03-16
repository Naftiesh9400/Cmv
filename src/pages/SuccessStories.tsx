import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const cases = [
  {
    title: 'Financial Cloud Migration',
    client: 'Secure Bank Corp',
    impact: '40% Cost Reduction',
    desc: 'Led a multi-phase cloud migration for a leading financial institution, ensuring data security and zero downtime.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop'
  },
  {
    title: 'AI Supply Chain Optimization',
    client: 'LogiGlobal',
    impact: '25% Efficiency Increase',
    desc: 'Implemented a generative AI solution to optimize warehouse routes and inventory management.',
    image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=800&auto=format&fit=crop'
  }
];

export default function SuccessStories() {
  return (
    <div className="pt-32 pb-32">
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 5rem' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#ff4d00', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Case Studies</span>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, color: '#0f172a', fontFamily: 'Outfit, sans-serif', margin: '1rem 0', lineHeight: 1.1 }}>
              Real Impact, <span className="gradient-text">Real Results</span>
            </h1>
            <p style={{ color: '#64748b', fontSize: '1.1rem', lineHeight: 1.6 }}>
              Explore how we've helped global enterprises overcome complex challenges and achieve digital excellence.
            </p>
          </motion.div>
        </div>

        <div style={{ display: 'grid', gap: '8rem' }}>
          {cases.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}
            >
              <div style={{ position: 'relative', borderRadius: '32px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
                <img src={item.image} alt={item.title} style={{ width: '100%', height: 'auto', display: 'block' }} />
              </div>
              <div style={{ order: i % 2 === 0 ? 0 : -1 }}>
                <span style={{ background: 'rgba(255,77,0,0.1)', color: '#ff4d00', padding: '6px 16px', borderRadius: '99px', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '1.5rem', display: 'inline-block' }}>{item.client}</span>
                <h3 style={{ fontSize: '2rem', fontWeight: 800, color: '#0f172a', fontFamily: 'Outfit, sans-serif', marginBottom: '1rem' }}>{item.title}</h3>
                <p style={{ color: '#64748b', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '2rem' }}>{item.desc}</p>
                <div style={{ display: 'flex', gap: '2rem', borderTop: '1px solid #f1f5f9', paddingTop: '2rem' }}>
                  <div>
                    <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#ff4d00' }}>{item.impact}</div>
                    <div style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 600 }}>Performance Impact</div>
                  </div>
                  <button style={{ marginLeft: 'auto', width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(255, 77, 0, 0.1)', color: '#ff4d00', border: '1px solid rgba(255, 77, 0, 0.2)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s' }} onMouseEnter={e => { e.currentTarget.style.background = '#ff4d00'; e.currentTarget.style.color = '#fff'; }} onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255, 77, 0, 0.1)'; e.currentTarget.style.color = '#ff4d00'; }}>
                    <ArrowUpRight size={24} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
