import { motion } from 'motion/react'
import { APP_URL } from '../data'

const ease = [0.22, 1, 0.36, 1] as const

// Orbiting tool-nodes around the central agent — the "blueprint" coming alive.
const nodes = [
  { label: 'Telegram', angle: -90, r: 132 },
  { label: 'Notion', angle: -30, r: 150 },
  { label: 'Gmail', angle: 30, r: 132 },
  { label: 'GitHub', angle: 90, r: 150 },
  { label: 'Slack', angle: 150, r: 132 },
  { label: 'Sheets', angle: 210, r: 150 },
]

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-24 sm:pt-44 sm:pb-32">
      {/* Atmosphere */}
      <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_30%,black,transparent)]" />
      <div className="absolute left-1/2 top-0 h-[620px] w-[920px] -translate-x-1/2 rounded-full bg-ice/20 blur-[140px]" />
      <div className="absolute left-1/2 top-40 h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-mint/10 blur-[120px]" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 text-center">
        <motion.a
          href={APP_URL}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="glass mb-8 flex items-center gap-2 rounded-full px-4 py-1.5 text-xs text-white/70"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-mint shadow-[0_0_10px] shadow-mint" />
          Now running on Gemini by default — no setup
        </motion.a>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.05, ease }}
          className="max-w-4xl text-balance text-5xl font-semibold leading-[1.03] text-white sm:text-7xl"
        >
          The operating system for{' '}
          <span className="text-gradient">AI agents</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.18, ease }}
          className="mt-7 max-w-2xl text-lg leading-relaxed text-white/60 sm:text-xl"
        >
          Deploy agents that act — across the channels your team already uses.
          Real tools, your knowledge, live code execution. One platform, by Injecting.ai.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.3, ease }}
          className="mt-10 flex flex-col items-center gap-3 sm:flex-row"
        >
          <a
            href={APP_URL}
            className="ice-ring rounded-xl bg-ice px-7 py-3.5 font-medium text-ink-950 transition-transform hover:scale-[1.03]"
          >
            Start free
          </a>
          <a
            href="#how"
            className="glass rounded-xl px-7 py-3.5 font-medium text-white/85 transition-colors hover:text-white"
          >
            See how it works
          </a>
        </motion.div>

        {/* Orbit visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease }}
          className="relative mt-20 h-[340px] w-full max-w-[420px]"
        >
          {/* orbit rings */}
          <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
          <div className="absolute left-1/2 top-1/2 h-[230px] w-[230px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.07]" />

          {/* rotating node carrier */}
          <motion.div
            className="absolute left-1/2 top-1/2 h-0 w-0"
            animate={{ rotate: 360 }}
            transition={{ duration: 48, repeat: Infinity, ease: 'linear' }}
          >
            {nodes.map((node) => {
              const rad = (node.angle * Math.PI) / 180
              const x = Math.cos(rad) * node.r
              const y = Math.sin(rad) * node.r
              return (
                <motion.div
                  key={node.label}
                  className="absolute"
                  style={{ left: x, top: y, translate: '-50% -50%' }}
                  animate={{ rotate: -360 }}
                  transition={{ duration: 48, repeat: Infinity, ease: 'linear' }}
                >
                  <div className="glass-strong flex items-center whitespace-nowrap rounded-lg px-3 py-1.5 text-xs font-medium text-white/80 shadow-card">
                    {node.label}
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          {/* central agent core */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="ice-ring grid h-28 w-28 place-items-center rounded-3xl glass-strong">
              <img src="/logo.png" alt="Agentic OS" className="h-14 w-14 animate-float" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
