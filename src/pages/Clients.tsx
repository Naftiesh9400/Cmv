import { motion } from 'framer-motion';

// Import logos from assets
import Adobe from '../assets/logo/Adobe.png';
import Amazon from '../assets/logo/Company=Amazon.png';
import Google from '../assets/logo/Company=Google.png';
import Microsoft from '../assets/logo/Company=Microsoft.png';
import Slack from '../assets/logo/Company=Slack.png';
import Shopify from '../assets/logo/Company=Shopify.png';
import PayPal from '../assets/logo/Company=PayPal.png';
import Figma from '../assets/logo/Company=Figma.png';
import Discord from '../assets/logo/Company=Discord.png';
import WhatsApp from '../assets/logo/Company=Whatsapp.png';
import Zoom from '../assets/logo/Company=Zoom.png';
import Airbnb from '../assets/logo/Company=Airbnb.png';
import Atlassian from '../assets/logo/Company=Atlassian.png';
import Canva from '../assets/logo/Company=Canva.png';
import Docker from '../assets/logo/Company=Docker.png';
import Dropbox from '../assets/logo/Company=Dropbox.png';
import Gitlab from '../assets/logo/Company=Gitlab.png';
import Grammarly from '../assets/logo/Company=Grammarly.png';
import Postman from '../assets/logo/Company=Postman.png';
import Razorpay from '../assets/logo/Company=Razorpay.png';
import Dribbble from '../assets/logo/Company=Dribbble.png';
import Booking from '../assets/logo/Company=Booking.com.png';
import Coinbase from '../assets/logo/Company=Coinbase.png';

const clients = [
  { name: 'Google', logo: Google, industry: 'Technology' },
  { name: 'Amazon', logo: Amazon, industry: 'E-commerce' },
  { name: 'Microsoft', logo: Microsoft, industry: 'Computing' },
  { name: 'Adobe', logo: Adobe, industry: 'Creative' },
  { name: 'Slack', logo: Slack, industry: 'Collaboration' },
  { name: 'Shopify', logo: Shopify, industry: 'E-commerce' },
  { name: 'PayPal', logo: PayPal, industry: 'FinTech' },
  { name: 'Figma', logo: Figma, industry: 'Design' },
  { name: 'Discord', logo: Discord, industry: 'Communication' },
  { name: 'WhatsApp', logo: WhatsApp, industry: 'Messaging' },
  { name: 'Zoom', logo: Zoom, industry: 'Video' },
  { name: 'Airbnb', logo: Airbnb, industry: 'Hospitality' },
  { name: 'Atlassian', logo: Atlassian, industry: 'SaaS' },
  { name: 'Canva', logo: Canva, industry: 'Design' },
  { name: 'Docker', logo: Docker, industry: 'DevOps' },
  { name: 'Dropbox', logo: Dropbox, industry: 'Cloud Storage' },
  { name: 'Gitlab', logo: Gitlab, industry: 'DevSecOps' },
  { name: 'Grammarly', logo: Grammarly, industry: 'AI Writing' },
  { name: 'Postman', logo: Postman, industry: 'API Dev' },
  { name: 'Razorpay', logo: Razorpay, industry: 'FinTech' },
  { name: 'Dribbble', logo: Dribbble, industry: 'Creative' },
  { name: 'Booking.com', logo: Booking, industry: 'Travel' },
  { name: 'Coinbase', logo: Coinbase, industry: 'Crypto' }
];

export default function Clients() {
  return (
    <div className="pt-32 pb-32">
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 6rem' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#ff4d00', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Our Clients</span>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, color: '#0f172a', fontFamily: 'Outfit, sans-serif', margin: '1rem 0', lineHeight: 1.1 }}>
              Trusted by Industry <span className="gradient-text">Leaders</span>
          </h1>
            <p style={{ color: '#64748b', fontSize: '1.1rem', lineHeight: 1.6 }}>
              We've helped hundreds of companies across various sectors achieve their digital goals and scale their operations.
            </p>
          </motion.div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem', alignItems: 'center' }}>
          {clients.map((client, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -8, borderColor: '#ff4d00', boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }}
              style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                gap: '1.5rem', 
                padding: '3rem 2rem', 
                borderRadius: '24px', 
                background: '#fff', 
                border: '1px solid #f1f5f9',
                boxShadow: '0 4px 20px rgba(0,0,0,0.02)',
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
              }}
            >
              <div style={{ height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src={client.logo} alt={client.name} style={{ maxWidth: '140px', maxHeight: '50px', width: 'auto', height: 'auto', objectFit: 'contain' }} />
              </div>
              <span style={{ fontSize: '0.7rem', fontWeight: 800, color: '#ff4d00', textTransform: 'uppercase', letterSpacing: '0.1em', background: 'rgba(255,77,0,0.06)', padding: '6px 14px', borderRadius: '99px' }}>
                {client.industry}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
