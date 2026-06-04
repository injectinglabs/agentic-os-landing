import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { Marquee } from './components/Marquee'
import { Features } from './components/Features'
import { HowItWorks } from './components/HowItWorks'
import { Integrations } from './components/Integrations'
import { Pricing } from './components/Pricing'
import { CTA } from './components/CTA'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <div className="relative min-h-dvh bg-ink-950">
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Features />
        <HowItWorks />
        <Integrations />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
