import { motion } from 'motion/react'
import { useEffect, useState } from 'react'
import type { ReactNode } from 'react'

export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
}: {
  children: ReactNode
  delay?: number
  y?: number
  className?: string
}) {
  // Fallback: if the IntersectionObserver never fires (no-JS-scroll
  // environments, crawlers, prerender), force the content visible after
  // mount so it can never be stranded at opacity:0.
  const [forced, setForced] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setForced(true), 1200)
    return () => clearTimeout(t)
  }, [])

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      animate={forced ? { opacity: 1, y: 0 } : undefined}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
