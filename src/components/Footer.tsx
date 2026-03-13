import Logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

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
    <footer style={{ background: '#fff', color: '#475569', paddingTop: '5rem', borderTop: '1px solid #f0f2f5' }}>
      <div className="container">
        
        {/* Newsletter Section */}
        <div 
          style={{
            background: 'linear-gradient(135deg, rgba(244,63,94,0.04) 0%, rgba(251,146,60,0.06) 100%)',
            border: '1px solid rgba(244,63,94,0.1)',
            padding: '3rem',
            borderRadius: '1.5rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '2rem',
            marginBottom: '5rem',
            boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
          }}
        >
          <div style={{ flex: '1 1 300px' }}>
            <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0f172a', margin: '0 0 0.5rem', fontFamily: 'Outfit, sans-serif' }}>
              Subscribe to Our Newsletter
            </h3>
            <p style={{ margin: 0, color: '#64748b', fontSize: '0.95rem' }}>
              Stay updated with the latest in tech, cybersecurity, and our enterprise solutions.
            </p>
          </div>
          <form style={{ flex: '1 1 400px', display: 'flex', gap: '8px' }} onClick={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your work email" 
              required
              style={{
                flex: 1,
                padding: '16px 20px',
                borderRadius: '8px',
                border: '1px solid #e2e8f0',
                background: '#fff',
                color: '#0f172a',
                outline: 'none',
                fontSize: '0.95rem',
              }}
              onFocus={(e) => (e.target.style.borderColor = '#F43F5E')}
              onBlur={(e) => (e.target.style.borderColor = '#e2e8f0')}
            />
            <button
              typeof='submit'
              style={{
                padding: '0 28px',
                borderRadius: '8px',
                border: 'none',
                background: 'linear-gradient(135deg, #F43F5E 0%, #FB923C 100%)',
                color: '#fff',
                fontSize: '0.95rem',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'opacity 0.2s',
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
            <div style={{ background: '#fff', padding: '10px 16px', borderRadius: '8px', border: '1px solid #f0f2f5', display: 'inline-block', marginBottom: '1.5rem' }}>
              <img src={Logo} alt="CMV Technologies" style={{ height: '32px' }} />
            </div>
            <p style={{ color: '#64748b', lineHeight: 1.75, fontSize: '0.9rem', marginBottom: '1.5rem' }}>
              CMV Technologies transforms businesses with smart, secure, and scalable IT solutions. Your reliable global technology partner.
            </p>
            {/* Social Icons (Placeholders) */}
            <div style={{ display: 'flex', gap: '12px' }}>
              {['IN', 'X', 'FB', 'IG'].map((social) => (
                <div 
                  key={social}
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: '#f8fafc',
                    border: '1px solid #e2e8f0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    color: '#475569',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#F43F5E';
                    e.currentTarget.style.color = '#fff';
                    e.currentTarget.style.borderColor = 'transparent';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#f8fafc';
                    e.currentTarget.style.color = '#475569';
                    e.currentTarget.style.borderColor = '#e2e8f0';
                  }}
                >
                  {social}
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
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <span style={{ fontSize: '1.2rem' }}>📍</span>
                <span style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: 1.5 }}>
                  B517, 5th Floor, B Tower, <br/>
                  Bhutani Alphathum, Sector 90, <br/>
                  Noida, Uttar Pradesh 201304
                </span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '1.2rem' }}>✉️</span>
                <a href="mailto:help@cmv-global.com" style={{ color: '#64748b', textDecoration: 'none', fontSize: '0.95rem', transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = '#F43F5E'} onMouseLeave={e => e.currentTarget.style.color = '#64748b'}>
                  help@cmv-global.com
                </a>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '1.2rem' }}>📞</span>
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
