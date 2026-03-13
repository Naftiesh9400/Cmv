import ServicesSection from '../components/ServicesSection';
import ContactSection from '../components/ContactSection';

const Services = () => {
  return (
    <div style={{ paddingTop: '2rem' }}>
      <ServicesSection showViewAll={false} />
      <ContactSection />
    </div>
  );
};

export default Services;
