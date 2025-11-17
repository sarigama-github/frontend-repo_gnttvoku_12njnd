import React from 'react'

const tiers = [
  {
    name: 'Starter',
    price: '$29',
    subtitle: 'For solo practitioners',
    features: [
      'Up to 200 patients',
      'Basic telehealth',
      'HIPAA-ready templates',
      'Email support'
    ]
  },
  {
    name: 'Clinic',
    price: '$99',
    subtitle: 'For small teams',
    popular: true,
    features: [
      'Up to 2,000 patients',
      'Full telehealth suite',
      'EHR integrations',
      'Priority support'
    ]
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    subtitle: 'For hospitals & networks',
    features: [
      'Unlimited patients',
      'Custom workflows',
      'On-prem or cloud',
      'Dedicated CSM'
    ]
  }
]

function Pricing() {
  return (
    <section id="pricing" className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 to-slate-950" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Transparent Pricing</h2>
          <p className="mt-3 text-slate-300 max-w-2xl mx-auto">Simple plans that scale with your practice.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <div key={tier.name} className={`relative rounded-2xl border ${tier.popular ? 'border-cyan-400/40 bg-slate-900/60' : 'border-white/10 bg-white/5'} p-6` }>
              {tier.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-cyan-500 text-white text-xs px-3 py-1">Most Popular</span>
              )}
              <div className="text-white">
                <h3 className="text-xl font-semibold">{tier.name}</h3>
                <p className="text-4xl font-bold mt-2">{tier.price}</p>
                <p className="text-slate-300 text-sm">{tier.subtitle}</p>
              </div>
              <ul className="mt-6 space-y-2 text-slate-200 text-sm">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <button className={`mt-6 w-full rounded-md px-4 py-2 text-sm font-medium ${tier.popular ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white' : 'bg-white/10 text-white hover:bg-white/20'} `}>
                Choose {tier.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
