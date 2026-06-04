import { APP_URL } from '../data'
import { Reveal } from './Reveal'

export function CTA() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <Reveal>
        <div className="noise relative overflow-hidden rounded-3xl glass-strong px-8 py-16 text-center sm:px-16 sm:py-20">
          <div className="absolute left-1/2 top-0 h-64 w-[700px] -translate-x-1/2 rounded-full bg-ice/25 blur-[120px]" />
          <div className="relative">
            <img src="/logo.png" alt="" className="mx-auto h-14 w-14 animate-float" />
            <h2 className="mx-auto mt-7 max-w-2xl text-4xl font-semibold text-white sm:text-5xl">
              Give your work an agent that actually does it.
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-lg text-white/60">
              Free to start. No credit card. Live in your favorite channel in minutes.
            </p>
            <a
              href={APP_URL}
              className="ice-ring mt-9 inline-block rounded-xl bg-ice px-8 py-4 font-medium text-ink-950 transition-transform hover:scale-[1.03]"
            >
              Open Agentic OS
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
