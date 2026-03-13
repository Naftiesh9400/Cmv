import { motion } from 'framer-motion';

const ContactSection = ({ 
  showContactInfo = true, 
  showMap = true 
}: { 
  showContactInfo?: boolean;
  showMap?: boolean;
}) => {
  return (
    <section id="contact" style={{ padding: '3rem 0', background: '#f8faff', overflow: 'hidden' }}>
      <div className="container">
        <div className="responsive-grid-2" style={{ alignItems: 'center' }}>
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
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
                Contact Us
              </span>
            </div>
            <h2
              style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 800,
                color: '#0f172a',
                fontFamily: 'Outfit, sans-serif',
                margin: '0 0 1rem',
                lineHeight: 1.15,
                textTransform: 'uppercase',
                letterSpacing: '-0.01em',
              }}
            >
              Ready to Transform{' '}
              <span
                style={{
                  background: 'linear-gradient(90deg, #F43F5E 0%, #FB923C 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Your IT?
              </span>
            </h2>
            <p style={{ color: '#6b7280', lineHeight: 1.75, margin: '0 0 2rem', fontSize: '1rem' }}>
              Have a project in mind or need expert IT consultation? Fill out the form, and our team will get back to you within 24 hours.
            </p>

            {/* Contact Details */}
            {showContactInfo && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div>
                  <div style={{ fontSize: '0.9rem', color: '#9ca3af', fontWeight: 600, textTransform: 'uppercase', marginBottom: '4px' }}>
                    Email Us
                  </div>
                  <div style={{ fontSize: '1.1rem', color: '#0f172a', fontWeight: 700 }}>help@cmv-global.com</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.9rem', color: '#9ca3af', fontWeight: 600, textTransform: 'uppercase', marginBottom: '4px' }}>
                    Call Us
                  </div>
                  <div style={{ fontSize: '1.1rem', color: '#0f172a', fontWeight: 700 }}>+1 (555) 123-4567</div>
                </div>
              </div>
            )}
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{
              background: '#fff',
              padding: 'clamp(1.5rem, 5vw, 2.5rem)',
              borderRadius: '1.5rem',
              boxShadow: '0 10px 40px rgba(0,0,0,0.06)',
              border: '1px solid #f0f2f5',
            }}
          >
            <form style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {/* Full Name */}
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#374151', textTransform: 'uppercase', marginBottom: '6px' }}>Full Name *</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  required
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '8px',
                    border: '1px solid #e5e7eb',
                    background: '#f8fafc',
                    fontSize: '0.95rem',
                    outline: 'none',
                    transition: 'border-color 0.2s',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = '#2563EB')}
                  onBlur={(e) => (e.target.style.borderColor = '#e5e7eb')}
                />
              </div>

              {/* Grid: Email & WhatsApp */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#374151', textTransform: 'uppercase', marginBottom: '6px' }}>Work Email *</label>
                  <input
                    type="email"
                    placeholder="john@company.com"
                    required
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '8px',
                      border: '1px solid #e5e7eb',
                      background: '#f8fafc',
                      fontSize: '0.95rem',
                      outline: 'none',
                      transition: 'border-color 0.2s',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = '#2563EB')}
                    onBlur={(e) => (e.target.style.borderColor = '#e5e7eb')}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#374151', textTransform: 'uppercase', marginBottom: '6px' }}>WhatsApp Number</label>
                  <input
                    type="tel"
                    placeholder="+1 234 567 890"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '8px',
                      border: '1px solid #e5e7eb',
                      background: '#f8fafc',
                      fontSize: '0.95rem',
                      outline: 'none',
                      transition: 'border-color 0.2s',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = '#2563EB')}
                    onBlur={(e) => (e.target.style.borderColor = '#e5e7eb')}
                  />
                </div>
              </div>

              {/* Company Name */}
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#374151', textTransform: 'uppercase', marginBottom: '6px' }}>Company Name</label>
                <input
                  type="text"
                  placeholder="Your Company Inc."
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '8px',
                    border: '1px solid #e5e7eb',
                    background: '#f8fafc',
                    fontSize: '0.95rem',
                    outline: 'none',
                    transition: 'border-color 0.2s',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = '#2563EB')}
                  onBlur={(e) => (e.target.style.borderColor = '#e5e7eb')}
                />
              </div>

              {/* Service Interest */}
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#374151', textTransform: 'uppercase', marginBottom: '6px' }}>Service Interest *</label>
                <select
                  required
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '8px',
                    border: '1px solid #e5e7eb',
                    background: '#f8fafc',
                    fontSize: '0.95rem',
                    outline: 'none',
                    cursor: 'pointer',
                    transition: 'border-color 0.2s',
                    color: '#374151',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = '#2563EB')}
                  onBlur={(e) => (e.target.style.borderColor = '#e5e7eb')}
                >
                  <option value="" disabled selected>Select a Service</option>
                  <option value="IT Consulting">IT Consulting</option>
                  <option value="Cybersecurity">Cybersecurity</option>
                  <option value="Cloud Migration">Cloud Migration</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Managed IT">Managed IT Support</option>
                  <option value="Other">Other Integration</option>
                </select>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                onClick={(e) => e.preventDefault()}
                style={{
                  marginTop: '0.5rem',
                  padding: '16px',
                  borderRadius: '8px',
                  border: 'none',
                  background: 'linear-gradient(135deg, #F43F5E 0%, #FB923C 100%)',
                  color: '#fff',
                  fontSize: '1rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  boxShadow: '0 4px 15px rgba(244,63,94,0.3)',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(244,63,94,0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(244,63,94,0.3)';
                }}
              >
                Get Free Consultation
              </button>
            </form>
          </motion.div>
        </div>

        {/* --- Google Map --- */}
        {showMap && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{
              marginTop: '4rem',
              borderRadius: '1.5rem',
              overflow: 'hidden',
              boxShadow: '0 20px 50px rgba(0,0,0,0.08)',
              border: '1px solid #f0f2f5',
              height: '450px',
              width: '100%'
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.5847377561!2d77.4045353!3d28.5221297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce9ae1a9a9a1b%3A0xc3f1f7e3c15f5c1!2sBhutani%20Alphathum!5e0!3m2!1sen!2sin!4v1710334800000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="CMV Technologies Office Location"
            />
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ContactSection;
