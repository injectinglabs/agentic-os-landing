import { channels } from '../data'

export function Marquee() {
  const row = [...channels, ...channels]
  return (
    <section className="relative border-y border-white/[0.06] py-10">
      <div className="mx-auto mb-6 max-w-6xl px-6">
        <p className="eyebrow text-center">Reachable everywhere your team talks</p>
      </div>
      <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
        <div className="flex w-max animate-[scroll_32s_linear_infinite] gap-4">
          {row.map((c, i) => (
            <div
              key={i}
              className="glass whitespace-nowrap rounded-xl px-6 py-3 text-sm font-medium text-white/70"
            >
              {c}
            </div>
          ))}
        </div>
      </div>
      <style>{`@keyframes scroll { to { transform: translateX(-50%); } }`}</style>
    </section>
  )
}
