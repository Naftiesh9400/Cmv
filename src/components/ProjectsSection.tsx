import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projectPosts as projects } from '../data/projectData';

const ProjectsSection = ({ showViewAll = true }: { showViewAll?: boolean }) => {
  return (
    <section
      id="projects"
      style={{
        padding: '4rem 0',
        background: '#fff',
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

        {/* ── Responsive 3-Column Grid ── */}
        <div className="responsive-grid-3">
          {projects.map((project, i) => (
            <Link
              to={`/projects/${project.slug}`}
              key={i}
              style={{
                display: 'block',
                textDecoration: 'none',
                background: '#fff',
                borderRadius: '1.25rem',
                overflow: 'hidden',
                border: '1px solid #f0f2f5',
                boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                cursor: 'pointer',
                transition: 'box-shadow 0.3s ease, transform 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 16px 40px rgba(0,0,0,0.1)';
                e.currentTarget.style.transform = 'translateY(-5px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.05)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
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
                <div
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
                >
                  Read More
                  <span style={{ fontSize: '1rem' }}>↗</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* --- Bottom Button --- */}
        {showViewAll && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginTop: '3rem' }}
          >
            <Link
              to="/projects"
              style={{
                display: 'inline-block',
                padding: '12px 36px',
                border: '1px solid rgba(244, 63, 94, 0.2)',
                borderRadius: '9999px',
                background: '#fff',
                color: '#F43F5E',
                fontWeight: 700,
                fontSize: '0.9rem',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
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
              View all Projects
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
