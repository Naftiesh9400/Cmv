import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import OfficeImg from '../assets/office_collaboration.png';

const reasons = [
  {
    title: 'Our Mission',
    content: "At CMV Technologies, our mission is to empower businesses with smart, secure, and scalable technology solutions. We aim to simplify the complex, deliver lasting value, and build trusted partnerships through innovation, reliability, and a deep understanding of our clients' goals.",
  },
  {
    title: 'Our Vision',
    content: "To be the global leader in digital transformation, setting the standard for excellence in managed IT services and cloud solutions. We envision a future where technology is a seamless enabler for every organization to reach its full potential and thrive in a connected world.",
  },
  {
    title: 'Our Story',
    content: "Founded with a passion for problem-solving, CMV Technologies started as a small team dedicated to helping local businesses navigate the digital age. Today, we have grown into a global partner for enterprises, known for our technical expertise and unwavering commitment to customer success.",
  },
];

const AboutSection = ({ showViewAll = true }: { showViewAll?: boolean }) => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="about" style={{ padding: '3.5rem 0', background: '#fff', overflow: 'hidden' }}>
      <div className="container">
        <div className="responsive-grid-2" style={{ alignItems: 'flex-start', gap: '4rem' }}>
          
          {/* Left: Image with Overlaid Badge */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ position: 'relative' }}
          >
            <div style={{ borderRadius: '2rem', overflow: 'hidden', boxShadow: '0 24px 60px rgba(0,0,0,0.12)' }}>
              <img
                src={OfficeImg}
                alt="Team working"
                style={{ width: '100%', height: 'auto', display: 'block', aspectRatio: '1/1', objectFit: 'cover' }}
              />
            </div>
            
            {/* Soft Green Badge from Image */}
            <div
              style={{
                position: 'absolute',
                bottom: '20px',
                left: '20px',
                background: 'rgba(255, 77, 0, 0.1)',
                backdropFilter: 'blur(8px)',
                padding: '10px 24px',
                borderRadius: '9999px',
                fontSize: '0.9rem',
                fontWeight: 700,
                color: '#ff4d00',
                border: '1px solid rgba(255, 77, 0, 0.2)',
                boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
              }}
            >
              About Us
            </div>
          </motion.div>

          {/* Right: Text + Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div style={{ marginBottom: '3rem' }}>
              <span style={{ fontSize: '1rem', color: '#94a3b8', fontWeight: 500, display: 'block', marginBottom: '8px' }}>
                Why Choose Us
              </span>
              <h2
                style={{
                  fontSize: 'clamp(2.25rem, 4vw, 3.25rem)',
                  fontWeight: 800,
                  color: '#0f172a',
                  lineHeight: 1.1,
                  fontFamily: 'Outfit, sans-serif',
                  letterSpacing: '-0.02em',
                }}
              >
                Built on Trust,<br />
                Driven by Results
              </h2>
            </div>

            {/* Accordion List */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {reasons.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    borderBottom: '1px solid #f1f5f9',
                    padding: '1.5rem 0',
                    cursor: 'pointer',
                  }}
                  onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '1rem',
                    }}
                  >
                    <h3
                      style={{
                        fontSize: '1.2rem',
                        fontWeight: 700,
                        color: openIndex === idx ? '#0f172a' : '#475569',
                        transition: 'color 0.3s ease',
                      }}
                    >
                      {item.title}
                    </h3>
                    <motion.span
                      animate={{ rotate: openIndex === idx ? 180 : 0 }}
                      style={{ fontSize: '0.8rem', color: '#94a3b8' }}
                    >
                      ▼
                    </motion.span>
                  </div>

                  <AnimatePresence>
                    {openIndex === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        style={{ overflow: 'hidden' }}
                      >
                        <p
                          style={{
                            fontSize: '0.975rem',
                            color: '#64748b',
                            lineHeight: 1.6,
                            marginTop: '1rem',
                            paddingRight: '2rem',
                          }}
                        >
                          {item.content}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>
        </div>


      </div>

        {/* --- Bottom Button --- */}
        {showViewAll && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginTop: '4rem' }}
          >
            <Link
              to="/about"
              style={{
                display: 'inline-block',
                padding: '12px 36px',
                border: '1px solid rgba(255, 77, 0, 0.2)',
                borderRadius: '9999px',
                background: '#fff',
                color: '#ff4d00',
                fontWeight: 700,
                fontSize: '0.9rem',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, #ff4d00 0%, #ff8c00 100%)';
                e.currentTarget.style.color = '#fff';
                e.currentTarget.style.borderColor = 'transparent';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#fff';
                e.currentTarget.style.color = '#ff4d00';
                e.currentTarget.style.borderColor = 'rgba(255, 77, 0, 0.2)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Learn More
            </Link>
          </motion.div>
        )}
    </section>
  );
};

export default AboutSection;
