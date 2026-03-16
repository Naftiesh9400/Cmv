import { useEffect } from 'react';
import Logo from '../assets/qwq 2.png';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Facebook, Instagram, MapPin, Mail, Phone } from 'lucide-react';

const navColumns = [
  {
    heading: 'Company',
    links: [
      { label: 'About CMV Technologies', path: '/about-us' },
      { label: 'Our Leadership Team', path: '/leadership' },
      { label: 'Our Clients', path: '/our-clients' },
      { label: 'Partner With Us', path: '/our-partners' },
      { label: 'Success Stories', path: '/case-study' },
      { label: 'Blog & Insights', path: '/blog' },
    ],
  },
  {
    heading: 'Services',
    links: [
      { label: 'IT Consulting', path: '/services/it-consulting' },
      { label: 'Cybersecurity Solutions', path: '/services/cybersecurity' },
      { label: 'Cloud Migration', path: '/services/cloud-migration' },
      { label: 'Web & App Development', path: '/services/web-development' },
      { label: 'Managed IT Support', path: '/services/managed-it' },
      { label: 'Digital Transformation', path: '/services/digital-transformation' },
    ],
  },
  {
    heading: 'Legal',
    links: [
      { label: 'Privacy Policy', path: '/privacy-policy' },
      { label: 'Terms of Service', path: '/terms-of-service' },
      { label: 'Cookie Policy', path: '/cookie-policy' },
      { label: 'Disclaimer', path: '/disclaimer' },
    ],
  },
];

const socials = [
  { icon: <Linkedin size={17} />, label: 'CMV Technologies on LinkedIn', href: 'https://linkedin.com', color: '#0A66C2' },
  { icon: <Twitter size={17} />, label: 'CMV Technologies on Twitter/X', href: 'https://twitter.com', color: '#1DA1F2' },
  { icon: <Facebook size={17} />, label: 'CMV Technologies on Facebook', href: 'https://facebook.com', color: '#1877F2' },
  { icon: <Instagram size={17} />, label: 'CMV Technologies on Instagram', href: 'https://instagram.com', color: '#E4405F' },
];

const linkStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '5px',
  color: '#64748b',
  textDecoration: 'none',
  fontSize: '0.875rem',
  lineHeight: 1.5,
  transition: 'color 0.2s ease',
  fontWeight: 500,
};

