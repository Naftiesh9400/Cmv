import { motion } from 'framer-motion';

// Import logos from local assets
import logoAdobe from '../assets/logo/Adobe.png';
import logoAirbnb from '../assets/logo/Company=Airbnb.png';
import logoAmazon from '../assets/logo/Company=Amazon.png';
import logoAsana from '../assets/logo/Company=Asana.png';
import logoAtlassian from '../assets/logo/Company=Atlassian.png';
import logoBooking from '../assets/logo/Company=Booking.com.png';
import logoCanva from '../assets/logo/Company=Canva.png';
import logoDiscord from '../assets/logo/Company=Discord.png';
import logoDocker from '../assets/logo/Company=Docker.png';
import logoDropbox from '../assets/logo/Company=Dropbox.png';
import logoFigma from '../assets/logo/Company=Figma.png';
import logoGoogle from '../assets/logo/Company=Google.png';
import logoMicrosoft from '../assets/logo/Company=Microsoft.png';
import logoPayPal from '../assets/logo/Company=PayPal.png';
import logoSlack from '../assets/logo/Company=Slack.png';
import logoZoom from '../assets/logo/Company=Zoom.png';

const row1 = [
  { name: 'Adobe', logo: logoAdobe },
  { name: 'Airbnb', logo: logoAirbnb },
  { name: 'Amazon', logo: logoAmazon },
  { name: 'Asana', logo: logoAsana },
  { name: 'Atlassian', logo: logoAtlassian },
  { name: 'Booking.com', logo: logoBooking },
  { name: 'Canva', logo: logoCanva },
];

const row2 = [
  { name: 'Discord', logo: logoDiscord },
  { name: 'Docker', logo: logoDocker },
  { name: 'Dropbox', logo: logoDropbox },
  { name: 'Figma', logo: logoFigma },
  { name: 'Google', logo: logoGoogle },
  { name: 'Microsoft', logo: logoMicrosoft },
  { name: 'PayPal', logo: logoPayPal },
  { name: 'Slack', logo: logoSlack },
  { name: 'Zoom', logo: logoZoom },
];

const LogoSlider = () => {
  return (
    <div style={{ padding: '0', background: '#f8f9fa', borderTop: '1px solid #eee', borderBottom: '1px solid #eee', overflow: 'hidden' }}>
      
      {/* Row 1 */}
      <div className="logo-slider-row" style={{ position: 'relative', height: '120px', display: 'flex', alignItems: 'center', borderBottom: '1px solid #eee' }}>
        <motion.div
          animate={{ x: [0, -1035] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
          style={{ display: 'flex', width: 'max-content' }}
        >
          {[...row1, ...row1, ...row1].map((brand, i) => (
            <div key={i} className="logo-slider-item" style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              width: '200px', 
              height: '118px', 
              borderRight: '1px solid #eee',
              padding: '0 2.5rem',
              background: '#fff' 
            }}>
              <img 
                src={brand.logo} 
                alt={brand.name} 
                className="logo-img"
                style={{ 
                  maxHeight: '45px', 
                  maxWidth: '140px', 
                  objectFit: 'contain',
                  filter: 'none',
                  opacity: 1,
                  transition: '0.3s'
                }} 
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.1)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Row 2 */}
      <div className="logo-slider-row" style={{ position: 'relative', height: '120px', display: 'flex', alignItems: 'center' }}>
        <motion.div
          animate={{ x: [-1035, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
          style={{ display: 'flex', width: 'max-content' }}
        >
          {[...row2, ...row2, ...row2].map((brand, i) => (
            <div key={i} className="logo-slider-item" style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              width: '200px', 
              height: '118px', 
              borderRight: '1px solid #eee',
              padding: '0 2.5rem',
              background: '#fff' 
            }}>
              <img 
                src={brand.logo} 
                alt={brand.name} 
                className="logo-img"
                style={{ 
                  maxHeight: '45px', 
                  maxWidth: '140px', 
                  objectFit: 'contain',
                  filter: 'none',
                  opacity: 1,
                  transition: '0.3s'
                }} 
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.1)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
              />
            </div>
          ))}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .logo-slider-row {
            height: 70px !important;
          }
          .logo-slider-item {
            width: 140px !important;
            height: 68px !important;
            padding: 0 1rem !important;
          }
          .logo-img {
            max-height: 28px !important;
            max-width: 90px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default LogoSlider;