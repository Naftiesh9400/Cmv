import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "What specific IT services does CMV Technologies provide?",
    answer: "We offer a comprehensive suite of IT services including dynamic cloud infrastructure management, end-to-end cybersecurity audits, custom software development, and proactive 24/7 managed IT support tailored to your business needs."
  },
  {
    question: "How do you ensure the security of our sensitive business data?",
    answer: "Security is built into our core. We implement zero-trust architectures, advanced encryption standards, regular penetration testing, and continuous threat monitoring to ensure your data remains protected against evolving digital threats."
  },
  {
    question: "Can CMV Technologies help with cloud migration for large enterprises?",
    answer: "Absolutely. We specialize in seamless enterprise cloud migrations with zero downtime. Our experts handle everything from initial assessment and cloud strategy to execution and ongoing optimization on AWS, Azure, and GCP."
  },
  {
    question: "What sets CMV Technologies apart from other IT consulting firms?",
    answer: "Unlike generic providers, we combine deep technical expertise with a strategic business approach. We don't just fix IT problems; we align technology with your business objectives to drive measurable growth and ROI."
  },
  {
    question: "Do you offer post-project support and maintenance?",
    answer: "Yes, we believe in long-term partnerships. Every project is backed by our dedicated support team, and we offer various managed service levels to ensure your systems stay updated, secure, and high-performing."
  }
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="faq" style={{ padding: '3.5rem 0', background: '#fff' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ 
              fontSize: '0.85rem', 
              fontWeight: 800, 
              color: '#ff4d00', 
              textTransform: 'uppercase', 
              letterSpacing: '0.1em',
              display: 'block',
              marginBottom: '1rem'
            }}
          >
            Need Answers?
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{ 
              fontSize: 'clamp(2.25rem, 4vw, 3rem)', 
              fontWeight: 800, 
              color: '#0f172a', 
              fontFamily: 'Outfit, sans-serif',
              marginBottom: '1.25rem',
              letterSpacing: '-0.02em'
            }}
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{ color: '#64748b', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}
          >
            Explore common inquiries about our IT services and find instant solutions to your technology questions.
          </motion.p>
        </div>

        {/* FAQ List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              style={{
                background: '#f8fafc',
                borderRadius: '1.25rem',
                overflow: 'hidden',
                border: '1px solid #f1f5f9',
                transition: 'all 0.3s ease'
              }}
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                style={{
                  width: '100%',
                  padding: '1.75rem 2rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                  gap: '1rem'
                }}
              >
                <span style={{ 
                  fontSize: '1.15rem', 
                  fontWeight: 700, 
                  color: activeIndex === index ? '#ff4d00' : '#0f172a',
                  transition: 'color 0.3s ease',
                  fontFamily: 'Outfit, sans-serif'
                }}>
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ color: activeIndex === index ? '#ff4d00' : '#94a3b8' }}
                >
                  <ChevronDown size={20} />
                </motion.div>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div style={{ padding: '0 2rem 1.75rem', color: '#64748b', lineHeight: 1.7, fontSize: '1rem' }}>
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
