import React from 'react'
import Spline from '@splinetool/react-spline'

function Hero({ onOpenAuth }) {
  return (
    <section id="home" className="relative h-[90vh] w-full bg-slate-950 overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/2fSS9b44gtYBt4RI/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/60 to-slate-950 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-2xl text-white">
          <div className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs tracking-wide mb-4">
            Trusted healthcare platform for modern clinics
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Elevate Patient Care with Intelligent Health Tech
          </h1>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Streamline your operations, secure patient data, and deliver personalized care with our AI-powered medical SaaS. Built for privacy, performance, and clinical excellence.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <button onClick={onOpenAuth} className="inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50">
              Get Started
            </button>
            <a href="#services" className="inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-medium text-slate-100 bg-white/10 hover:bg-white/20 backdrop-blur border border-white/10">
              Explore Services
            </a>
          </div>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-6 text-left">
            <div>
              <p className="text-2xl font-semibold">HIPAA</p>
              <p className="text-slate-400 text-sm">Compliant</p>
            </div>
            <div>
              <p className="text-2xl font-semibold">99.99%</p>
              <p className="text-slate-400 text-sm">Uptime</p>
            </div>
            <div>
              <p className="text-2xl font-semibold">SOC 2</p>
              <p className="text-slate-400 text-sm">Audited</p>
            </div>
            <div>
              <p className="text-2xl font-semibold">24/7</p>
              <p className="text-slate-400 text-sm">Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
