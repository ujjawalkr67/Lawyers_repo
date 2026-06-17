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
    <span ref={ref} className="font-serif text-5xl font-semibold md:text-6xl" style={{ color: "#1F1D1A" }}>
      {count}
      <span style={{ color: "#78756F" }}>{suffix}</span>
    </span>
  )
}

export function WhyUs() {
  return (
    <section
      className="py-24 md:py-36"
      style={{ backgroundColor: "#F5F1EB" }}
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p
            className="text-sm font-medium uppercase"
            style={{ letterSpacing: "0.2em", color: "#78756F" }}
          >
            Why LawyersRepo
          </p>
          <h2
            className="mt-4 text-balance font-serif text-3xl font-semibold leading-tight md:text-5xl"
            style={{ color: "#1F1D1A" }}
          >
            Work faster, smarter, and more confidently
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group h-full rounded-2xl border p-8 transition-all hover:shadow-lg"
                style={{
                  borderColor: "#D4CFC7",
                  backgroundColor: "white",
                }}
              >
                <span
                  className="flex h-12 w-12 items-center justify-center rounded-xl"
                  style={{ backgroundColor: "#1F1D1A", color: "#F5F1EB" }}
                >
                  <r.icon className="h-5 w-5" />
                </span>
                <h3
                  className="mt-6 font-serif text-xl font-semibold"
                  style={{ color: "#1F1D1A" }}
                >
                  {r.title}
                </h3>
                <p
                  className="mt-3 text-sm leading-relaxed"
                  style={{ color: "#78756F" }}
                >
                  {r.desc}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8">
          <div
            className="grid gap-px overflow-hidden rounded-2xl sm:grid-cols-3"
            style={{ border: "1px solid #D4CFC7", backgroundColor: "#D4CFC7" }}
          >
            {stats.map((s) => (
              <div key={s.label} className="px-6 py-12 text-center" style={{ backgroundColor: "white" }}>
                <Counter value={s.value} suffix={s.suffix} />
                <p className="mt-3 text-sm" style={{ color: "#78756F" }}>{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
