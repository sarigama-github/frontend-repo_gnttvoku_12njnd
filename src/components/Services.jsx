import React from 'react'
import { Stethoscope, ShieldCheck, Brain, Activity, HeartPulse, Syringe } from 'lucide-react'
import { motion } from 'framer-motion'

const services = [
  { icon: Stethoscope, title: 'EHR Integration', desc: 'Seamless integration with your existing Electronic Health Records for a unified clinical workflow.' },
  { icon: Brain, title: 'AI Diagnostics', desc: 'Decision support tools leveraging machine learning for faster, more accurate diagnoses.' },
  { icon: ShieldCheck, title: 'Security & Compliance', desc: 'End-to-end encryption with HIPAA and SOC 2 compliance baked in at every layer.' },
  { icon: Activity, title: 'Telehealth Suite', desc: 'HD video, secure messaging, and remote monitoring for modern virtual care delivery.' },
  { icon: HeartPulse, title: 'Patient Engagement', desc: 'Portals, reminders, and care plans that keep patients informed and involved.' },
  { icon: Syringe, title: 'e-Prescriptions', desc: 'Connected pharmacy network with automated checks for interactions and adherence.' }
]

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } }
}

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } }
}

function Services() {
  return (
    <section id="services" className="relative py-24 bg-gradient-to-b from-emerald-50 to-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(16,185,129,0.06),transparent_50%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2 initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl sm:text-4xl font-bold text-emerald-900">Services</motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="mt-3 text-emerald-800/80 max-w-2xl mx-auto">Everything you need to deliver secure, scalable, and compassionate digital healthcare.</motion.p>
        </div>
        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-50px' }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }, i) => (
            <motion.div variants={item} key={title} className="group rounded-xl border border-emerald-200/60 bg-white/70 p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-400 to-sky-400 shadow text-white">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="text-emerald-900 font-semibold">{title}</h3>
              </div>
              <p className="mt-3 text-emerald-800/80 text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Services
