import { features } from '../data'
import { Reveal } from './Reveal'

export function Features() {
  return (
    <section id="features" className="relative mx-auto max-w-6xl px-6 py-28">
      <Reveal>
        <p className="eyebrow">Capabilities</p>
        <h2 className="mt-4 max-w-2xl text-4xl font-semibold text-white sm:text-5xl">
          One platform. Everything an agent needs to do real work.
        </h2>
      </Reveal>

      <div className="mt-14 grid auto-rows-[minmax(220px,auto)] grid-cols-1 gap-4 md:grid-cols-3">
        {features.map((f, i) => (
          <Reveal
            key={f.tag}
            delay={(i % 3) * 0.08}
            className={f.span === 'lg' ? 'md:col-span-2' : 'md:col-span-1'}
          >
            <article className="group relative h-full overflow-hidden rounded-2xl glass p-7 transition-colors hover:border-ice/40">
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-ice/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <span className="eyebrow">{f.tag}</span>
              <h3 className="mt-4 text-xl font-semibold text-white">{f.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-white/55">{f.body}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
