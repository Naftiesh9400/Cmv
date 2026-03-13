import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Lightbulb, Lock, LifeBuoy, BarChart3, Cloud, Code2 } from 'lucide-react';

// Logo brand colors: navy (#1E293B) + gradient red→orange (#F43F5E → #FB923C)
const services = [
  {
    icon: <Lightbulb size={36} strokeWidth={1.5} />,
    title: 'Tailored IT Strategy & Consulting',
    description:
      'Align your tech investments with your business goals through expert-led planning, system reviews, and digital transformation roadmaps.',
  },
  {
    icon: <Lock size={36} strokeWidth={1.5} />,
    title: 'Cybersecurity Risk Assessment',
    description:
      'Identify and eliminate vulnerabilities with our end-to-end security audits, penetration testing, and compliance strategies tailored.',
    featured: true,
  },
  {
    icon: <LifeBuoy size={36} strokeWidth={1.5} />,
    title: 'Managed Support Services',
    description:
      'Get 24/7 proactive IT support, real-time monitoring, and issue resolution to keep your systems running smoothly and your team productive.',
  },
  {
    icon: <BarChart3 size={36} strokeWidth={1.5} />,
    title: 'Data Analytics Solutions',
    description:
      'Transform raw data into actionable insights that drive smarter decisions, improved forecasting, and business innovation.',
  },
  {
    icon: <Cloud size={36} strokeWidth={1.5} />,
    title: 'Cloud Infrastructure',
    description:
      'Seamless cloud migration and management services on AWS, Azure, and GCP to scale your business confidently.',
  },
  {
    icon: <Code2 size={36} strokeWidth={1.5} />,
    title: 'Custom Software Dev',
    description:
      'Build robust, scalable software applications tailored to your specific business needs and industry standards.',
  },
];

const ServicesSection = ({ showViewAll = true }: { showViewAll?: boolean }) => {
  return (
    <section
      id="service"
      style={{
        padding: '4rem 0',
        background: 'linear-gradient(180deg, #f8faff 0%, #ffffff 100%)',
      }}
    >
      <div className="container">
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
              What We Offer
            </span>
          </div>
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 2.75rem)',
              fontWeight: 800,
              color: '#0f172a',
              fontFamily: 'Outfit, sans-serif',
              margin: '0 0 1rem',
              lineHeight: 1.15,
              textTransform: 'uppercase',
              letterSpacing: '-0.01em',
            }}
          >
            Comprehensive{' '}
            <span
              style={{
                background: 'linear-gradient(90deg, #F43F5E 0%, #FB923C 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              IT Services
            </span>
            <br />
            For Your Business.
          </h2>

          <p style={{ color: '#6b7280', lineHeight: 1.75, margin: '0 0 2rem', fontSize: '1rem' }}>
            From cloud to cybersecurity, we deliver end-to-end technology solutions tailored to drive your business forward.
          </p>
        </motion.div>

        {/* Responsive 3-Column Grid */}
        <div className="responsive-grid-3">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              style={{
                background: service.featured ? '#ffffff' : '#f9fbff',
                borderRadius: '1.5rem',
                padding: '3rem 2.25rem',
                border: '1px solid transparent',
                borderColor: service.featured ? '#eef2f6' : 'transparent',
                boxShadow: service.featured ? '0 10px 30px rgba(0,0,0,0.02)' : 'none',
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.75rem',
                textAlign: 'left',
                height: '100%',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
              }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(244, 63, 94, 0.4)';
                  e.currentTarget.style.background = '#ffffff';
                  e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(244, 63, 94, 0.1)';
                  const icon = e.currentTarget.querySelector('.service-icon') as HTMLDivElement;
                  if (icon) {
                     icon.style.transform = 'scale(1.1) rotate(5deg)';
                     icon.style.background = 'linear-gradient(135deg, #F43F5E 0%, #FB923C 100%)';
                     icon.style.color = '#fff';
                     icon.style.borderColor = 'transparent';
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = service.featured ? '#eef2f6' : 'transparent';
                  e.currentTarget.style.background = service.featured ? '#ffffff' : '#f9fbff';
                  e.currentTarget.style.boxShadow = service.featured ? '0 10px 30px rgba(0,0,0,0.02)' : 'none';
                  const icon = e.currentTarget.querySelector('.service-icon') as HTMLDivElement;
                  if (icon) {
                     icon.style.transform = 'scale(1) rotate(0deg)';
                     icon.style.background = 'linear-gradient(135deg, rgba(15, 23, 42, 0.05) 0%, rgba(15, 23, 42, 0.02) 100%)';
                     icon.style.color = '#0f172a';
                     icon.style.borderColor = 'rgba(15, 23, 42, 0.1)';
                  }
                }}
              >
                {/* Icon Container with Glossy Effect */}
                <div
                  className="service-icon"
                  style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.05) 0%, rgba(15, 23, 42, 0.02) 100%)',
                    border: '1px solid rgba(15, 23, 42, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    boxShadow: 'inset 0 0 20px rgba(15, 23, 42, 0.02)',
                    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                    color: '#0f172a',
                  }}
                >
                  {/* Subtle Glow behind icon */}
                  <div style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: 'radial-gradient(circle, rgba(15, 23, 42, 0.05) 0%, transparent 70%)', filter: 'blur(8px)' }} />
                  <span style={{ position: 'relative', zIndex: 1, display: 'flex' }}>{service.icon}</span>
                </div>

                {/* Text Group */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <h3
                    style={{
                      fontSize: '1.35rem',
                      fontWeight: 700,
                      color: '#0f172a',
                      fontFamily: 'Outfit, sans-serif',
                      margin: 0,
                      lineHeight: 1.2,
                    }}
                  >
                    {service.title}
                  </h3>

                  <p
                    style={{
                      fontSize: '0.95rem',
                      color: '#64748b',
                      lineHeight: 1.6,
                      margin: 0,
                    }}
                  >
                    {service.description}
                  </p>
                  
                  <Link 
                    to="/service"
                    style={{ 
                      marginTop: '0.5rem', 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '8px', 
                      color: '#F43F5E', 
                      fontWeight: 700, 
                      fontSize: '0.9rem',
                      textDecoration: 'none',
                      transition: 'gap 0.3s'
                    }}
                    onMouseEnter={(e) => {
                      const span = e.currentTarget.querySelector('span');
                      if (span) span.style.transform = 'translateX(4px)';
                      e.currentTarget.style.gap = '12px';
                    }}
                    onMouseLeave={(e) => {
                      const span = e.currentTarget.querySelector('span');
                      if (span) span.style.transform = 'translateX(0)';
                      e.currentTarget.style.gap = '8px';
                    }}
                  >
                    Learn More <span style={{ transition: 'transform 0.3s' }}>→</span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

        {/* View All Button */}
        {showViewAll && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            style={{ marginTop: '2.5rem', textAlign: 'center' }}
          >
            <Link
              to="/service"
              style={{
                display: 'inline-block',
                padding: '10px 32px',
                border: '1px solid rgba(244, 63, 94, 0.2)',
                borderRadius: '9999px',
                background: '#fff',
                color: '#F43F5E',
                fontWeight: 700,
                fontSize: '0.85rem',
                cursor: 'pointer',
                letterSpacing: '0.02em',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, #F43F5E 0%, #FB923C 100%)';
                e.currentTarget.style.color = '#fff';
                e.currentTarget.style.borderColor = 'transparent';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#fff';
                e.currentTarget.style.color = '#F43F5E';
                e.currentTarget.style.borderColor = 'rgba(244, 63, 94, 0.2)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              View all Service
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ServicesSection;
