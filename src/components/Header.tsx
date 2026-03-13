import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Logo from '../assets/qwq 2.png';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Service', path: '/service' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <>
      {/* Fixed Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: '1rem 0',
          transition: 'background 0.3s ease, box-shadow 0.3s ease',
          background: scrolled
            ? 'rgba(255, 255, 255, 0.95)'
            : 'rgba(255, 255, 255, 0.85)',
          backdropFilter: 'blur(14px)',
          WebkitBackdropFilter: 'blur(14px)',
          borderBottom: scrolled ? '1px solid rgba(229,231,235,0.6)' : '1px solid transparent',
          boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.06)' : 'none',
        }}
      >
        <div className="container flex items-center justify-between">
          {/* Logo */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
            <img src={Logo} alt="CMV Logo" style={{ height: '52px', width: 'auto', objectFit: 'contain' }} />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`nav-pill ${location.pathname === link.path ? 'active' : ''}`}
                onMouseEnter={(e) => e.currentTarget.classList.add('active')}
                onMouseLeave={(e) => { if (location.pathname !== link.path) e.currentTarget.classList.remove('active'); }}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button className="hidden md:block btn btn-primary" onClick={() => navigate('/contact')}>
              Get in Touch
            </button>

            {/* Mobile Menu Toggle */}
            <button
              aria-label="Toggle menu"
              onClick={() => setIsOpen(!isOpen)}
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                width: '44px',
                height: '44px',
                borderRadius: '10px',
                border: 'none',
                background: 'transparent',
                cursor: 'pointer',
                color: '#1E293B',
                zIndex: 1100,
              }}
              className="md:hidden"
            >
              {isOpen ? <X size={28} strokeWidth={2.5} /> : <Menu size={28} strokeWidth={2.5} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Spacer to push content below fixed header */}
      <div style={{ height: '80px' }} aria-hidden="true" />

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 220 }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 9999,
              background: 'rgba(255, 255, 255, 0.98)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              display: 'flex',
              flexDirection: 'column',
              overflowY: 'auto',
            }}
          >
              {/* Drawer Header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '1.5rem 1.75rem',
                }}
              >
                <img src={Logo} alt="CMV Logo" style={{ height: '44px', width: 'auto', objectFit: 'contain' }} />
                <button
                  onClick={() => setIsOpen(false)}
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    background: '#f1f5f9',
                    border: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#64748b',
                    cursor: 'pointer'
                  }}
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>

            {/* Nav Links */}
            <nav
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                padding: '2rem 2.5rem',
                gap: '2.5rem',
                flex: 1,
              }}
            >
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    delay: 0.2 + (idx * 0.08),
                    type: "spring",
                    stiffness: 100
                  }}
                  style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}
                >
                  {location.pathname === link.path && (
                    <motion.div 
                      layoutId="active-dot"
                      style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#F43F5E' }} 
                    />
                  )}
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    style={{
                      fontSize: '2.5rem',
                      fontWeight: 700,
                      color: location.pathname === link.path ? '#0f172a' : '#64748b',
                      textDecoration: 'none',
                      fontFamily: 'Outfit, sans-serif',
                      lineHeight: 1.1,
                      transition: 'all 0.3s ease',
                      letterSpacing: '-0.02em'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#0f172a')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = location.pathname === link.path ? '#0f172a' : '#64748b')}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* CTA and Info at bottom */}
            <div style={{ padding: '2rem 2.5rem', borderTop: '1px solid #f1f5f9', background: '#fff' }}>
              <button
                className="btn btn-primary"
                style={{ width: '100%', marginBottom: '2rem' }}
                onClick={() => {
                  setIsOpen(false);
                  navigate('/contact');
                }}
              >
                Get in Touch
              </button>

              <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', color: '#64748b' }}>
                <span style={{ fontSize: '0.9rem' }}>help@cmv-global.com</span>
                <span style={{ fontSize: '0.9rem' }}>+1 (555) 123-4567</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
