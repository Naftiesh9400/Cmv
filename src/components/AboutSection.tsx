import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import OfficeImg from '../assets/office_collaboration.png';

const tabs = [
  {
    id: 'mission',
    label: 'Our Mission',
    content: 'At CMV Technologies, our mission is to empower businesses with smart, secure, and scalable technology solutions. We aim to simplify the complex, deliver lasting value, and build trusted partnerships through innovation, reliability, and a deep understanding of our clients\' goals. Empowering businesses through smart, secure, and scalable IT solutions...',
  },
  {
    id: 'vision',
    label: 'Our Vision',
    content: 'To be the global leader in digital transformation, setting the standard for excellence in managed IT services and cloud solutions. We envision a future where technology is a seamless enabler for every organization to reach its full potential and thrive in a connected world.',
  },
  {
    id: 'story',
    label: 'Our Story',
    content: 'Founded with a passion for problem-solving, CMV Technologies started as a small team dedicated to helping local businesses navigate the digital age. Today, we have grown into a global partner for enterprises, known for our technical expertise and unwavering commitment to customer success.',
  },
];



const AboutSection = () => {
  const [activeTab, setActiveTab] = useState('mission');

  return (
    <section style={{ padding: '6rem 0', background: '#fff', overflow: 'hidden' }}>
      <div className="container">
        {/* --- Centered Header --- */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 4rem' }}
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
              About Us
            </span>
          </div>
          <h2
            style={{
              fontSize: 'clamp(2rem, 4.5vw, 3rem)',
              fontWeight: 800,
              color: '#0f172a',
              marginBottom: '1.25rem',
              lineHeight: 1.15,
              fontFamily: 'Outfit, sans-serif',
              textTransform: 'uppercase',
              letterSpacing: '-0.01em',
            }}
          >
            Empowering Business
            <br />
            With{' '}
            <span
              style={{
                background: 'linear-gradient(90deg, #F43F5E 0%, #FB923C 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Technology.
            </span>
          </h2>
          <p
            style={{
              fontSize: '1.05rem',
              color: '#6b7280',
              lineHeight: 1.8,
              margin: '0 auto 2rem',
              maxWidth: '600px'
            }}
          >
            At CMV, we specialize in delivering smart, scalable, and secure IT solutions
            tailored to modern businesses. From cloud infrastructure and cybersecurity to
            IT consulting and managed services.
          </p>
        </motion.div>

        {/* --- Two-column layout --- */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '3.5rem',
            alignItems: 'center',
          }}
        >
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ borderRadius: '2rem', overflow: 'hidden', boxShadow: '0 24px 60px rgba(0,0,0,0.15)' }}
          >
            <img
              src={OfficeImg}
              alt="Team collaborating"
              style={{ width: '100%', height: 'auto', display: 'block', aspectRatio: '4/3', objectFit: 'cover' }}
            />
          </motion.div>

          {/* Right: Tabs + Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
          >
            {/* Tab Buttons */}
            <div
              style={{
                display: 'inline-flex',
                background: '#f3f4f6',
                borderRadius: '9999px',
                padding: '6px',
                gap: '4px',
                width: 'fit-content',
              }}
            >
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    padding: '10px 22px',
                    borderRadius: '9999px',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    fontFamily: 'Inter, sans-serif',
                    cursor: 'pointer',
                    border: 'none',
                    transition: 'all 0.25s ease',
                    background: activeTab === tab.id ? '#1E293B' : 'transparent',
                    color: activeTab === tab.id ? '#fff' : '#6b7280',
                    boxShadow: activeTab === tab.id ? '0 4px 12px rgba(0,0,0,0.15)' : 'none',
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div>

              <AnimatePresence mode="wait">
                <motion.p
                  key={activeTab}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    fontSize: '0.975rem',
                    color: '#374151',
                    lineHeight: 1.85,
                    margin: 0,
                  }}
                >
                  {tabs.find((t) => t.id === activeTab)?.content}{' '}
                  <span
                    style={{ color: '#2563eb', fontWeight: 700, cursor: 'pointer' }}
                  >
                    More
                  </span>
                </motion.p>
              </AnimatePresence>
            </div>


          </motion.div>
        </div>

        {/* --- Bottom Button --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginTop: '4rem' }}
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
              e.currentTarget.style.background = 'linear-gradient(90deg, #F43F5E 0%, #FB923C 100%)';
              e.currentTarget.style.color = '#fff';
              e.currentTarget.style.borderColor = 'transparent';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = '#F43F5E';
              e.currentTarget.style.borderColor = 'rgba(244,63,94,0.3)';
            }}
          >
            Learn More
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
