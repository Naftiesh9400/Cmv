import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';

const Projects = () => {
  return (
    <div style={{ paddingTop: '2rem' }}>
      <ProjectsSection showViewAll={false} />
      <ContactSection />
    </div>
  );
};

export default Projects;
