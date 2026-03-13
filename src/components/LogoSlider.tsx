import { motion } from 'framer-motion';
import logo1 from '../assets/logo/747.png';
import logo2 from '../assets/logo/Google_2015_logo.svg.webp';
import logo3 from '../assets/logo/Microsoft-Logo-PNG-Pic.png';

const logos = [
  { name: 'Partner 1', url: logo1 },
  { name: 'Partner 2', url: logo2 },
  { name: 'Partner 3', url: logo3 },
  { name: 'Partner 1', url: logo1 },
  { name: 'Partner 2', url: logo2 },
  { name: 'Partner 3', url: logo3 },
];

const LogoSlider = () => {
  // Duplicate logos once for seamless infinite loop
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div style={{ padding: '3rem 0', background: '#fff', borderTop: '1px solid #f1f5f9', borderBottom: '1px solid #f1f5f9', overflow: 'hidden', userSelect: 'none' }}>
      <div className="container" style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '4px 16px',
            borderRadius: '9999px',
            background: '#f8fafc',
            border: '1px solid #e2e8f0',
            marginBottom: '1rem',
          }}
        >
          <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#64748b', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            Trusted by Industry Leaders
          </span>
        </div>
      </div>
      
      <div style={{ display: 'flex', overflow: 'hidden', position: 'relative', width: '100%' }}>
        {/* Gradient fades at edges */}
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '100px', background: 'linear-gradient(to right, #fff, transparent)', zIndex: 10 }}></div>
        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '100px', background: 'linear-gradient(to left, #fff, transparent)', zIndex: 10 }}></div>

        <motion.div
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            },
          }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4rem',
            whiteSpace: 'nowrap',
            width: 'max-content',
          }}
        >
          {duplicatedLogos.map((logo, idx) => (
            <div
              key={idx}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0 2rem',
                minWidth: '200px'
              }}
            >
              <img
                src={logo.url}
                alt={logo.name}
                style={{
                  height: '40px',
                  width: 'auto',
                  objectFit: 'contain',
                  filter: 'grayscale(1)',
                  opacity: 0.4,
                  transition: 'all 0.4s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.filter = 'grayscale(0)';
                  e.currentTarget.style.opacity = '1';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.filter = 'grayscale(1)';
                  e.currentTarget.style.opacity = '0.4';
                }}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default LogoSlider;