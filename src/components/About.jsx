import React from 'react'

function About() {
  return (
    <section id="about" className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-600/10 via-slate-950 to-slate-950" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">About Us</h2>
          <p className="mt-4 text-slate-300 leading-relaxed">
            We are a team of clinicians, engineers, and designers building the next generation of healthcare software. Our mission is to make great care effortless by blending human empathy with intelligent technology.
          </p>
          <div className="mt-8 grid sm:grid-cols-2 gap-6">
            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <p className="text-4xl font-bold text-white">7+ yrs</p>
              <p className="text-slate-300 text-sm">Healthcare innovation</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <p className="text-4xl font-bold text-white">30%</p>
              <p className="text-slate-300 text-sm">Avg. admin time saved</p>
            </div>
          </div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-6">
          <div className="aspect-video w-full rounded-xl bg-[url('https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjMzMDU0MTN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center" />
          <p className="mt-4 text-slate-300 text-sm">
            Built with a security-first architecture, audited regularly, and trusted by providers across the globe.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