const Footer = () => {
  // Inject JSON-LD Organization schema for SEO
  useEffect(() => {
    const id = 'cmv-org-schema';
    if (!document.getElementById(id)) {
      const script = document.createElement('script');
      script.id = id;
      script.type = 'application/ld+json';
      script.text = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'CMV Technologies International Pvt. Ltd.',
        url: 'https://cmv-global.com',
        logo: 'https://cmv-global.com/logo.png',
        description:
          'CMV Technologies provides enterprise IT consulting, cybersecurity, cloud migration, web development, and managed IT services globally.',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'B517, 5th Floor, B Tower, Bhutani Alphathum, Sector 90',
          addressLocality: 'Noida',
          addressRegion: 'Uttar Pradesh',
          postalCode: '201304',
          addressCountry: 'IN',
        },
        contactPoint: [
          { '@type': 'ContactPoint', telephone: '+1-555-123-4567', contactType: 'customer service', availableLanguage: 'English' },
          { '@type': 'ContactPoint', email: 'help@cmv-global.com', contactType: 'sales' },
        ],
        sameAs: [
          'https://linkedin.com/company/cmv-technologies',
          'https://twitter.com/cmvtechnologies',
          'https://facebook.com/cmvtechnologies',
          'https://instagram.com/cmvtechnologies',
        ],
      });
      document.head.appendChild(script);
    }
  }, []);

  return (
    <footer
      aria-label="CMV Technologies site footer"
      itemScope
      itemType="https://schema.org/WPFooter"
      style={{ background: '#fff', color: '#475569', borderTop: '1px solid #f0f2f5' }}
    >
      <div className="container">

        {/* ── Main Grid ── */}
        <div className="footer-grid">

          {/* Col 1 — Brand */}
          <div className="footer-col-brand">
            <Link to="/" aria-label="CMV Technologies — Go to homepage" style={{ display: 'inline-block', marginBottom: '1rem' }}>
              <img
                src={Logo}
                alt="CMV Technologies International Pvt. Ltd. — IT Consulting & Cybersecurity"
                width={140}
                height={44}
                style={{ height: '44px', width: 'auto', objectFit: 'contain' }}
              />
            </Link>

            <p style={{ color: '#64748b', lineHeight: 1.75, fontSize: '0.875rem', margin: '0 0 1.25rem', maxWidth: '280px' }}>
              Transforming businesses with smart, secure &amp; scalable IT solutions — your trusted global technology partner since 2015.
            </p>

            {/* Socials */}
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }} aria-label="CMV Technologies social media profiles">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  title={s.label}
                  rel="noopener noreferrer nofollow"
                  target="_blank"
                  style={{
                    width: '36px', height: '36px', borderRadius: '50%',
                    background: '#f8fafc', border: '1px solid #e2e8f0',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#475569', textDecoration: 'none',
                    transition: 'all 0.3s cubic-bezier(0.175,0.885,0.32,1.275)',
                    flexShrink: 0,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = s.color;
                    e.currentTarget.style.color = '#fff';
                    e.currentTarget.style.borderColor = 'transparent';
                    e.currentTarget.style.transform = 'translateY(-3px) scale(1.1)';
                    e.currentTarget.style.boxShadow = `0 8px 18px -4px ${s.color}55`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#f8fafc';
                    e.currentTarget.style.color = '#475569';
                    e.currentTarget.style.borderColor = '#e2e8f0';
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav Columns */}
          {navColumns.map((col) => (
            <nav key={col.heading} aria-label={`${col.heading} navigation`}>
              <h3 style={{
                fontSize: '0.8rem', fontWeight: 800, color: '#0f172a',
                textTransform: 'uppercase', letterSpacing: '0.09em',
                margin: '0 0 1.1rem', fontFamily: 'Outfit, sans-serif',
              }}>
                {col.heading}
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      title={link.label}
                      style={linkStyle}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = '#ff4d00';
                        e.currentTarget.style.paddingLeft = '4px';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = '#64748b';
                        e.currentTarget.style.paddingLeft = '0';
                      }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          {/* Contact col */}
          <address
            itemScope
            itemType="https://schema.org/LocalBusiness"
            className="footer-col-contact"
            style={{ fontStyle: 'normal' }}
            aria-label="CMV Technologies contact information"
          >
            <h3 style={{
              fontSize: '0.8rem', fontWeight: 800, color: '#0f172a',
              textTransform: 'uppercase', letterSpacing: '0.09em',
              margin: '0 0 1.1rem', fontFamily: 'Outfit, sans-serif',
            }}>
              Contact
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <MapPin size={16} style={{ color: '#ff4d00', marginTop: '2px', flexShrink: 0 }} aria-hidden="true" />
                <span itemProp="address" itemScope itemType="https://schema.org/PostalAddress"
                  style={{ color: '#64748b', fontSize: '0.875rem', lineHeight: 1.6 }}>
                  <span itemProp="streetAddress">B517, 5th Floor, B Tower,<br />Bhutani Alphathum, Sector 90,</span><br />
                  <span itemProp="addressLocality">Noida</span>,{' '}
                  <span itemProp="addressRegion">UP</span>{' '}
                  <span itemProp="postalCode">201304</span>,{' '}
                  <span itemProp="addressCountry">India</span>
                </span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Mail size={15} style={{ color: '#ff4d00', flexShrink: 0 }} aria-hidden="true" />
                <a
                  href="mailto:help@cmv-global.com"
                  title="Email CMV Technologies"
                  itemProp="email"
                  style={linkStyle}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#ff4d00')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#64748b')}
                >
                  help@cmv-global.com
                </a>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Phone size={15} style={{ color: '#ff4d00', flexShrink: 0 }} aria-hidden="true" />
                <a
                  href="tel:+15551234567"
                  title="Call CMV Technologies"
                  itemProp="telephone"
                  style={linkStyle}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#ff4d00')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#64748b')}
                >
                  +1 (555) 123-4567
                </a>
              </li>


            </ul>
          </address>
        </div>

        {/* ── Bottom Bar ── */}
        <div style={{
          display: 'flex', flexWrap: 'wrap', alignItems: 'center',
          justifyContent: 'center', gap: '0.75rem',
          padding: '1.25rem 0',
          fontSize: '0.8rem', color: '#94a3b8',
          textAlign: 'center',
        }}>
          <p style={{ margin: 0, width: '100%' }}>
            © {new Date().getFullYear()}{' '}
            <strong style={{ color: '#64748b', fontWeight: 600 }}>CMV Technologies International Pvt. Ltd.</strong>
            {' '}All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
