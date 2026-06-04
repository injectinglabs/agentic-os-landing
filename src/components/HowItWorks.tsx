import { steps } from '../data'
import { Reveal } from './Reveal'

export function HowItWorks() {
  return (
    <section id="how" className="relative overflow-hidden py-28">
      <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <Reveal className="text-center">
          <p className="eyebrow">From zero to autonomous</p>
          <h2 className="mx-auto mt-4 max-w-2xl text-4xl font-semibold text-white sm:text-5xl">
            Three steps. No glue code.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.12}>
              <div className="relative h-full rounded-2xl glass p-8">
                <div className="font-mono text-5xl font-medium text-ice/30">{s.n}</div>
                <h3 className="mt-5 text-xl font-semibold text-white">{s.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-white/55">{s.body}</p>
                {i < steps.length - 1 && (
                  <div className="absolute -right-3 top-1/2 hidden h-px w-6 bg-gradient-to-r from-ice/50 to-transparent md:block" />
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
