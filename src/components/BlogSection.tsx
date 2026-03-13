import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { posts } from '../data/blogData';

const BlogSection = ({ showViewAll = true }: { showViewAll?: boolean }) => {
  const [page, setPage] = useState(0);
  const total = posts.length;

  const prev = () => setPage((p) => (p - 1 + total) % total);
  const next = () => setPage((p) => (p + 1) % total);

  // Show 3 posts starting from page index (cyclic)
  const visible = [0, 1, 2].map((i) => posts[(page + i) % total]);

  return (
    <section
      id="blog"
      style={{ padding: '3rem 0', background: '#fff', overflow: 'hidden' }}
    >
      <div className="container">
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
                background: 'linear-gradient(90deg, rgba(244,63,94,0.1), rgba(251,146,60,0.1))',
                border: '1px solid rgba(244,63,94,0.2)',
                marginBottom: '1rem',
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
                Our Blogs
              </span>
            </div>
            <h2
              style={{
                fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
                fontWeight: 800,
                color: '#0f172a',
                fontFamily: 'Outfit, sans-serif',
                margin: '0 0 2rem',
                lineHeight: 1.2,
                textTransform: 'uppercase',
                letterSpacing: '-0.01em',
              }}
            >
              Discover Our Latest News
              <br />
              And{' '}
              <span
                style={{
                  background: 'linear-gradient(90deg, #F43F5E 0%, #FB923C 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Updates Now.
              </span>
            </h2>
          </motion.div>

        </div>

        {/* ── Blog Cards ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.35 }}
            className="responsive-grid-3"
          >
            {visible.map((post, i) => (
              <Link
                to={`/blog/${post.slug}`}
                key={i}
                style={{
                  borderRadius: '1.25rem',
                  border: '1px solid #f0f2f5',
                  overflow: 'hidden',
                  background: '#fff',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.05)',
                  transition: 'box-shadow 0.3s, transform 0.3s',
                  cursor: 'pointer',
                  textDecoration: 'none',
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
                          background: 'linear-gradient(90deg, #F43F5E 0%, #FB923C 100%)',
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
                      fontSize: '1rem',
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
            ))}
          </motion.div>
        </AnimatePresence>

        {/* --- Bottom Navigation --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ display: 'flex', flexDirection: 'column', gap: '3rem', alignItems: 'center', marginTop: '3.5rem' }}
        >
          {/* Slider Controls */}
          <div style={{ display: 'flex', gap: '15px' }}>
            {[prev, next].map((fn, i) => (
              <button
                key={i}
                onClick={fn}
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  border: i === 0 ? '1.5px solid #e5e7eb' : 'none',
                  background: i === 0 ? '#fff' : 'linear-gradient(135deg, #F43F5E 0%, #FB923C 100%)',
                  color: i === 0 ? '#374151' : '#fff',
                  fontSize: '1.25rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: i === 1 ? '0 4px 14px rgba(244,63,94,0.3)' : '0 2px 6px rgba(0,0,0,0.06)',
                  transition: 'all 0.25s ease',
                }}
                onMouseEnter={(e) => {
                  if (i === 0) {
                    e.currentTarget.style.background = '#f9fafb';
                  } else {
                    e.currentTarget.style.transform = 'scale(1.05)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (i === 0) {
                    e.currentTarget.style.background = '#fff';
                  } else {
                    e.currentTarget.style.transform = 'scale(1)';
                  }
                }}
              >
                {i === 0 ? '‹' : '›'}
              </button>
            ))}
          </div>

          {/* View More Button */}
          {showViewAll && (
            <Link
              to="/blog"
              style={{
                padding: '10px 40px',
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
              Read All Articles
            </Link>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;
