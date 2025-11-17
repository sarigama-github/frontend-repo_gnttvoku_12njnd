import React from 'react'
import { motion } from 'framer-motion'

const tiers = [
  { name: 'Starter', price: '$29', subtitle: 'For solo practitioners', features: ['Up to 200 patients', 'Basic telehealth', 'HIPAA-ready templates', 'Email support'] },
  { name: 'Clinic', price: '$99', subtitle: 'For small teams', popular: true, features: ['Up to 2,000 patients', 'Full telehealth suite', 'EHR integrations', 'Priority support'] },
  { name: 'Enterprise', price: 'Custom', subtitle: 'For hospitals & networks', features: ['Unlimited patients', 'Custom workflows', 'On-prem or cloud', 'Dedicated CSM'] }
]

function Pricing() {
  return (
    <section id="pricing" className="relative py-24 bg-gradient-to-b from-white to-sky-50/60">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(2,132,199,0.06),transparent_50%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2 initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl sm:text-4xl font-bold text-emerald-900">Transparent Pricing</motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="mt-3 text-emerald-800/80 max-w-2xl mx-auto">Simple plans that scale with your practice.</motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier, i) => (
            <motion.div key={tier.name} initial={{ opacity: 0, y: 12, scale: 0.98 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }} className={`relative rounded-2xl border ${tier.popular ? 'border-emerald-400/50 bg-white' : 'border-emerald-200/60 bg-white/70'} p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}>
              {tier.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-emerald-500 to-sky-500 text-white text-xs px-3 py-1 shadow">Most Popular</span>
              )}
              <div className="text-emerald-900">
                <h3 className="text-xl font-semibold">{tier.name}</h3>
                <p className="text-4xl font-bold mt-2">{tier.price}</p>
                <p className="text-emerald-800/80 text-sm">{tier.subtitle}</p>
              </div>
              <ul className="mt-6 space-y-2 text-emerald-900 text-sm">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <button className={`mt-6 w-full rounded-md px-4 py-2 text-sm font-medium ${tier.popular ? 'bg-gradient-to-r from-emerald-500 to-sky-500 text-white' : 'bg-emerald-50 text-emerald-900 hover:bg-emerald-100'} transition-colors`}>
                Choose {tier.name}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
