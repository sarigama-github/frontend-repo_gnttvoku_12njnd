import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

function Hero({ onOpenAuth }) {
  return (
    <section id="home" className="relative h-[92vh] w-full bg-gradient-to-b from-emerald-50 to-sky-50 overflow-hidden">
      {/* Spline background */}
      <div className="absolute inset-0 opacity-80">
        <Spline scene="https://prod.spline.design/2fSS9b44gtYBt4RI/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Cream overlay + noise */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.8),_rgba(236,253,245,0.6)_60%,_rgba(224,242,254,0.6)_100%)] mix-blend-lighten" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-2xl text-emerald-950">
          <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.2, duration: 0.6 }} className="inline-flex items-center rounded-full border border-emerald-200 bg-white/70 px-3 py-1 text-xs tracking-wide mb-4 shadow-sm">
            Trusted healthcare platform for modern clinics
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.7 }} className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-emerald-900">
            Elevate Patient Care with Intelligent Health Tech
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.7 }} className="mt-4 text-emerald-800 text-base sm:text-lg">
            Streamline your operations, secure patient data, and deliver personalized care with our AI-powered medical SaaS.
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35, duration: 0.6 }} className="mt-8 flex flex-col sm:flex-row gap-3">
            <button onClick={onOpenAuth} className="inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-medium text-white bg-gradient-to-r from-emerald-500 to-sky-500 hover:from-emerald-400 hover:to-sky-400 focus:outline-none focus:ring-2 focus:ring-emerald-300/50 transition-all duration-300">
              Get Started
            </button>
            <a href="#services" className="inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-medium text-emerald-900 bg-white/80 hover:bg-white shadow-sm border border-emerald-100 transition-colors">
              Explore Services
            </a>
          </motion.div>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-left">
            {[
              ['HIPAA', 'Compliant'],
              ['99.99%', 'Uptime'],
              ['SOC 2', 'Audited'],
              ['24/7', 'Support']
            ].map(([t, s], i) => (
              <motion.div key={t} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 + 0.2, duration: 0.5 }}>
                <p className="text-2xl font-semibold text-emerald-900">{t}</p>
                <p className="text-emerald-700 text-sm">{s}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Floating orbs */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="pointer-events-none">
        <div className="absolute -top-10 right-20 h-40 w-40 rounded-full bg-emerald-200/60 blur-3xl" />
        <div className="absolute bottom-10 left-20 h-56 w-56 rounded-full bg-sky-200/60 blur-3xl" />
      </motion.div>
    </section>
  )
}

export default Hero
