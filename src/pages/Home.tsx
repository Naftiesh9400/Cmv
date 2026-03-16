import Hero from '../components/Hero';
import LogoSlider from '../components/LogoSlider';
import AboutSection from '../components/AboutSection';
import StatsSection from '../components/StatsSection';
import ServicesSection from '../components/ServicesSection';
import ProjectsSection from '../components/ProjectsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import BlogSection from '../components/BlogSection';
import FAQSection from '../components/FAQSection';

const Home = () => {
  return (
    <>
      <Hero />
      <LogoSlider />
      <ServicesSection />
      <AboutSection />
      <StatsSection />
      <ProjectsSection />
      <TestimonialsSection />
      <BlogSection />
      <FAQSection />
    </>
  );
};

export default Home;
