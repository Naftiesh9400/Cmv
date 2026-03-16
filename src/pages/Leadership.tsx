import { motion } from 'framer-motion';
import { Linkedin, Mail, Twitter } from 'lucide-react';

const leaders = [
  {
    name: 'Ankur Sharma',
    role: 'Founder & CEO',
    bio: 'Visionary leader with 15+ years of experience in digital transformation and enterprise architecture.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
    social: { linkedin: '#', twitter: '#', email: 'ankur@cmv-global.com' }
  },
  {
    name: 'Mahek Sharma',
    role: 'Chief Technology Officer',
    bio: 'Expert in cloud-native systems and AI integration, formerly at top-tier Silicon Valley firms.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop',
    social: { linkedin: '#', twitter: '#', email: 'mahek@cmv-global.com' }
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Head of Operations',
    bio: 'Strategic operations expert focused on scaling global delivery teams and client success.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop',
    social: { linkedin: '#', twitter: '#', email: 'marcus@cmv-global.com' }
  }
];

export default function Leadership() {
  return (
    <div className="pt-32 pb-32">
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 6rem' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#ff4d00', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Our Leadership</span>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, color: '#0f172a', fontFamily: 'Outfit, sans-serif', margin: '1rem 0', lineHeight: 1.1 }}>
              The Minds Behind <span className="gradient-text">The Innovation</span>
            </h1>
            <p style={{ color: '#64748b', fontSize: '1.1rem', lineHeight: 1.6 }}>
              Meet the team driving our mission to transform businesses through cutting-edge technology and strategic excellence.
            </p>
          </motion.div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem' }}>
          {leaders.map((leader, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{ background: '#fff', borderRadius: '24px', overflow: 'hidden', border: '1px solid #f1f5f9', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}
            >
              <div style={{ position: 'relative', paddingTop: '100%', overflow: 'hidden' }}>
                <img src={leader.image} alt={leader.name} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '2rem' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0f172a', fontFamily: 'Outfit, sans-serif', margin: '0 0 0.5rem' }}>{leader.name}</h3>
                <p style={{ color: '#ff4d00', fontWeight: 700, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem' }}>{leader.role}</p>
                <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>{leader.bio}</p>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <a href={leader.social.linkedin} style={{ color: '#0f172a', transition: 'color 0.3s' }} onMouseEnter={e => e.currentTarget.style.color = '#ff4d00'} onMouseLeave={e => e.currentTarget.style.color = '#0f172a'}>
                    <Linkedin size={20} />
                  </a>
                  <a href={leader.social.twitter} style={{ color: '#0f172a', transition: 'color 0.3s' }} onMouseEnter={e => e.currentTarget.style.color = '#ff4d00'} onMouseLeave={e => e.currentTarget.style.color = '#0f172a'}>
                    <Twitter size={20} />
                  </a>
                  <a href={`mailto:${leader.social.email}`} style={{ color: '#0f172a', transition: 'color 0.3s' }} onMouseEnter={e => e.currentTarget.style.color = '#ff4d00'} onMouseLeave={e => e.currentTarget.style.color = '#0f172a'}>
                    <Mail size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
