import React, { useState } from 'react'
import { Menu, Stethoscope, LogIn, X } from 'lucide-react'

function Navbar({ onOpenAuth }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-emerald-200/50 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/70">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 font-semibold text-emerald-900">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-400 to-sky-400 shadow-sm">
            <Stethoscope className="h-5 w-5 text-white" />
          </span>
          <span>PulseCare</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm text-emerald-900/80">
          <a href="#services" className="hover:text-emerald-900 transition-colors">Services</a>
          <a href="#pricing" className="hover:text-emerald-900 transition-colors">Pricing</a>
          <a href="#about" className="hover:text-emerald-900 transition-colors">About Us</a>
          <a href="#contact" className="hover:text-emerald-900 transition-colors">Contact</a>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={onOpenAuth} className="hidden sm:inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-emerald-500 to-sky-500 hover:from-emerald-400 hover:to-sky-400 focus:outline-none focus:ring-2 focus:ring-emerald-300/60 transition-all duration-300">
            <LogIn className="h-4 w-4" />
            Sign In
          </button>
          <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-emerald-900 hover:bg-emerald-50">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>
      {/* Mobile menu */}
      <div className={`md:hidden origin-top ${open ? 'grid animate-[scaleY_200ms_ease-out] grid-rows-[1fr]' : 'grid-rows-[0fr]'} transition-[grid-template-rows] duration-200`}> 
        <div className="overflow-hidden">
          <div className="px-4 pb-4 space-y-2 bg-white/90 backdrop-blur border-b border-emerald-200/50">
            <a onClick={() => setOpen(false)} href="#services" className="block px-3 py-2 rounded-md text-emerald-900 hover:bg-emerald-50">Services</a>
            <a onClick={() => setOpen(false)} href="#pricing" className="block px-3 py-2 rounded-md text-emerald-900 hover:bg-emerald-50">Pricing</a>
            <a onClick={() => setOpen(false)} href="#about" className="block px-3 py-2 rounded-md text-emerald-900 hover:bg-emerald-50">About</a>
            <button onClick={() => { setOpen(false); onOpenAuth(); }} className="w-full text-left px-3 py-2 rounded-md text-white bg-gradient-to-r from-emerald-500 to-sky-500">Sign In</button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
