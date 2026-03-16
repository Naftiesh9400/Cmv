import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';

const ContactSection = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.name && form.email && form.service) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000);
      setForm({ name: '', email: '', phone: '', service: '' });
    }
  };

  return (
    <section
      id="contact"
      style={{
        background: '#ffffff',
        padding: '3.5rem 0',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid #f0f2f5',
      }}
    >
      {/* Background decorations */}
      <div style={{
        position: 'absolute', top: '-80px', right: '-80px',
        width: '300px', height: '300px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,77,0,0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '-60px', left: '-60px',
        width: '250px', height: '250px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,140,0,0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Top: Heading (Centered) */}
        <div style={{
          textAlign: 'center',
          marginBottom: '3rem',
          maxWidth: '800px',
          margin: '0 auto 3rem auto'
        }}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '7px',
              padding: '6px 16px', borderRadius: '9999px',
              background: 'rgba(255,77,0,0.08)', border: '1px solid rgba(255,77,0,0.15)',
              marginBottom: '1.25rem',
            }}>
              <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#ff4d00' }} />
              <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#ff4d00', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                Get In Touch
              </span>
            </div>
            <h2 style={{
              fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
              fontWeight: 800, color: '#0f172a',
              fontFamily: 'Outfit, sans-serif',
              margin: '0 0 16px', lineHeight: 1.1,
            }}>
              Let's turn your ideas into<br />{' '}
              <span style={{
                backgroundImage: 'linear-gradient(90deg, #ff4d00 0%, #ff8c00 100%)',
                WebkitBackgroundClip: 'text', backgroundClip: 'text',
                WebkitTextFillColor: 'transparent', color: 'transparent',
                display: 'inline-block',
              }}>
                thriving businesses.
              </span>
            </h2>
            <p style={{ color: '#64748b', fontSize: '1.1rem', margin: '0', lineHeight: 1.6 }}>
              We'll get back to you within 24 hours.
            </p>
          </motion.div>
        </div>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          style={{
            background: '#f8fafc',
            border: '1px solid #e5e7eb',
            borderRadius: '1.25rem',
            padding: '1.75rem 2rem',
          }}
        >
          {submitted ? (
            <div style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center',
              justifyContent: 'center', gap: '1rem', minHeight: '120px',
            }}>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 200 }}
              >
                <CheckCircle size={48} color="#22c55e" />
              </motion.div>
              <div style={{ color: '#0f172a', fontWeight: 700, fontSize: '1.1rem', fontFamily: 'Outfit, sans-serif' }}>
                Message Sent! We'll contact you soon.
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {/* Inline grid form */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: '1rem',
                marginBottom: '1rem',
              }}>
                {/* Name */}
                <div>
                  <label style={labelStyle}>Full Name *</label>
                  <input
                    type="text" placeholder="John Doe" required
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    style={inputStyle}
                    onFocus={e => (e.target.style.borderColor = '#ff4d00')}
                    onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.15)')}
                  />
                </div>

                {/* Email */}
                <div>
                  <label style={labelStyle}>Work Email *</label>
                  <input
                    type="email" placeholder="john@company.com" required
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    style={inputStyle}
                    onFocus={e => (e.target.style.borderColor = '#ff4d00')}
                    onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.15)')}
                  />
                </div>

                {/* Phone */}
                <div>
                  <label style={labelStyle}>WhatsApp / Phone</label>
                  <input
                    type="tel" placeholder="+1 234 567 890"
                    value={form.phone}
                    onChange={e => setForm({ ...form, phone: e.target.value })}
                    style={inputStyle}
                    onFocus={e => (e.target.style.borderColor = '#ff4d00')}
                    onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.15)')}
                  />
                </div>

                {/* Service */}
                <div>
                  <label style={labelStyle}>Service Interest *</label>
                  <select
                    required
                    value={form.service}
                    onChange={e => setForm({ ...form, service: e.target.value })}
                    style={{ ...inputStyle, cursor: 'pointer' }}
                    onFocus={e => (e.target.style.borderColor = '#ff4d00')}
                    onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.15)')}
                  >
                    <option value="" disabled>Select a Service</option>
                    <option value="IT Consulting">IT Consulting</option>
                    <option value="Cybersecurity">Cybersecurity</option>
                    <option value="Cloud Migration">Cloud Migration</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Managed IT">Managed IT Support</option>
                    <option value="Other">Other / Custom</option>
                  </select>
                </div>
              </div>

              {/* Submit */}
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <button
                  type="submit"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '8px',
                    padding: '13px 32px', borderRadius: '9999px', border: 'none',
                    background: 'linear-gradient(135deg, #ff4d00 0%, #ff8c00 100%)',
                    color: '#fff', fontSize: '0.9rem', fontWeight: 700,
                    cursor: 'pointer', letterSpacing: '0.04em', textTransform: 'uppercase',
                    boxShadow: '0 4px 18px rgba(255,77,0,0.35)',
                    transition: 'all 0.25s ease',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(255,77,0,0.45)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 18px rgba(255,77,0,0.35)';
                  }}
                >
                  Send Message
                  <Send size={15} />
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: '0.72rem',
  fontWeight: 700,
  color: '#6b7280',
  textTransform: 'uppercase',
  letterSpacing: '0.07em',
  marginBottom: '5px',
};

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '10px 14px',
  borderRadius: '8px',
  border: '1px solid #e5e7eb',
  background: '#fff',
  color: '#0f172a',
  fontSize: '0.9rem',
  outline: 'none',
  transition: 'border-color 0.2s',
  boxSizing: 'border-box',
  fontFamily: 'inherit',
};

export default ContactSection;
