import React from 'react'
import { Menu, Stethoscope, ShieldCheck, LogIn } from 'lucide-react'

function Navbar({ onOpenAuth }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/70 border-b border-white/10">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 text-white font-semibold">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600">
            <Stethoscope className="h-5 w-5 text-white" />
          </span>
          <span>PulseCare</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm text-slate-200">
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          <a href="#about" className="hover:text-white transition-colors">About Us</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={onOpenAuth} className="hidden sm:inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50">
            <LogIn className="h-4 w-4" />
            Sign In
          </button>
          <button className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-200 hover:text-white hover:bg-white/10">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
