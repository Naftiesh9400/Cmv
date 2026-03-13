import Logo from '../assets/qwq 2.png';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Services', path: '/service' },
  { name: 'Projects', path: '/projects' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact Us', path: '/contact' }
];

const Footer = () => {
  return (
    <footer style={{ background: '#fff', color: '#475569', paddingTop: '3rem', borderTop: '1px solid #f0f2f5' }}>
      <div className="container">
        
        {/* Newsletter Section */}
        <div 
          style={{
            background: '#ffffff',
            border: '1px solid #f1f5f9',
            padding: '1.5rem 2.5rem',
            borderRadius: '1.25rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.5rem',
            marginBottom: '4rem',
            boxShadow: '0 10px 30px rgba(0,0,0,0.04)',
            position: 'relative',
            overflow: 'hidden'
          }}
          className="newsletter-card"
        >
          {/* Subtle Decorative Icon for background */}
          <Mail size={120} strokeWidth={0.5} style={{ position: 'absolute', right: '-20px', bottom: '-30px', color: 'rgba(244,63,94,0.03)', transform: 'rotate(-15deg)', pointerEvents: 'none' }} />
          
          <div style={{ flex: '2 1 400px', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <div style={{ padding: '12px', background: 'rgba(244,63,94,0.05)', borderRadius: '12px', color: '#F43F5E' }}>
              <Mail size={24} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0f172a', margin: '0 0 4px', fontFamily: 'Outfit, sans-serif' }}>
                Subscribe to Our Newsletter
              </h3>
              <p style={{ margin: 0, color: '#64748b', fontSize: '0.9rem', opacity: 0.8 }}>
                Stay updated with the latest in tech, cybersecurity, and our enterprise solutions.
              </p>
            </div>
          </div>
          <form 
            style={{ 
              flex: '1 1 350px', 
              display: 'flex', 
              gap: '10px',
              flexWrap: 'wrap',
              maxWidth: '500px'
            }} 
            onClick={(e) => e.preventDefault()}
          >
            <input 
              type="email" 
              placeholder="Enter your work email" 
              required
              style={{
                flex: '1 1 200px',
                padding: '12px 18px',
                borderRadius: '9999px',
                border: '1px solid #e2e8f0',
                background: '#f8fafc',
                color: '#0f172a',
                outline: 'none',
                fontSize: '0.9rem',
                minWidth: '0'
              }}
              onFocus={(e) => (e.target.style.borderColor = '#F43F5E')}
              onBlur={(e) => (e.target.style.borderColor = '#e2e8f0')}
            />
            <button
              style={{
                padding: '12px 28px',
                borderRadius: '9999px',
                border: 'none',
                background: 'linear-gradient(135deg, #F43F5E 0%, #FB923C 100%)',
                color: '#fff',
                fontSize: '0.9rem',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                whiteSpace: 'nowrap',
                flex: '0 0 auto'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.9')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Footer Top Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '3rem',
            paddingBottom: '4rem',
            borderBottom: '1px solid #f0f2f5'
          }}
        >
          {/* Column 1: Brand Info */}
          <div>
            <div style={{ marginBottom: '1.5rem' }}>
              <img src={Logo} alt="CMV Technologies" style={{ height: '44px', width: 'auto', objectFit: 'contain' }} />
            </div>
            <p style={{ color: '#64748b', lineHeight: 1.75, fontSize: '0.9rem', marginBottom: '1.5rem' }}>
              CMV Technologies transforms businesses with smart, secure, and scalable IT solutions. Your reliable global technology partner.
            </p>
            {/* Social Icons (Placeholders) */}
            {/* Social Icons */}
            <div style={{ display: 'flex', gap: '12px' }}>
              {[
                { icon: <Linkedin size={18} />, name: 'LinkedIn', color: '#0A66C2' },
                { icon: <Twitter size={18} />, name: 'Twitter', color: '#1DA1F2' },
                { icon: <Facebook size={18} />, name: 'Facebook', color: '#1877F2' },
                { icon: <Instagram size={18} />, name: 'Instagram', color: '#E4405F' }
              ].map((social, idx) => (
                <div 
                  key={idx}
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    background: '#f8fafc',
                    border: '1px solid #e2e8f0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    color: '#475569',
                    transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = social.color;
                    e.currentTarget.style.color = '#fff';
                    e.currentTarget.style.borderColor = 'transparent';
                    e.currentTarget.style.transform = 'translateY(-4px) scale(1.1)';
                    e.currentTarget.style.boxShadow = `0 10px 20px -5px ${social.color}66`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#f8fafc';
                    e.currentTarget.style.color = '#475569';
                    e.currentTarget.style.borderColor = '#e2e8f0';
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  {social.icon}
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 style={{ color: '#0f172a', fontSize: '1.1rem', fontWeight: 700, margin: '0 0 1.5rem', fontFamily: 'Outfit, sans-serif' }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} style={{ color: '#64748b', textDecoration: 'none', fontSize: '0.95rem', transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = '#F43F5E'} onMouseLeave={e => e.currentTarget.style.color = '#64748b'}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div>
            <h4 style={{ color: '#0f172a', fontSize: '1.1rem', fontWeight: 700, margin: '0 0 1.5rem', fontFamily: 'Outfit, sans-serif' }}>Legal</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Disclaimer'].map((link) => (
                <li key={link}>
                  <a href="#" style={{ color: '#64748b', textDecoration: 'none', fontSize: '0.95rem', transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = '#F43F5E'} onMouseLeave={e => e.currentTarget.style.color = '#64748b'}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact info */}
          <div>
            <h4 style={{ color: '#0f172a', fontSize: '1.1rem', fontWeight: 700, margin: '0 0 1.5rem', fontFamily: 'Outfit, sans-serif' }}>Contact Us</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  background: 'rgba(244,63,94,0.05)',
                  color: '#F43F5E',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <MapPin size={18} />
                </div>
                <span style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: 1.5 }}>
                  B517, 5th Floor, B Tower, <br/>
                  Bhutani Alphathum, Sector 90, <br/>
                  Noida, Uttar Pradesh 201304
                </span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  background: 'rgba(244,63,94,0.05)',
                  color: '#F43F5E',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Mail size={18} />
                </div>
                <a href="mailto:help@cmv-global.com" style={{ color: '#64748b', textDecoration: 'none', fontSize: '0.95rem', transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = '#F43F5E'} onMouseLeave={e => e.currentTarget.style.color = '#64748b'}>
                  help@cmv-global.com
                </a>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  background: 'rgba(244,63,94,0.05)',
                  color: '#F43F5E',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Phone size={18} />
                </div>
                <a href="tel:+15551234567" style={{ color: '#64748b', textDecoration: 'none', fontSize: '0.95rem', transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = '#F43F5E'} onMouseLeave={e => e.currentTarget.style.color = '#64748b'}>
                  +1 (555) 123-4567
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div style={{ padding: '1.5rem 0', textAlign: 'center', color: '#94a3b8', fontSize: '0.85rem' }}>
          <p style={{ margin: 0 }}>© {new Date().getFullYear()} CMV Technologies International Pvt Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
