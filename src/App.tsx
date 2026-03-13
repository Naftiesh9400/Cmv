import Header from './components/Header'
import Hero from './components/Hero'
import LogoSlider from './components/LogoSlider'
import AboutSection from './components/AboutSection'
import StatsSection from './components/StatsSection'
import ServicesSection from './components/ServicesSection'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <LogoSlider />
        <AboutSection />
        <StatsSection />
        <ServicesSection />
      </main>




      {/* Additional sections can be added here */}
      <footer className="py-20 bg-white border-t border-gray-100">
        <div className="container text-center text-text-muted">
          <p>&copy; 2026 . All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
