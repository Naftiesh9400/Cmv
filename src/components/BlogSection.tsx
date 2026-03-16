import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { posts } from '../data/blogData';

const BlogSection = ({ showViewAll = true }: { showViewAll?: boolean }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);
  const total = posts.length;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setCardsToShow(1);
      else if (window.innerWidth < 1024) setCardsToShow(2);
      else setCardsToShow(3);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const next = () => {
    if (currentIndex < total - cardsToShow) setCurrentIndex(prev => prev + 1);
    else setCurrentIndex(0);
  };

  const prev = () => {
    if (currentIndex > 0) setCurrentIndex(prev => prev - 1);
    else setCurrentIndex(total - cardsToShow);
  };

  return (
    <section
      id="blog"
      style={{ padding: '2rem 0', background: '#fff', overflow: 'hidden', position: 'relative' }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Center Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 2.5rem' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '5px 16px',
                borderRadius: '9999px',
                background: 'rgba(255, 77, 0, 0.08)',
                border: '1px solid rgba(255, 77, 0, 0.2)',
                marginBottom: '1rem',
              }}
            >
              <div
                style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #ff4d00, #ff8c00)',
                }}
              />
              <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#ff4d00', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                Our Blogs
              </span>
            </div>
            <h1
              style={{
                fontSize: 'clamp(2.25rem, 4.5vw, 3.25rem)',
                fontWeight: 800,
                color: '#0f172a',
                fontFamily: 'Outfit, sans-serif',
                margin: '0 0 2rem',
                lineHeight: 1,
                textTransform: 'none',
                letterSpacing: '-0.04em',
              }}
            >
              Real Results,<br />
              <span className="gradient-text">
                Real Impact
              </span>
            </h1>
          </motion.div>
        </div>

        {/* ── Carousel Controls ── */}
        <div style={{ 
          position: 'absolute', 
          top: '50%', 
          left: '0', 
          right: '0', 
          display: 'flex', 
          justifyContent: 'space-between', 
          padding: '0 20px', 
          pointerEvents: 'none',
          zIndex: 10,
          transform: 'translateY(-50%)'
        }}>
          <button 
            onClick={prev}
            style={{ 
              width: '50px', height: '50px', borderRadius: '50%', 
              background: '#fff', border: '1px solid #e2e8f0', 
              display: 'flex', alignItems: 'center', justifyContent: 'center', 
              cursor: 'pointer', pointerEvents: 'auto',
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
              transition: 'all 0.3s ease', color: '#ff4d00'
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#ff4d00'; e.currentTarget.style.color = '#fff'; }}
            onMouseLeave={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = '#ff4d00'; }}
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={next}
            style={{ 
              width: '50px', height: '50px', borderRadius: '50%', 
              background: '#fff', border: '1px solid #e2e8f0', 
              display: 'flex', alignItems: 'center', justifyContent: 'center', 
              cursor: 'pointer', pointerEvents: 'auto',
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
              transition: 'all 0.3s ease', color: '#ff4d00'
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#ff4d00'; e.currentTarget.style.color = '#fff'; }}
            onMouseLeave={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = '#ff4d00'; }}
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* ── Carousel Wrapper ── */}
        <div style={{ margin: '0 -15px', position: 'relative' }}>
          <motion.div
            animate={{ x: `-${currentIndex * (100 / cardsToShow)}%` }}
            transition={{ type: 'spring', stiffness: 260, damping: 26 }}
            style={{ 
              display: 'flex',
              width: '100%',
            }}
          >
            {posts.map((post, i) => (
              <div 
                key={i} 
                style={{ 
                  flex: `0 0 ${100 / cardsToShow}%`, 
                  padding: '0 15px',
                  boxSizing: 'border-box'
                }}
              >
                <Link
                  to={`/blog/${post.slug}`}
                  style={{
                    display: 'block',
                    borderRadius: '1.25rem',
                    border: '1px solid #f0f2f5',
                    overflow: 'hidden',
                    background: '#fff',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.05)',
                    transition: 'box-shadow 0.3s, transform 0.3s',
                    cursor: 'pointer',
                    textDecoration: 'none',
                    height: '100%',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 16px 40px rgba(0,0,0,0.1)';
                    (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-5px)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 4px 16px rgba(0,0,0,0.05)';
                    (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)';
                  }}
                >
                  {/* Image with overlaid tags */}
                  <div style={{ position: 'relative', overflow: 'hidden', aspectRatio: '16/10' }}>
                    <img
                      src={post.img}
                      alt={post.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.4s' }}
                    />
                    {/* Tag Overlay */}
                    <div
                      style={{
                        position: 'absolute',
                        bottom: '12px',
                        left: '12px',
                        display: 'flex',
                        gap: '6px',
                        flexWrap: 'wrap',
                      }}
                    >
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          style={{
                            padding: '4px 12px',
                            borderRadius: '9999px',
                            background: 'linear-gradient(90deg, #ff4d00 0%, #ff8c00 100%)',
                            color: '#fff',
                            fontSize: '0.7rem',
                            fontWeight: 700,
                            letterSpacing: '0.08em',
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Content */}
                  <div style={{ padding: '1.5rem' }}>
                    <h3
                      style={{
                        fontSize: '1.1rem',
                        fontWeight: 800,
                        color: '#0f172a',
                        fontFamily: 'Outfit, sans-serif',
                        textTransform: 'uppercase',
                        lineHeight: 1.3,
                        margin: '0 0 0.75rem',
                        letterSpacing: '0.01em',
                      }}
                    >
                      {post.title}
                    </h3>
                    <p
                      style={{
                        fontSize: '0.875rem',
                        color: '#6b7280',
                        lineHeight: 1.7,
                        margin: '0 0 1.25rem',
                        height: '4.5em',
                        overflow: 'hidden',
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                      }}
                    >
                      {post.desc}
                    </p>

                    {/* Author */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', paddingTop: '1rem', borderTop: '1px solid #f0f2f5' }}>
                      <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        style={{ width: '38px', height: '38px', borderRadius: '50%', objectFit: 'cover', objectPosition: 'top', flexShrink: 0 }}
                      />
                      <div>
                        <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#0f172a', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                          {post.author.name}
                        </div>
                        <div style={{ fontSize: '0.75rem', color: '#9ca3af' }}>{post.author.date}</div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </motion.div>
        </div>

        {/* --- Bottom Navigation --- */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', alignItems: 'center', marginTop: '3.5rem' }}>

          {/* View More Button */}
          {showViewAll && (
            <Link
              to="/blog"
              style={{
                padding: '12px 40px',
                border: '1px solid rgba(255, 77, 0, 0.2)',
                borderRadius: '9999px',
                background: '#fff',
                color: '#ff4d00',
                fontWeight: 700,
                fontSize: '0.85rem',
                cursor: 'pointer',
                letterSpacing: '0.02em',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, #ff4d00 0%, #ff8c00 100%)';
                e.currentTarget.style.color = '#fff';
                e.currentTarget.style.borderColor = 'transparent';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#fff';
                e.currentTarget.style.color = '#ff4d00';
                e.currentTarget.style.borderColor = 'rgba(255, 77, 0, 0.2)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Read All Articles
            </Link>
          )}
        </div>
      </div>

      {/* Running Text Marquee Background (Bottom) */}
      <div style={{ position: 'absolute', bottom: '5%', left: 0, width: '100%', overflow: 'hidden', opacity: 0.04, pointerEvents: 'none', whiteSpace: 'nowrap', zIndex: 0 }}>
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          style={{ display: 'inline-block', fontSize: '10rem', fontWeight: 950, fontFamily: 'Outfit, sans-serif' }}
        >
          <span style={{ color: '#0f172a' }}>Real Results, </span>
          <span style={{ color: '#ff4d00' }}>Real Impact • </span>
          <span style={{ color: '#0f172a' }}>Real Results, </span>
          <span style={{ color: '#ff4d00' }}>Real Impact • </span>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;
