import { useEffect, useState } from 'react'
import Lenis from 'lenis'
import { ThemeProvider, useTheme } from './context/ThemeContext'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import PrivacyPolicy from './components/pages/PrivacyPolicy'
import Hero from './components/sections/Hero'
import Catalog from './components/sections/Catalog'
import NasiyaBanner from './components/sections/NasiyaBanner'
import Delivery from './components/sections/Delivery'
import Locations from './components/sections/Locations'
import BrandStory from './components/sections/BrandStory'
import StatsCounter from './components/sections/StatsCounter'
import Testimonials from './components/sections/Testimonials'
import TrustBadges from './components/sections/TrustBadges'
import IntroScreen from './components/ui/IntroScreen'
import CustomCursor from './components/ui/CustomCursor'
import ScrollProgress from './components/ui/ScrollProgress'
import SectionDivider from './components/ui/SectionDivider'
import FloatingContact from './components/ui/FloatingContact'

function AppContent() {
  const { theme } = useTheme()
  const [path, setPath] = useState<string>(() =>
    typeof window !== 'undefined' ? window.location.pathname : '/'
  )

  // Listen for browser navigation (back/forward) so SPA routing keeps working
  useEffect(() => {
    const onPop = () => setPath(window.location.pathname)
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  const isPrivacy = (() => {
    const p = path.replace(/\/+$/, '').toLowerCase()
    return p === '/privacy' || p === '/privacy-policy'
  })()

  // Lenis smooth scroll (only on main landing page)
  useEffect(() => {
    if (isPrivacy) return
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    // Support anchor scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault()
        const target = document.querySelector((anchor as HTMLAnchorElement).getAttribute('href')!)
        if (target) lenis.scrollTo(target as HTMLElement)
      })
    })

    return () => lenis.destroy()
  }, [isPrivacy])

  if (isPrivacy) {
    return (
      <div className={`min-h-screen font-sans transition-colors duration-300 ${
        theme === 'dark'
          ? 'bg-dark-bg text-gray-200'
          : 'bg-light-bg text-gray-800'
      }`}>
        <PrivacyPolicy />
      </div>
    )
  }

  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 ${
      theme === 'dark'
        ? 'bg-dark-bg text-gray-200'
        : 'bg-light-bg text-gray-800'
    }`}>
      <IntroScreen />
      <CustomCursor />
      <ScrollProgress />
      <FloatingContact />
      <Header />
      <main>
        <Hero />
        <TrustBadges />
        <SectionDivider variant="diamond" />
        <Catalog />
        <StatsCounter />
        <SectionDivider variant="dots" />
        <BrandStory />
        <SectionDivider variant="line" />
        <Delivery />
        <SectionDivider variant="diamond" />
        <NasiyaBanner />
        <SectionDivider variant="dots" />
        <Testimonials />
        <SectionDivider variant="line" />
        <Locations />
      </main>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}

export default App
