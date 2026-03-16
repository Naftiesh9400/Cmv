import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ContactSection from './components/ContactSection'

import Home from './pages/Home'
import About from './pages/About'
import ProjectDetail from './pages/ProjectDetail'
import Services from './pages/Services'
import ServiceDetail from './pages/ServiceDetail'
import ServiceItemDetail from './pages/ServiceItemDetail'
import Blog from './pages/Blog'
import BlogDetail from './pages/BlogDetail'
import Contact from './pages/Contact'
import Leadership from './pages/Leadership'
import Clients from './pages/Clients'
import Partners from './pages/Partners'
import Solutions from './pages/Solutions'
import Technologies from './pages/Technologies'
import Industries from './pages/Industries'
import SuccessStories from './pages/SuccessStories'

function App() {
  const location = useLocation();
  const hideContactSection = location.pathname === '/contact';

  return (
    <div className="min-h-screen">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/our-clients" element={<Clients />} />
          <Route path="/our-partners" element={<Partners />} />
          <Route path="/case-study" element={<SuccessStories />} />
          <Route path="/case-study/:slug" element={<ProjectDetail />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:categorySlug" element={<ServiceDetail />} />
          <Route path="/services/:categorySlug/:serviceSlug" element={<ServiceItemDetail />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/technologies" element={<Technologies />} />
          <Route path="/industry" element={<Industries />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      {!hideContactSection && <ContactSection />}
      <Footer />
    </div>
  )
}

export default App
