import { motion } from 'framer-motion';

// Logo brand colors: navy (#1E293B) + gradient red→orange (#F43F5E → #FB923C)
const services = [
  {
    icon: '☁️',
    title: 'IT Consulting Services',
    description:
      'Strategic guidance to align your technology stack with long-term business objectives, ensuring agility and growth.',
  },
  {
    icon: '📊',
    title: 'Data Analytics Solutions',
    description:
      'Transform raw data into actionable insights that drive smarter decisions, improved forecasting, and business innovation.',
    featured: true,
  },
  {
    icon: '💻',
    title: 'Website Development Service',
    description:
      'Responsive, user-centric websites built with modern frameworks to deliver performance, accessibility, and brand impact.',
  },
  {
    icon: '🔒',
    title: 'Cybersecurity Solutions',
    description:
      'End-to-end security strategies to protect your digital assets, ensure compliance, and prevent data breaches.',
  },
  {
    icon: '☁️',
    title: 'Cloud Infrastructure',
    description:
      'Seamless cloud migration and management services on AWS, Azure, and GCP to scale your business confidently.',
  },
  {
    icon: '🛠️',
    title: 'Managed IT Support',
    description:
      '24/7 proactive monitoring and support to keep your systems running at peak performance without disruption.',
  },
];

const ServicesSection = () => {
  return (
    <section
      id="service"
      style={{
        padding: '6rem 0',
        background: 'linear-gradient(180deg, #f8faff 0%, #ffffff 100%)',
      }}
    >
      <div className="container">
        {/* Center Header */}
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

        {/* Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(30,41,59,0.12)' }}
              style={{
                background: service.featured ? '#1E293B' : '#ffffff',
                borderRadius: '1.5rem',
                padding: '2rem',
                border: service.featured ? 'none' : '1px solid #f0f2f5',
                boxShadow: service.featured
                  ? '0 24px 48px rgba(30,41,59,0.25)'
                  : '0 4px 16px rgba(0,0,0,0.04)',
                transition: 'box-shadow 0.3s ease, transform 0.3s ease',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
              }}
            >
              {/* Icon Circle */}
              <div
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '14px',
                  background: service.featured
                    ? 'linear-gradient(135deg, #F43F5E 0%, #FB923C 100%)'
                    : 'linear-gradient(135deg, rgba(244,63,94,0.1) 0%, rgba(251,146,60,0.1) 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.4rem',
                }}
              >
                {service.icon}
              </div>

              {/* Title */}
              <h3
                style={{
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  color: service.featured ? '#fff' : '#1E293B',
                  fontFamily: 'Outfit, sans-serif',
                  margin: 0,
                  lineHeight: 1.3,
                }}
              >
                {service.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontSize: '0.92rem',
                  color: service.featured ? 'rgba(255,255,255,0.65)' : '#6b7280',
                  lineHeight: 1.75,
                  margin: 0,
                  flex: 1,
                }}
              >
                {service.description}
              </p>

              {/* Read More */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '0.5rem' }}>
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: service.featured
                      ? 'linear-gradient(135deg, #F43F5E 0%, #FB923C 100%)'
                      : '#1E293B',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    fontSize: '1.1rem',
                    fontWeight: 300,
                    cursor: 'pointer',
                    flexShrink: 0,
                  }}
                >
                  +
                </div>
                <span
                  style={{
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    color: service.featured ? 'rgba(255,255,255,0.8)' : '#1E293B',
                    cursor: 'pointer',
                  }}
                >
                  Read More
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          style={{ marginTop: '3rem', textAlign: 'center' }}
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
              letterSpacing: '0.04em',
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
            View all Services
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
