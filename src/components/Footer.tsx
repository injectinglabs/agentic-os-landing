import { APP_URL } from '../data'

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06]">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2.5">
          <img src="/logo.png" alt="" className="h-7 w-7" />
          <span className="font-display font-semibold text-white">
            Agentic<span className="text-ice"> OS</span>
          </span>
        </div>

        <nav className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/55">
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#how" className="hover:text-white">How it works</a>
          <a href="#integrations" className="hover:text-white">Integrations</a>
          <a href="#pricing" className="hover:text-white">Pricing</a>
          <a href="/privacy.html" className="hover:text-white">Privacy</a>
          <a href={APP_URL} className="hover:text-white">Open app</a>
        </nav>

        <p className="text-sm text-white/40">
          © {new Date().getFullYear()} Injecting.ai
        </p>
      </div>
    </footer>
  )
}
