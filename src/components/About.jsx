import React from 'react'
import { motion } from 'framer-motion'

function About() {
  return (
    <section id="about" className="relative py-24 bg-gradient-to-b from-sky-50/60 to-[#FBFBF5]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(16,185,129,0.06),transparent_50%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h2 className="text-3xl sm:text-4xl font-bold text-emerald-900">About Us</h2>
          <p className="mt-4 text-emerald-800/80 leading-relaxed">
            We are a team of clinicians, engineers, and designers building the next generation of healthcare software. Our mission is to make great care effortless by blending human empathy with intelligent technology.
          </p>
          <div className="mt-8 grid sm:grid-cols-2 gap-6">
            <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-xl border border-emerald-200/60 bg-white/70 p-6 shadow-sm">
              <p className="text-4xl font-bold text-emerald-900">7+ yrs</p>
              <p className="text-emerald-800/80 text-sm">Healthcare innovation</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 }} className="rounded-xl border border-emerald-200/60 bg-white/70 p-6 shadow-sm">
              <p className="text-4xl font-bold text-emerald-900">30%</p>
              <p className="text-emerald-800/80 text-sm">Avg. admin time saved</p>
            </motion.div>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="rounded-2xl border border-emerald-200/60 bg-gradient-to-br from-white to-emerald-50 p-6 shadow">
          <div className="aspect-video w-full rounded-xl bg-[url('https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center" />
          <p className="mt-4 text-emerald-800/80 text-sm">
            Built with a security-first architecture, audited regularly, and trusted by providers across the globe.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default About
