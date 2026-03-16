import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, Target, Lightbulb, TrendingUp } from 'lucide-react';
import { projectPosts } from '../data/projectData';

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projectPosts.find((p) => p.slug === slug);

  useEffect(() => {
    if (project) {
      document.title = project.seoTitle;
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', project.seoDesc);
      }
      window.scrollTo(0, 0);
    }
  }, [project]);

  if (!project) {
    return (
      <div style={{ padding: '10rem 0', textAlign: 'center' }}>
        <h2>Project not found</h2>
        <Link to="/projects" style={{ color: '#F43F5E', fontWeight: 700 }}>Back to Projects</Link>
      </div>
    );
  }

  return (
    <article style={{ background: '#fff', paddingTop: '120px' }}>
      {/* Progress Bar */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'linear-gradient(90deg, #F43F5E 0%, #FB923C 100%)',
          zIndex: 1000,
          scaleX: 0,
          transformOrigin: '0%',
        }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
      />

      <div className="container" style={{ maxWidth: '1000px', padding: '4rem 1rem' }}>
        {/* Back Link */}
        <Link 
          to="/projects" 
          style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '8px', 
            color: '#64748b', 
            textDecoration: 'none', 
            fontSize: '0.9rem',
            fontWeight: 600,
            marginBottom: '2rem'
          }}
        >
          <ArrowLeft size={18} /> Back to Projects
        </Link>

        {/* Hero Section */}
        <header style={{ marginBottom: '4rem' }}>
          <div style={{ 
            display: 'inline-block', 
            padding: '6px 20px', 
            background: 'rgba(244,63,94,0.08)', 
            color: '#F43F5E', 
            borderRadius: '9999px', 
            fontSize: '0.8rem', 
            fontWeight: 800,
            marginBottom: '1.5rem',
            textTransform: 'uppercase',
            letterSpacing: '0.05em'
          }}>
            {project.category}
          </div>
          <h1 style={{ 
            fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
            fontWeight: 800, 
            color: '#0f172a', 
            fontFamily: 'Outfit, sans-serif', 
            lineHeight: 1.1,
            marginBottom: '2rem',
            letterSpacing: '-0.02em'
          }}>
            {project.title}
          </h1>
        </header>

        {/* Featured Image */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ 
            borderRadius: '2.5rem', 
            overflow: 'hidden', 
            marginBottom: '5rem',
            boxShadow: '0 40px 80px -20px rgba(0,0,0,0.15)',
            aspectRatio: '16/9'
          }}
        >
          <img src={project.img} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </motion.div>

        {/* Case Study Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
          {/* Left Column: Challenge & Solution */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
            <section>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.5rem' }}>
                <div style={{ padding: '10px', background: '#fef2f2', color: '#F43F5E', borderRadius: '12px' }}>
                  <Target size={24} />
                </div>
                <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0f172a', fontFamily: 'Outfit, sans-serif' }}>The Challenge</h2>
              </div>
              <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#475569' }}>{project.challenge}</p>
            </section>

            <section>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.5rem' }}>
                <div style={{ padding: '10px', background: '#fff7ed', color: '#FB923C', borderRadius: '12px' }}>
                  <Lightbulb size={24} />
                </div>
                <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0f172a', fontFamily: 'Outfit, sans-serif' }}>Our Solution</h2>
              </div>
              <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#475569' }}>{project.solution}</p>
            </section>
          </div>

          {/* Right Column: Key Results */}
          <div style={{ 
            background: '#f8fafc', 
            padding: '3rem', 
            borderRadius: '2rem', 
            border: '1px solid #e2e8f0',
            height: 'fit-content'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '2rem' }}>
              <div style={{ padding: '10px', background: '#f0fdf4', color: '#22c55e', borderRadius: '12px' }}>
                <TrendingUp size={24} />
              </div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0f172a', fontFamily: 'Outfit, sans-serif' }}>Key Outcomes</h2>
            </div>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {project.results.map((result, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <CheckCircle2 size={20} style={{ color: '#22c55e', marginTop: '3px', flexShrink: 0 }} />
                  <span style={{ fontSize: '1.05rem', fontWeight: 600, color: '#334155', lineHeight: 1.4 }}>{result}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Navigation / Next & Prev */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '1.5rem',
          marginTop: '6rem',
          paddingTop: '3rem',
          borderTop: '1px solid #f1f5f9'
        }}>
          {projectPosts[projectPosts.indexOf(project) - 1] ? (
            <Link 
              to={`/projects/${projectPosts[projectPosts.indexOf(project) - 1].slug}`}
              style={{ padding: '1.5rem', borderRadius: '1.5rem', border: '1px solid #e2e8f0', textDecoration: 'none', transition: 'all 0.3s' }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#F43F5E'; e.currentTarget.style.background = '#fff5f6'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#e2e8f0'; e.currentTarget.style.background = 'transparent'; }}
            >
              <div style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 700, textTransform: 'uppercase', marginBottom: '8px' }}>Previous Project</div>
              <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0f172a' }}>{projectPosts[projectPosts.indexOf(project) - 1].title}</div>
            </Link>
          ) : <div />}

          {projectPosts[projectPosts.indexOf(project) + 1] ? (
            <Link 
              to={`/projects/${projectPosts[projectPosts.indexOf(project) + 1].slug}`}
              style={{ padding: '1.5rem', borderRadius: '1.5rem', border: '1px solid #e2e8f0', textDecoration: 'none', textAlign: 'right', transition: 'all 0.3s' }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#F43F5E'; e.currentTarget.style.background = '#fff5f6'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#e2e8f0'; e.currentTarget.style.background = 'transparent'; }}
            >
              <div style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 700, textTransform: 'uppercase', marginBottom: '8px' }}>Next Project</div>
              <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0f172a' }}>{projectPosts[projectPosts.indexOf(project) + 1].title}</div>
            </Link>
          ) : <div />}
        </div>

        {/* CTA Footer */}
        <footer style={{ marginTop: '5rem', paddingTop: '4rem', borderTop: '2px solid #f1f5f9', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#0f172a', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif' }}>Have a similar project in mind?</h2>
          <p style={{ color: '#64748b', marginBottom: '2.5rem', maxWidth: '600px', marginInline: 'auto' }}>Let's discuss how CMV Technologies can help you achieve similar measurable success with our custom technology solutions.</p>
          <Link 
            to="/contact" 
            style={{ 
              display: 'inline-block',
              padding: '16px 40px', 
              background: 'linear-gradient(135deg, #F43F5E 0%, #FB923C 100%)', 
              color: '#fff', 
              borderRadius: '9999px', 
              textDecoration: 'none', 
              fontWeight: 800,
              boxShadow: '0 20px 40px -10px rgba(244,63,94,0.4)',
              transition: 'transform 0.3s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            Start Your Journey
          </Link>
        </footer>
      </div>
    </article>
  );
};

export default ProjectDetail;
