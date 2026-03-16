import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Mail, Phone, Clock, CheckCircle, MessageSquare, Users, Award, Zap } from 'lucide-react';


const trustBadges = [
  { icon: <Users size={22} color="#ff4d00" />, label: '500+ Clients Worldwide' },
  { icon: <Award size={22} color="#ff4d00" />, label: 'ISO 27001 Certified' },
  { icon: <Zap size={22} color="#ff4d00" />, label: '24hr Response Guarantee' },
  { icon: <MessageSquare size={22} color="#ff4d00" />, label: 'Dedicated Account Manager' },
];

const inputStyle: React.CSSProperties = {
  width: '100%', padding: '12px 16px', borderRadius: '10px',
  border: '1.5px solid #e5e7eb', background: '#f9fafb',
  color: '#0f172a', fontSize: '0.95rem', outline: 'none',
  transition: 'all 0.2s ease', boxSizing: 'border-box', fontFamily: 'inherit',
};
const labelStyle: React.CSSProperties = {
  display: 'block', fontSize: '0.8rem', fontWeight: 700,
  color: '#374151', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '6px',
};

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // JSON-LD for Contact page
    const id = 'contact-page-schema';
    if (!document.getElementById(id)) {
      const s = document.createElement('script');
      s.id = id; s.type = 'application/ld+json';
      s.text = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        name: 'Contact CMV Technologies',
        description: 'Reach out to CMV Technologies for IT consulting, cybersecurity, cloud, and web development services.',
        url: 'https://cmv-global.com/contact',
        mainEntity: {
          '@type': 'Organization',
          name: 'CMV Technologies International Pvt. Ltd.',
          telephone: '+1-555-123-4567',
          email: 'help@cmv-global.com',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'B517, 5th Floor, Bhutani Alphathum, Sector 90',
            addressLocality: 'Noida', addressRegion: 'UP', postalCode: '201304', addressCountry: 'IN',
          },
        },
      });
      document.head.appendChild(s);
    }
    return () => { document.getElementById('contact-page-schema')?.remove(); };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.name && form.email && form.service) {
      setSubmitted(true);
      setForm({ name: '', email: '', phone: '', company: '', service: '', message: '' });
    }
  };

  return (
    <main itemScope itemType="https://schema.org/ContactPage">

      {/* ── SEO Meta Title (hidden visually, for structure) ── */}
      <title>Contact Us | CMV Technologies — IT Consulting & Cybersecurity</title>

      {/* ── Hero ── */}
      <section
        aria-label="Contact hero"
        style={{
          background: '#ffffff',
          padding: '7rem 0 5rem',
          position: 'relative', overflow: 'hidden',
          borderBottom: '1px solid #f0f2f5',
        }}
      >
        <div style={{ position: 'absolute', top: '-60px', right: '-60px', width: '300px', height: '300px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,77,0,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', padding: '4px 14px', borderRadius: '9999px', background: 'rgba(255,77,0,0.15)', border: '1px solid rgba(255,77,0,0.3)', marginBottom: '1.25rem' }}>
              <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#ff4d00' }} />
              <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#ff6b35', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Contact Us</span>
            </div>
            <h1 itemProp="name" style={{ fontSize: 'clamp(2.25rem, 4.5vw, 3.25rem)', fontWeight: 800, color: '#0f172a', fontFamily: 'Outfit, sans-serif', margin: '0 0 1rem', lineHeight: 1.1 }}>
              Let's Build Something<br />{' '}
              <span style={{ backgroundImage: 'linear-gradient(90deg, #ff4d00 0%, #ff8c00 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent', color: 'transparent', display: 'inline-block' }}>
                Great Together
              </span>
            </h1>
            <p style={{ color: '#64748b', fontSize: '1.05rem', maxWidth: '520px', margin: '0 auto 2rem', lineHeight: 1.7 }}>
              Whether you have a project in mind or just want to explore possibilities — we'd love to hear from you.
            </p>

            {/* Trust badges */}
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1rem' }}>
              {trustBadges.map((b, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 + i * 0.08 }}
                  style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 16px', borderRadius: '9999px', background: '#f8fafc', border: '1px solid #e5e7eb', color: '#374151', fontSize: '0.82rem', fontWeight: 600 }}>
                  {b.icon} {b.label}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Main Content: Form + Info ── */}
      <section aria-label="Contact form and information" style={{ background: '#f8faff', padding: '4rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'start' }}>

            {/* LEFT — Contact Info */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, color: '#0f172a', fontFamily: 'Outfit, sans-serif', margin: '0 0 0.5rem', lineHeight: 1.2 }}>
                Get in Touch
              </h2>
              <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: 1.75, margin: '0 0 2rem' }}>
                Our team of experts is available Monday–Friday, 9am–6pm IST. We'll get back to you within 24 hours.
              </p>

              {/* Contact info items */}
              <address style={{ fontStyle: 'normal', display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}
                itemScope itemType="https://schema.org/LocalBusiness">
                {[
                  { Icon: MapPin, label: 'Our Office', value: 'B517, 5th Floor, Bhutani Alphathum, Sector 90, Noida, UP 201304', href: 'https://maps.google.com', itemprop: 'address' },
                  { Icon: Mail, label: 'Email Us', value: 'help@cmv-global.com', href: 'mailto:help@cmv-global.com', itemprop: 'email' },
                  { Icon: Phone, label: 'Call Us', value: '+1 (555) 123-4567', href: 'tel:+15551234567', itemprop: 'telephone' },
                  { Icon: Clock, label: 'Business Hours', value: 'Mon – Fri, 9:00 AM – 6:00 PM IST', href: undefined, itemprop: undefined },
                ].map(({ Icon, label, value, href, itemprop }, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                    style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', padding: '1.1rem 1.25rem', background: '#fff', borderRadius: '14px', border: '1px solid #f0f2f5', boxShadow: '0 2px 8px rgba(0,0,0,0.03)' }}>
                    <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: 'rgba(255,77,0,0.07)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Icon size={18} color="#ff4d00" />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: '3px' }}>{label}</div>
                      {href ? (
                        <a href={href} itemProp={itemprop} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          style={{ fontSize: '0.925rem', fontWeight: 600, color: '#0f172a', textDecoration: 'none', transition: 'color 0.2s' }}
                          onMouseEnter={e => (e.currentTarget.style.color = '#ff4d00')}
                          onMouseLeave={e => (e.currentTarget.style.color = '#0f172a')}>
                          {value}
                        </a>
                      ) : (
                        <span style={{ fontSize: '0.925rem', fontWeight: 600, color: '#0f172a' }}>{value}</span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </address>

              {/* Map */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
                style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 8px 30px rgba(0,0,0,0.08)', border: '1px solid #f0f2f5', height: '260px' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.5847377561!2d77.4045353!3d28.5221297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce9ae1a9a9a1b%3A0xc3f1f7e3c15f5c1!2sBhutani%20Alphathum!5e0!3m2!1sen!2sin!4v1710334800000!5m2!1sen!2sin"
                  width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade" title="CMV Technologies Office — Bhutani Alphathum, Noida"
                  aria-label="Google Map showing CMV Technologies office location"
                />
              </motion.div>
            </motion.div>

            {/* RIGHT — Contact Form */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
              <div style={{ background: '#fff', borderRadius: '20px', padding: 'clamp(1.5rem, 4vw, 2.5rem)', boxShadow: '0 10px 40px rgba(0,0,0,0.06)', border: '1px solid #f0f2f5' }}>
                {submitted ? (
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem', minHeight: '300px', textAlign: 'center' }}>
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 200 }}>
                      <CheckCircle size={60} color="#22c55e" />
                    </motion.div>
                    <h3 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1.5rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>Message Sent!</h3>
                    <p style={{ color: '#64748b', margin: 0 }}>Thank you for reaching out. Our team will contact you within 24 hours.</p>
                    <button onClick={() => setSubmitted(false)}
                      style={{ marginTop: '1rem', padding: '10px 24px', borderRadius: '9999px', border: '1.5px solid rgba(255,77,0,0.3)', background: 'transparent', color: '#ff4d00', fontWeight: 700, fontSize: '0.875rem', cursor: 'pointer' }}>
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <>
                    <div style={{ marginBottom: '1.75rem' }}>
                      <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1.5rem', fontWeight: 800, color: '#0f172a', margin: '0 0 0.35rem' }}>Send Us a Message</h2>
                      <p style={{ color: '#64748b', fontSize: '0.875rem', margin: 0 }}>Fill in the form below and we'll get back to you shortly.</p>
                    </div>

                    <form onSubmit={handleSubmit} noValidate aria-label="Contact form" style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                      {/* Name + Company */}
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                        <div>
                          <label htmlFor="contact-name" style={labelStyle}>Full Name *</label>
                          <input id="contact-name" type="text" placeholder="John Doe" required value={form.name}
                            onChange={e => setForm({ ...form, name: e.target.value })} style={inputStyle}
                            onFocus={e => { e.target.style.borderColor = '#ff4d00'; e.target.style.background = '#fff'; }}
                            onBlur={e => { e.target.style.borderColor = '#e5e7eb'; e.target.style.background = '#f9fafb'; }} />
                        </div>
                        <div>
                          <label htmlFor="contact-company" style={labelStyle}>Company Name</label>
                          <input id="contact-company" type="text" placeholder="Your Company Inc." value={form.company}
                            onChange={e => setForm({ ...form, company: e.target.value })} style={inputStyle}
                            onFocus={e => { e.target.style.borderColor = '#ff4d00'; e.target.style.background = '#fff'; }}
                            onBlur={e => { e.target.style.borderColor = '#e5e7eb'; e.target.style.background = '#f9fafb'; }} />
                        </div>
                      </div>

                      {/* Email + Phone */}
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                        <div>
                          <label htmlFor="contact-email" style={labelStyle}>Work Email *</label>
                          <input id="contact-email" type="email" placeholder="john@company.com" required value={form.email}
                            onChange={e => setForm({ ...form, email: e.target.value })} style={inputStyle}
                            onFocus={e => { e.target.style.borderColor = '#ff4d00'; e.target.style.background = '#fff'; }}
                            onBlur={e => { e.target.style.borderColor = '#e5e7eb'; e.target.style.background = '#f9fafb'; }} />
                        </div>
                        <div>
                          <label htmlFor="contact-phone" style={labelStyle}>WhatsApp / Phone</label>
                          <input id="contact-phone" type="tel" placeholder="+1 234 567 890" value={form.phone}
                            onChange={e => setForm({ ...form, phone: e.target.value })} style={inputStyle}
                            onFocus={e => { e.target.style.borderColor = '#ff4d00'; e.target.style.background = '#fff'; }}
                            onBlur={e => { e.target.style.borderColor = '#e5e7eb'; e.target.style.background = '#f9fafb'; }} />
                        </div>
                      </div>

                      {/* Service */}
                      <div>
                        <label htmlFor="contact-service" style={labelStyle}>Service Interest *</label>
                        <select id="contact-service" required value={form.service}
                          onChange={e => setForm({ ...form, service: e.target.value })}
                          style={{ ...inputStyle, cursor: 'pointer' }}
                          onFocus={e => { e.target.style.borderColor = '#ff4d00'; e.target.style.background = '#fff'; }}
                          onBlur={e => { e.target.style.borderColor = '#e5e7eb'; e.target.style.background = '#f9fafb'; }}>
                          <option value="" disabled>Select a Service</option>
                          <option>IT Consulting</option>
                          <option>Cybersecurity Solutions</option>
                          <option>Cloud Migration</option>
                          <option>Web & App Development</option>
                          <option>AI & ML Services</option>
                          <option>Managed IT Support</option>
                          <option>Digital Transformation</option>
                          <option>Other / Custom</option>
                        </select>
                      </div>

                      {/* Message */}
                      <div>
                        <label htmlFor="contact-message" style={labelStyle}>Message</label>
                        <textarea id="contact-message" placeholder="Tell us about your project, goals, or questions..." rows={4} value={form.message}
                          onChange={e => setForm({ ...form, message: e.target.value })}
                          style={{ ...inputStyle, resize: 'vertical', minHeight: '110px' }}
                          onFocus={e => { e.target.style.borderColor = '#ff4d00'; e.target.style.background = '#fff'; }}
                          onBlur={e => { e.target.style.borderColor = '#e5e7eb'; e.target.style.background = '#f9fafb'; }} />
                      </div>

                      {/* Submit */}
                      <button type="submit"
                        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '14px', borderRadius: '12px', border: 'none', background: 'linear-gradient(135deg, #ff4d00 0%, #ff8c00 100%)', color: '#fff', fontSize: '0.95rem', fontWeight: 700, cursor: 'pointer', letterSpacing: '0.03em', boxShadow: '0 4px 18px rgba(255,77,0,0.3)', transition: 'all 0.25s ease' }}
                        onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(255,77,0,0.4)'; }}
                        onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 18px rgba(255,77,0,0.3)'; }}>
                        Send Message <Send size={16} />
                      </button>

                      <p style={{ fontSize: '0.75rem', color: '#9ca3af', textAlign: 'center', margin: 0 }}>
                        🔒 Your information is secure and will never be shared with third parties.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
