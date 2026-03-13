import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, ArrowLeft, Clock, Facebook, Twitter, Linkedin as LinkedinIcon } from 'lucide-react';
import { posts } from '../data/blogData';

const BlogDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = posts.find((p) => p.slug === slug);

  useEffect(() => {
    if (post) {
      document.title = post.seoTitle;
      // In a real SEO setup, we would update meta tags here or use react-helmet
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', post.seoDesc);
      }
      window.scrollTo(0, 0);
    } else {
      // If post not found, redirect to blog list or show 404
      // navigate('/blog');
    }
  }, [post, navigate]);

  if (!post) {
    return (
      <div style={{ padding: '10rem 0', textAlign: 'center' }}>
        <h2>Blog post not found</h2>
        <Link to="/blog" style={{ color: '#F43F5E', fontWeight: 700 }}>Back to Blog</Link>
      </div>
    );
  }

  return (
    <article style={{ background: '#fff', paddingTop: '80px' }}>
      {/* --- Progress Bar --- */}
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

      <div className="container" style={{ maxWidth: '900px', padding: '4rem 1rem' }}>
        {/* Back Link */}
        <Link 
          to="/blog" 
          style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '8px', 
            color: '#64748b', 
            textDecoration: 'none', 
            fontSize: '0.9rem',
            fontWeight: 600,
            marginBottom: '2rem',
            transition: 'color 0.2s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = '#F43F5E'}
          onMouseLeave={(e) => e.currentTarget.style.color = '#64748b'}
        >
          <ArrowLeft size={18} /> Back to Insights
        </Link>

        {/* Header Section */}
        <header style={{ marginBottom: '3rem' }}>
          <div style={{ display: 'flex', gap: '8px', marginBottom: '1.5rem' }}>
            {post.tags.map(tag => (
              <span key={tag} style={{ 
                padding: '4px 16px', 
                background: 'rgba(244,63,94,0.08)', 
                color: '#F43F5E', 
                borderRadius: '9999px', 
                fontSize: '0.75rem', 
                fontWeight: 700,
                letterSpacing: '0.05em'
              }}>
                {tag}
              </span>
            ))}
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
            {post.title}
          </h1>

          <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            alignItems: 'center', 
            gap: '2rem',
            padding: '1.5rem 0',
            borderTop: '1px solid #f1f5f9',
            borderBottom: '1px solid #f1f5f9'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <img src={post.author.avatar} alt={post.author.name} style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover' }} />
              <div>
                <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#0f172a' }}>{post.author.name}</div>
                <div style={{ fontSize: '0.8rem', color: '#64748b' }}>Technical Expert</div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#64748b', fontSize: '0.9rem' }}>
              <Calendar size={18} /> {post.author.date}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#64748b', fontSize: '0.9rem' }}>
              <Clock size={18} /> 6 Min Read
            </div>
          </div>
        </header>

        {/* Hero Image */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ 
            borderRadius: '2rem', 
            overflow: 'hidden', 
            marginBottom: '4rem',
            boxShadow: '0 30px 60px -12px rgba(0,0,0,0.15)'
          }}
        >
          <img src={post.img} alt={post.title} style={{ width: '100%', height: 'auto', display: 'block' }} />
        </motion.div>

        {/* Content Section */}
        <div 
          className="blog-content"
          style={{ 
            fontSize: '1.15rem', 
            lineHeight: 1.8, 
            color: '#334155',
            fontFamily: 'Inter, sans-serif'
          }}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Navigation / Next & Prev */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '1.5rem',
          marginTop: '4rem',
          paddingTop: '3rem',
          borderTop: '1px solid #f1f5f9'
        }}>
          {posts[posts.indexOf(post) - 1] ? (
            <Link 
              to={`/blog/${posts[posts.indexOf(post) - 1].slug}`}
              style={{
                padding: '1.5rem',
                borderRadius: '1rem',
                border: '1px solid #f1f5f9',
                textDecoration: 'none',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#F43F5E';
                e.currentTarget.style.background = '#fff5f6';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#f1f5f9';
                e.currentTarget.style.background = 'transparent';
              }}
            >
              <div style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 700, textTransform: 'uppercase', marginBottom: '8px' }}>Previous Post</div>
              <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0f172a' }}>{posts[posts.indexOf(post) - 1].title}</div>
            </Link>
          ) : <div />}

          {posts[posts.indexOf(post) + 1] ? (
            <Link 
              to={`/blog/${posts[posts.indexOf(post) + 1].slug}`}
              style={{
                padding: '1.5rem',
                borderRadius: '1rem',
                border: '1px solid #f1f5f9',
                textDecoration: 'none',
                textAlign: 'right',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#F43F5E';
                e.currentTarget.style.background = '#fff5f6';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#f1f5f9';
                e.currentTarget.style.background = 'transparent';
              }}
            >
              <div style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 700, textTransform: 'uppercase', marginBottom: '8px' }}>Next Post</div>
              <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0f172a' }}>{posts[posts.indexOf(post) + 1].title}</div>
            </Link>
          ) : <div />}
        </div>

        {/* Footer / Share */}
        <footer style={{ marginTop: '3rem', paddingTop: '3rem', borderTop: '2px solid #f1f5f9' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ fontWeight: 700, color: '#0f172a' }}>Share this story:</span>
              <div style={{ display: 'flex', gap: '12px' }}>
                {[Facebook, Twitter, LinkedinIcon].map((Icon, idx) => (
                  <button key={idx} style={{ 
                    width: '40px', 
                    height: '40px', 
                    borderRadius: '50%', 
                    background: '#f8fafc', 
                    border: 'none', 
                    color: '#64748b', 
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.2s'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#F43F5E';
                    e.currentTarget.style.color = '#fff';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#f8fafc';
                    e.currentTarget.style.color = '#64748b';
                  }}
                  >
                    <Icon size={18} />
                  </button>
                ))}
              </div>
            </div>

            <Link 
              to="/contact" 
              style={{ 
                padding: '12px 30px', 
                background: 'linear-gradient(135deg, #F43F5E 0%, #FB923C 100%)', 
                color: '#fff', 
                borderRadius: '12px', 
                textDecoration: 'none', 
                fontWeight: 700,
                boxShadow: '0 10px 20px -5px rgba(244,63,94,0.4)'
              }}
            >
              Get Expert Consultation
            </Link>
          </div>
        </footer>
      </div>

      <style>{`
        .blog-content h2 { 
          font-size: 2rem; 
          font-weight: 800; 
          color: #0f172a; 
          margin: 3rem 0 1.5rem; 
          font-family: 'Outfit', sans-serif;
        }
        .blog-content h3 { 
          font-size: 1.5rem; 
          font-weight: 700; 
          color: #1e293b; 
          margin: 2rem 0 1rem; 
          font-family: 'Outfit', sans-serif;
        }
        .blog-content p { margin-bottom: 1.5rem; }
        .blog-content blockquote {
          border-left: 4px solid #F43F5E;
          padding: 1.5rem 2rem;
          margin: 3rem 0;
          background: #fff5f6;
          font-style: italic;
          font-size: 1.25rem;
          color: #0f172a;
          border-radius: 0 1rem 1rem 0;
        }
      `}</style>
    </article>
  );
};

export default BlogDetail;
