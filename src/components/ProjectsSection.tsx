import { motion } from 'framer-motion';
import ProjectCloud from '../assets/project_cloud.png';
import ProjectSecurity from '../assets/project_security.png';
import ProjectCRM from '../assets/project_crm.png';
import ProjectHealthcare from '../assets/project_healthcare.png';

const projects = [
  {
    img: ProjectCloud,
    title: 'Cloud Infrastructure Optimization',
    desc: 'Streamlined a retail company\'s cloud architecture to reduce costs by 30% and improve scalability using AWS and automation tools.',
  },
  {
    img: ProjectSecurity,
    title: 'Enterprise Network Security Upgrade',
    desc: 'Implemented next-gen firewalls, intrusion detection, and endpoint protection for a financial firm to eliminate critical security gaps.',
  },
  {
    img: ProjectCRM,
    title: 'Custom CRM Integration Solution',
    desc: 'Built and integrated a custom CRM system for a logistics company, boosting lead management efficiency by 45%.',
  },
  {
    img: ProjectHealthcare,
    title: 'Healthcare Data Migration Project',
    desc: 'Migrated sensitive patient records to a secure, HIPAA-compliant cloud environment with zero downtime for a hospital network.',
  },
];

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      style={{
        padding: '6rem 0',
        background: '#fff',
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
              Our Projects
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
            Real Results,{' '}
            <span
              style={{
                background: 'linear-gradient(90deg, #F43F5E 0%, #FB923C 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Real Impact.
            </span>
          </h2>

          <p style={{ color: '#6b7280', lineHeight: 1.75, margin: '0 0 2rem', fontSize: '0.95rem' }}>
            CMV Technologies transforms businesses with technology. From cloud migrations to custom software, our projects reflect innovation and measurable impact, tailored to real-world challenges.
          </p>
        </motion.div>

        {/* ── 2×2 Cards Grid ── */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '2rem',
          }}
        >
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              style={{
                background: '#fff',
                borderRadius: '1.25rem',
                overflow: 'hidden',
                border: '1px solid #f0f2f5',
                boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                cursor: 'pointer',
                transition: 'box-shadow 0.3s ease, transform 0.3s ease',
              }}
              whileHover={{ y: -5, boxShadow: '0 16px 40px rgba(0,0,0,0.1)' }}
            >
              {/* Image */}
              <div style={{ overflow: 'hidden', aspectRatio: '16/9' }}>
                <img
                  src={project.img}
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.4s ease',
                    display: 'block',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.04)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />
              </div>

              {/* Content */}
              <div style={{ padding: '1.5rem' }}>
                <h3
                  style={{
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    color: '#0f172a',
                    fontFamily: 'Outfit, sans-serif',
                    margin: '0 0 0.6rem',
                    lineHeight: 1.3,
                  }}
                >
                  {project.title}
                </h3>
                <p
                  style={{
                    fontSize: '0.875rem',
                    color: '#6b7280',
                    lineHeight: 1.7,
                    margin: '0 0 1.25rem',
                  }}
                >
                  {project.desc}
                </p>
                <a
                  href="#"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '0.875rem',
                    fontWeight: 700,
                    color: '#F43F5E',
                    textDecoration: 'none',
                    transition: 'gap 0.2s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.gap = '12px')}
                  onMouseLeave={(e) => (e.currentTarget.style.gap = '6px')}
                >
                  Read More
                  <span style={{ fontSize: '1rem' }}>↗</span>
                </a>
              </div>
            </motion.div>
          ))}
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
            View all Projects
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
