import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Showcase from './components/Showcase'
import Services from './components/Services'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <Showcase />
      <Services />
      <CTA />
      <footer id="about" className="py-12 border-t border-white/10 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 text-white/70 text-sm flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} BlueFiberglass — Custom Motorcycle Bodyworks</p>
          <div className="flex items-center gap-4">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#showcase" className="hover:text-white">Showcase</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
