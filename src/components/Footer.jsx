import React from 'react'

function Footer() {
  return (
    <footer id="contact" className="relative bg-slate-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">© {new Date().getFullYear()} PulseCare. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm text-slate-300">
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#about" className="hover:text-white">About</a>
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#home" className="hover:text-white">Back to top</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
