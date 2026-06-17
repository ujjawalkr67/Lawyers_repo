"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Zap, Clock, Lock } from "lucide-react"
import { Reveal } from "@/components/reveal"

const reasons = [
  { icon: Zap, title: "10x Faster Research", desc: "Surface precedents and judgments in seconds, not hours." },
  { icon: Clock, title: "Reduce Manual Work", desc: "Automate drafting and compliance to reclaim billable time." },
  { icon: Lock, title: "Enterprise-Grade Security", desc: "Bank-level encryption and confidentiality by design." },
]

const stats = [
  { value: 95, suffix: "%", label: "Research Time Saved" },
  { value: 80, suffix: "%", label: "Document Automation" },
  { value: 24, suffix: "/7", label: "AI Legal Assistant" },
]

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    const duration = 1400
    const start = performance.now()
    let raf = 0
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setCount(Math.round(eased * value))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, value])

  return (
    <span ref={ref} className="font-serif text-5xl font-semibold text-foreground md:text-6xl">
      {count}
      <span className="text-gold">{suffix}</span>
    </span>
  )
}

export function WhyUs() {
  return (
    <section className="mt-28 px-5 md:mt-36 md:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-gold">
            Why LawyersRepo
          </p>
          <h2 className="mt-4 text-balance font-serif text-3xl font-semibold leading-tight text-foreground md:text-5xl">
            Work faster, smarter, and more confidently
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="h-full rounded-2xl border border-border bg-card p-7"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/15 text-gold">
                  <r.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-serif text-xl font-semibold text-foreground">
                  {r.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                  {r.desc}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-6">
          <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
            {stats.map((s) => (
              <div key={s.label} className="bg-card px-6 py-10 text-center">
                <Counter value={s.value} suffix={s.suffix} />
                <p className="mt-3 text-sm text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
