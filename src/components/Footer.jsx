import React from 'react'
import { motion } from 'framer-motion'

function Footer() {
  return (
    <footer id="contact" className="relative bg-white/80 border-t border-emerald-200/60 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-emerald-800/80 text-sm">© {new Date().getFullYear()} PulseCare. All rights reserved.</motion.p>
          <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex items-center gap-6 text-sm text-emerald-900/80">
            <a href="#pricing" className="hover:text-emerald-900 transition-colors">Pricing</a>
            <a href="#about" className="hover:text-emerald-900 transition-colors">About</a>
            <a href="#services" className="hover:text-emerald-900 transition-colors">Services</a>
            <a href="#home" className="hover:text-emerald-900 transition-colors">Back to top</a>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
