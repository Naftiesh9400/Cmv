import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AvatarDavid from '../assets/avatar_david.png';
import AvatarSarah from '../assets/avatar_sarah.png';
import AvatarJames from '../assets/avatar_james.png';
import AvatarPriya from '../assets/avatar_priya.png';

const testimonials = [
  {
    avatar: AvatarDavid,
    quote:
      '"CMV Technologies transformed our entire cloud infrastructure. Their team was professional, fast, and incredibly knowledgeable. We saw immediate performance gains and a 40% reduction in downtime. Highly recommended!"',
    name: 'David Kumar',
    role: 'CEO, NexaTech',
  },
  {
    avatar: AvatarSarah,
    quote:
      '"The cybersecurity overhaul CMV delivered gave us full confidence in our data protection. Their experts were thorough, communicative, and delivered on time. An outstanding team to work with."',
    name: 'Sarah Mitchell',
    role: 'CTO, FinCore Solutions',
  },
  {
    avatar: AvatarJames,
    quote:
      '"CMV built our custom CRM from scratch and integrated it seamlessly with our existing systems. Our sales efficiency jumped by 45% within the first quarter. Exceptional work!"',
    name: 'James Osei',
    role: 'Operations Director, LogiLink',
  },
  {
    avatar: AvatarPriya,
    quote:
      '"Migrating our sensitive patient data was a daunting task but CMV handled it with precision and zero downtime. Their HIPAA compliance knowledge was impressive. Truly a reliable IT partner."',
    name: 'Priya Sharma',
    role: 'IT Head, MedCare Network',
  },
];

const TestimonialsSection = () => {
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((a) => (a + 1) % testimonials.length);

  const current = testimonials[active];

  return (
    <section
      style={{
        padding: '3rem 0',
        background: '#f8faff',
        overflow: 'hidden',
      }}
    >
      <div className="container" style={{ maxWidth: '820px' }}>
        {/* Center Header */}
        <motion.div
           initial={{ opacity: 0, y: 24 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 2.5rem' }}
        >
          {/* Badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 20px',
              borderRadius: '9999px',
              background: 'linear-gradient(90deg, rgba(244,63,94,0.1), rgba(251,146,60,0.1))',
              border: '1px solid rgba(244,63,94,0.2)',
              marginBottom: '1.25rem',
            }}
          >
            <div
              style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #F43F5E, #FB923C)',
              }}
            />
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#F43F5E', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Testimonials
            </span>
          </div>
          <h2
            style={{
              fontSize: 'clamp(2rem, 4.5vw, 3rem)',
              fontWeight: 800,
              color: '#0f172a',
              fontFamily: 'Outfit, sans-serif',
              marginBottom: '1rem',
              lineHeight: 1.15,
              textTransform: 'uppercase',
              letterSpacing: '-0.01em',
            }}
          >
            What Our{' '}
            <span
              style={{
                background: 'linear-gradient(90deg, #F43F5E 0%, #FB923C 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Clients Say.
            </span>
          </h2>
          <p style={{ color: '#6b7280', lineHeight: 1.75, fontSize: '0.975rem', margin: '0 0 2rem' }}>
            We're proud to partner with businesses that value innovation, reliability, and results. Here's what some of our clients have to say about working with CMV Technologies.
          </p>
        </motion.div>

        {/* Avatar Row */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '2.5rem',
          }}
        >
          {testimonials.map((t, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              style={{
                padding: 0,
                border: 'none',
                background: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
            >
              <img
                src={t.avatar}
                alt={t.name}
                style={{
                  width: i === active ? '72px' : '52px',
                  height: i === active ? '72px' : '52px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  objectPosition: 'top',
                  border: i === active ? '3px solid #2563EB' : '3px solid transparent',
                  opacity: i === active ? 1 : 0.55,
                  transition: 'all 0.3s ease',
                  boxShadow: i === active ? '0 4px 16px rgba(37,99,235,0.3)' : 'none',
                }}
              />
            </button>
          ))}
        </div>

        {/* Quote */}
        <div style={{ position: 'relative', padding: '0 3rem', minHeight: '160px', textAlign: 'center' }}>
          {/* Left Arrow */}
          <button
            onClick={prev}
            style={{
              position: 'absolute',
              left: '-12px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              border: '1.5px solid #e5e7eb',
              background: '#fff',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.1rem',
              color: '#374151',
              boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#1E293B';
              e.currentTarget.style.color = '#fff';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#fff';
              e.currentTarget.style.color = '#374151';
            }}
          >
            ‹
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
            >
              <p
                style={{
                  fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
                  color: '#374151',
                  lineHeight: 1.85,
                  fontStyle: 'italic',
                  margin: '0 0 2rem',
                }}
              >
                {current.quote}
              </p>
              <div>
                <span
                  style={{
                    fontFamily: 'Outfit, sans-serif',
                    fontSize: '1.25rem',
                    fontWeight: 800,
                    color: '#0f172a',
                    marginRight: '8px',
                  }}
                >
                  {current.name}
                </span>
                <span style={{ fontSize: '0.9rem', color: '#6b7280', fontWeight: 500 }}>
                  {current.role}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Right Arrow */}
          <button
            onClick={next}
            style={{
              position: 'absolute',
              right: '-12px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              border: 'none',
              background: 'linear-gradient(135deg, #F43F5E 0%, #FB923C 100%)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.1rem',
              color: '#fff',
              boxShadow: '0 4px 12px rgba(244,63,94,0.35)',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(-50%) scale(1)'; }}
          >
            ›
          </button>
        </div>

        {/* --- Bottom Button --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginTop: '3rem' }}
        >
          <button
            style={{
              padding: '12px 36px',
              border: '1.5px solid rgba(244,63,94,0.3)',
              borderRadius: '9999px',
              background: 'transparent',
              color: '#F43F5E',
              fontWeight: 700,
              fontSize: '0.9rem',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'linear-gradient(135deg, #F43F5E 0%, #FB923C 100%)';
              e.currentTarget.style.color = '#fff';
              e.currentTarget.style.borderColor = 'transparent';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = '#F43F5E';
              e.currentTarget.style.borderColor = 'rgba(244,63,94,0.3)';
            }}
          >
            Review us
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
