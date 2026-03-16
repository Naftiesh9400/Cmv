import AboutSection from '../components/AboutSection';
import StatsSection from '../components/StatsSection';
import TestimonialsSection from '../components/TestimonialsSection';

const About = () => {
  return (
    <div style={{ paddingTop: '8rem', paddingBottom: '5rem' }}>
      <AboutSection showViewAll={false} />
      <StatsSection />
      <TestimonialsSection />
    </div>
  );
};

export default About;
