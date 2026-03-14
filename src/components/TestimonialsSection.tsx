import { useState } from 'react';
import { motion } from 'framer-motion';
import AvatarDavid from '../assets/avatar_david.png';
import AvatarSarah from '../assets/avatar_sarah.png';
import AvatarJames from '../assets/avatar_james.png';
import AvatarPriya from '../assets/avatar_priya.png';

const testimonials = [
  {
    avatar: AvatarDavid,
    quote:
      "Their ability to capture our brand essence in every project is unparalleled - an invaluable creative collaborator.",
    name: 'Isabella Rodriguez',
    role: 'CEO & Co-founder',
  },
  {
    avatar: AvatarSarah,
    quote:
      "Creative geniuses who listen, understand, and craft captivating visuals - an agency that truly understands our needs.",
    name: 'Gabrielle Williams',
    role: 'Design Director',
  },
  {
    avatar: AvatarJames,
    quote:
      "Exceeded our expectations with innovative designs that brought our vision to life - a truly remarkable creative agency.",
    name: 'Samantha Johnson',
    role: 'Marketing Head',
  },
  {
    avatar: AvatarPriya,
    quote:
      "The cybersecurity overhaul delivered gave us full confidence. Their experts were thorough, communicative, and timely.",
    name: 'Priya Sharma',
    role: 'IT Director',
  },
  {
     avatar: AvatarDavid,
     quote:
       "CMV built our custom CRM from scratch and integrated it seamlessly. Our efficiency jumped by 45% quickly.",
     name: 'James Osei',
     role: 'Operations Head',
   },
   {
    avatar: AvatarSarah,
    quote:
      "A level of professionalism and technical expertise that is hard to find. They truly become part of your team.",
    name: 'Michael Chen',
    role: 'Product Manager',
  },
];

const TestimonialsSection = () => {
  const [isPaused, setIsPaused] = useState(false);
  
  // Double the testimonials for infinite scroll effect
  const doubledTestimonials = [...testimonials, ...testimonials];

  return (
    <section
      style={{
        padding: '3rem 0',
        background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)',
        overflow: 'hidden',
      }}
    >
      <div className="container" style={{ textAlign: 'center' }}>
        {/* Header content */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           style={{ marginBottom: '3rem' }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 20px',
              borderRadius: '9999px',
              background: 'rgba(255, 77, 0, 0.08)',
              border: '1px solid rgba(255, 77, 0, 0.15)',
              marginBottom: '1rem',
            }}
          >
            <div
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#ff4d00',
              }}
            />
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#ff4d00', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              Testimonials
            </span>
          </div>
          <h2
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
              fontWeight: 800,
              color: '#0f172a',
              fontFamily: 'Outfit, sans-serif',
              marginBottom: '0.5rem',
              lineHeight: 1.1,
            }}
          >
            Trusted by the world's <br />
            <span className="gradient-text">
              fastest growing teams.
            </span>
          </h2>
        </motion.div>

        {/* Infinite Carousel Container */}
        <div 
          style={{ 
            position: 'relative', 
            width: '100%',
            maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
          }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <motion.div
            animate={{
              x: isPaused ? undefined : ['0%', '-50%'],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 40,
                ease: 'linear',
              },
            }}
            style={{
              display: 'flex',
              gap: '2rem',
              width: 'max-content',
              padding: '1rem 0',
            }}
          >
            {doubledTestimonials.map((t, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02, y: -5 }}
                style={{
                  width: 'min(320px, 85vw)',
                  background: '#ffffff',
                  borderRadius: '24px',
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  border: '1px solid #f1f5f9',
                  boxShadow: '0 10px 40px -10px rgba(0,0,0,0.05)',
                  transition: 'background 0.3s ease, border-color 0.3s ease',
                  flexShrink: 0,
                }}
              >
                {/* Orange Quote Icon */}
                <div style={{ color: '#ff4d00', marginBottom: '1.25rem', opacity: 0.9 }}>
                  <svg width="30" height="23" viewBox="0 0 34 26" fill="currentColor">
                    <path d="M0 13C0 5.8203 5.8203 0 13 0V6.5C9.41015 6.5 6.5 9.41015 6.5 13H13V26H0V13ZM21 13C21 5.8203 26.8203 0 34 0V6.5C30.4102 6.5 27.5 9.41015 27.5 13H34V26H21V13Z" />
                  </svg>
                </div>

                <p style={{
                  fontSize: '1rem',
                  fontWeight: 500,
                  color: '#334155',
                  lineHeight: 1.6,
                  margin: '0 0 1.5rem',
                  flex: 1
                }}>
                  "{t.quote}"
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ position: 'relative' }}>
                    <img
                      src={t.avatar}
                      alt={t.name}
                      style={{
                        width: '52px',
                        height: '52px',
                        borderRadius: '50%',
                        objectFit: 'cover',
                        border: '3px solid #f1f5f9'
                      }}
                    />
                    <div style={{
                      position: 'absolute',
                      bottom: 0,
                      right: 0,
                      width: '16px',
                      height: '16px',
                      background: '#10b981',
                      border: '2px solid white',
                      borderRadius: '50%'
                    }} />
                  </div>
                  <div>
                    <h4 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 700, color: '#0f172a', fontFamily: 'Outfit, sans-serif' }}>
                      {t.name}
                    </h4>
                    <p style={{ margin: 0, fontSize: '0.85rem', color: '#64748b', fontWeight: 600, letterSpacing: '0.01em' }}>
                      {t.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
