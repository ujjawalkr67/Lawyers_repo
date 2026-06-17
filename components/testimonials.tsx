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
            Testimonials
          </p>
          <h2
            className="mt-4 text-balance font-serif text-3xl font-semibold leading-tight md:text-5xl"
            style={{ color: "#1F1D1A" }}
          >
            Trusted by the next generation of legal professionals
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {cards.map((c, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div
                className="flex h-full flex-col rounded-2xl border border-dashed p-8"
                style={{
                  borderColor: "#D4CFC7",
                  backgroundColor: "rgba(255,255,255,0.5)",
                }}
              >
                <Quote className="h-7 w-7" style={{ color: "rgba(212,207,199,0.6)" }} />
                <p
                  className="mt-5 flex-1 font-serif text-lg leading-relaxed"
                  style={{ color: "#78756F" }}
                >
                  {c}
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <span
                    className="h-9 w-9 rounded-full"
                    style={{ backgroundColor: "#EDEAE4" }}
                  />
                  <div className="space-y-1.5">
                    <span
                      className="block h-2 w-20 rounded"
                      style={{ backgroundColor: "#EDEAE4" }}
                    />
                    <span
                      className="block h-2 w-14 rounded"
                      style={{ backgroundColor: "#EDEAE4" }}
                    />
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
