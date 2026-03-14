import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import Services from './pages/Services'
import ServiceDetail from './pages/ServiceDetail'
import Blog from './pages/Blog'
import BlogDetail from './pages/BlogDetail'
import Contact from './pages/Contact'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/leadership" element={<About />} />
          <Route path="/our-clients" element={<About />} />
          <Route path="/our-partners" element={<About />} />
          <Route path="/case-study" element={<Projects />} />
          <Route path="/case-study/:slug" element={<ProjectDetail />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:categorySlug" element={<ServiceDetail />} />
          <Route path="/solutions" element={<Services />} />
          <Route path="/technologies" element={<Services />} />
          <Route path="/industry" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
