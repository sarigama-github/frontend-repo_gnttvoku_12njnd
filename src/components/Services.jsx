import React from 'react'
import { Stethoscope, ShieldCheck, Brain, Activity, HeartPulse, Syringe } from 'lucide-react'

const services = [
  {
    icon: Stethoscope,
    title: 'EHR Integration',
    desc: 'Seamless integration with your existing Electronic Health Records for a unified clinical workflow.'
  },
  {
    icon: Brain,
    title: 'AI Diagnostics',
    desc: 'Decision support tools leveraging machine learning for faster, more accurate diagnoses.'
  },
  {
    icon: ShieldCheck,
    title: 'Security & Compliance',
    desc: 'End-to-end encryption with HIPAA and SOC 2 compliance baked in at every layer.'
  },
  {
    icon: Activity,
    title: 'Telehealth Suite',
    desc: 'HD video, secure messaging, and remote monitoring for modern virtual care delivery.'
  },
  {
    icon: HeartPulse,
    title: 'Patient Engagement',
    desc: 'Portals, reminders, and care plans that keep patients informed and involved.'
  },
  {
    icon: Syringe,
    title: 'e-Prescriptions',
    desc: 'Connected pharmacy network with automated checks for interactions and adherence.'
  }
]

function Services() {
  return (
    <section id="services" className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-500/10 via-slate-950 to-slate-950" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Services</h2>
          <p className="mt-3 text-slate-300 max-w-2xl mx-auto">Everything you need to deliver secure, scalable, and compassionate digital healthcare.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400/80 to-blue-600/80">
                  <Icon className="h-5 w-5 text-white" />
                </span>
                <h3 className="text-white font-semibold">{title}</h3>
              </div>
              <p className="mt-3 text-slate-300 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
