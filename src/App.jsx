import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Work from './components/Work'
import Services from './components/Services'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BlackHole from './components/BlackHole'

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 639px)')
    setIsMobile(mq.matches)
    const onChange = (e) => setIsMobile(e.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  return isMobile
}

function App() {
  const isMobile = useIsMobile()

  return (
    <div className="relative min-h-svh bg-ink">
      <div className="pointer-events-none fixed inset-0 z-0">
        <BlackHole
          outerRadius={isMobile ? 60 : 97}
          centre={{ voidRadius: isMobile ? 22 : 40 }}
        />
      </div>
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Work />
        <Services />
        <About />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App
