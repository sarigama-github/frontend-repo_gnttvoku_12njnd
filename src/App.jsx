import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Pricing from './components/Pricing'
import About from './components/About'
import AuthModal from './components/AuthModal'
import Footer from './components/Footer'

function App() {
  const [authOpen, setAuthOpen] = useState(false)

  return (
    <div className="bg-slate-950 min-h-screen">
      <Navbar onOpenAuth={() => setAuthOpen(true)} />
      <main className="pt-16">
        <Hero onOpenAuth={() => setAuthOpen(true)} />
        <Services />
        <Pricing />
        <About />
      </main>
      <Footer />
      <AuthModal open={authOpen} onClose={() => setAuthOpen(false)} />
    </div>
  )
}

export default App
