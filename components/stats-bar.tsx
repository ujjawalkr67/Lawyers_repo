"use client"

import { useEffect, useRef, useState } from "react"
import { useInView } from "framer-motion"
import { Reveal } from "@/components/reveal"

const stats = [
  { value: 95, suffix: "%", label: "Research Time Saved" },
  { value: 10, suffix: "x", label: "Faster Drafting" },
  { value: 500, suffix: "+", label: "Legal Teams" },
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
    <span ref={ref} className="font-serif text-5xl font-semibold md:text-6xl lg:text-7xl" style={{ color: "#F5F1EB" }}>
      {count}
      <span style={{ color: "#A8A29E" }}>{suffix}</span>
    </span>
  )
}

export function StatsBar() {
  return (
    <section
      id="stats"
      className="scroll-mt-20 py-20 md:py-28"
      style={{ backgroundColor: "#1F1D1A" }}
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="mb-16 text-center">
          <p
            className="text-sm font-medium uppercase"
            style={{ letterSpacing: "0.2em", color: "#78756F" }}
          >
            Impact
          </p>
          <h2
            className="mx-auto mt-4 max-w-3xl text-balance font-serif text-3xl font-semibold leading-tight md:text-5xl"
            style={{ color: "#F5F1EB" }}
          >
            Helping teams stay focused and see measurable results
          </h2>
        </Reveal>

        <div
          className="grid gap-px overflow-hidden rounded-2xl sm:grid-cols-2 lg:grid-cols-4"
          style={{ border: "1px solid rgba(255,255,255,0.06)", backgroundColor: "rgba(255,255,255,0.04)" }}
        >
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="px-6 py-12 text-center" style={{ backgroundColor: "#1F1D1A" }}>
                <Counter value={s.value} suffix={s.suffix} />
                <p className="mt-3 text-sm" style={{ color: "#78756F" }}>{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
