import BlogSection from '../components/BlogSection';
import ContactSection from '../components/ContactSection';

const Blog = () => {
  return (
    <div style={{ paddingTop: '2rem' }}>
      <BlogSection showViewAll={false} />
      <ContactSection />
    </div>
  );
};

export default Blog;
