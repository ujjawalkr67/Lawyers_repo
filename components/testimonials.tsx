"use client"

import { Quote } from "lucide-react"
import { Reveal } from "@/components/reveal"

const cards = [
  "Early Access Feedback Coming Soon",
  "Early Access Feedback Coming Soon",
  "Early Access Feedback Coming Soon",
]

export function Testimonials() {
  return (
    <section className="mt-28 px-5 md:mt-36 md:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-gold">
            Testimonials
          </p>
          <h2 className="mt-4 text-balance font-serif text-3xl font-semibold leading-tight text-foreground md:text-5xl">
            Trusted by the next generation of legal professionals
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {cards.map((c, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="flex h-full flex-col rounded-2xl border border-dashed border-border bg-card/60 p-7">
                <Quote className="h-7 w-7 text-gold/50" />
                <p className="mt-5 flex-1 font-serif text-lg leading-relaxed text-muted-foreground">
                  {c}
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <span className="h-9 w-9 rounded-full bg-secondary" />
                  <div className="space-y-1.5">
                    <span className="block h-2 w-20 rounded bg-secondary" />
                    <span className="block h-2 w-14 rounded bg-secondary" />
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
