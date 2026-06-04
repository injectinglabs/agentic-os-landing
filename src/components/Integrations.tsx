import { integrations } from '../data'
import { Reveal } from './Reveal'

export function Integrations() {
  return (
    <section id="integrations" className="mx-auto max-w-6xl px-6 py-28">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <p className="eyebrow">Integrations</p>
          <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">
            Plugs into the tools you already pay for.
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-white/55">
            Authorize once and your agents can read, search and write across your
            stack — no API keys to juggle, no integration code to maintain.
          </p>
          <a
            href="#pricing"
            className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-ice transition-colors hover:text-ice-bright"
          >
            See what's included
            <span aria-hidden>→</span>
          </a>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-2">
            {integrations.map((name, i) => (
              <div
                key={name}
                className="glass flex items-center gap-3 rounded-xl px-4 py-4 transition-colors hover:border-ice/40"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-ice/15 font-mono text-sm font-medium text-ice-soft">
                  {name.replace('Google ', '').slice(0, 2)}
                </span>
                <span className="text-sm font-medium text-white/80">{name}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
