import { useState } from 'react'
import { motion } from 'motion/react'
import { plans, APP_URL } from '../data'
import { Reveal } from './Reveal'

export function Pricing() {
  const [yearly, setYearly] = useState(false)

  return (
    <section id="pricing" className="relative mx-auto max-w-6xl px-6 py-28">
      <Reveal className="text-center">
        <p className="eyebrow">Pricing</p>
        <h2 className="mx-auto mt-4 max-w-2xl text-4xl font-semibold text-white sm:text-5xl">
          Start solo. Scale to a team.
        </h2>

        <div className="mt-8 inline-flex items-center gap-1 rounded-full glass p-1 text-sm">
          <button
            onClick={() => setYearly(false)}
            className={`relative rounded-full px-5 py-2 transition-colors ${!yearly ? 'text-ink-950' : 'text-white/60'}`}
          >
            {!yearly && (
              <motion.span layoutId="billing-pill" className="absolute inset-0 rounded-full bg-ice" />
            )}
            <span className="relative">Monthly</span>
          </button>
          <button
            onClick={() => setYearly(true)}
            className={`relative rounded-full px-5 py-2 transition-colors ${yearly ? 'text-ink-950' : 'text-white/60'}`}
          >
            {yearly && (
              <motion.span layoutId="billing-pill" className="absolute inset-0 rounded-full bg-ice" />
            )}
            <span className="relative">Yearly <span className="text-mint">−20%</span></span>
          </button>
        </div>
      </Reveal>

      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {plans.map((p, i) => (
          <Reveal key={p.tier} delay={i * 0.07}>
            <div
              className={`relative flex h-full flex-col rounded-2xl p-7 ${
                p.featured ? 'glass-strong ice-ring' : 'glass'
              }`}
            >
              {p.featured && (
                <span className="absolute -top-3 left-7 rounded-full bg-ice px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-ink-950">
                  Most popular
                </span>
              )}
              <h3 className="text-lg font-semibold text-white">{p.tier}</h3>
              <p className="mt-1 text-sm text-white/50">{p.blurb}</p>

              <div className="mt-6 flex items-end gap-1">
                <span className="font-display text-5xl font-semibold text-white">
                  ${yearly ? p.yearly : p.monthly}
                </span>
                <span className="mb-1.5 text-sm text-white/50">/mo</span>
              </div>
              {yearly && (
                <p className="mt-1 text-xs text-mint">billed annually</p>
              )}

              <a
                href={APP_URL}
                className={`mt-6 rounded-xl py-3 text-center text-sm font-medium transition-transform hover:scale-[1.02] ${
                  p.featured
                    ? 'bg-ice text-ink-950'
                    : 'border border-white/15 text-white/85 hover:border-ice/50'
                }`}
              >
                {p.cta}
              </a>

              <ul className="mt-7 space-y-3 text-sm text-white/65">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <span className="mt-0.5 text-ice">✦</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
