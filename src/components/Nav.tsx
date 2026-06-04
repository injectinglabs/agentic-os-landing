import { motion } from 'motion/react'
import { APP_URL } from '../data'

const links = [
  { label: 'Features', href: '#features' },
  { label: 'How it works', href: '#how' },
  { label: 'Integrations', href: '#integrations' },
  { label: 'Pricing', href: '#pricing' },
]

export function Nav() {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
    >
      <nav className="glass flex w-full max-w-6xl items-center justify-between rounded-2xl px-4 py-3 sm:px-6">
        <a href="#top" className="flex items-center gap-2.5">
          <img src="/logo.png" alt="" className="h-8 w-8" />
          <span className="font-display text-lg font-semibold tracking-tight text-white">
            Agentic<span className="text-ice"> OS</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-white/60 transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href={APP_URL}
            className="hidden text-sm text-white/70 transition-colors hover:text-white sm:block"
          >
            Sign in
          </a>
          <a
            href={APP_URL}
            className="ice-ring group relative rounded-xl bg-ice px-4 py-2 text-sm font-medium text-ink-950 transition-transform hover:scale-[1.03]"
          >
            Open app
          </a>
        </div>
      </nav>
    </motion.header>
  )
}
