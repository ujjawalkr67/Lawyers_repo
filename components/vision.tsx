"use client"

import Image from "next/image"
import { Reveal } from "@/components/reveal"

const phases = [
  { phase: "Phase 1", title: "AI Drafting Suite", desc: "Instant generation of contracts, notices, and petitions." },
  { phase: "Phase 2", title: "Compliance Intelligence", desc: "Automated regulatory workflows and monitoring." },
  { phase: "Phase 3", title: "Court & Judge Analytics", desc: "Predictive insight into rulings and litigation trends." },
  { phase: "Phase 4", title: "Enterprise Legal OS", desc: "A unified operating system for legal operations." },
]

export function Vision() {
  return (
    <section
      id="vision"
      className="scroll-mt-20 py-24 md:py-36"
      style={{ backgroundColor: "#1F1D1A" }}
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div
              className="relative overflow-hidden rounded-2xl"
              style={{ border: "1px solid rgba(255,255,255,0.06)" }}
            >
              <Image
                src="/images/vision-detail.png"
                alt="Law book and scale of justice"
                width={700}
                height={780}
                className="h-full w-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to top, rgba(31,29,26,0.3), transparent)",
                }}
              />
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p
                className="text-sm font-medium uppercase"
                style={{ letterSpacing: "0.2em", color: "#78756F" }}
              >
                Product Vision
              </p>
              <h2
                className="mt-4 text-balance font-serif text-3xl font-semibold leading-tight md:text-5xl"
                style={{ color: "#F5F1EB" }}
              >
                Built for the future of legal work
              </h2>
              <p
                className="mt-5 text-pretty text-base leading-relaxed"
                style={{ color: "#A8A29E" }}
              >
                LawyersRepo combines legal expertise with advanced artificial
                intelligence to create a unified platform for legal operations,
                compliance, research, and litigation intelligence.
              </p>
            </Reveal>

            <div className="mt-10 space-y-0">
              {phases.map((p, i) => (
                <Reveal key={p.phase} delay={i * 0.08}>
                  <div className="relative flex gap-5 pb-8 last:pb-0">
                    <div className="flex flex-col items-center">
                      <span
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-semibold"
                        style={{
                          border: "1px solid rgba(168,162,158,0.3)",
                          backgroundColor: "rgba(168,162,158,0.1)",
                          color: "#D4CFC7",
                        }}
                      >
                        {i + 1}
                      </span>
                      {i < phases.length - 1 && (
                        <span
                          className="mt-1 w-px flex-1"
                          style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
                        />
                      )}
                    </div>
                    <div className="pb-1">
                      <p
                        className="text-xs font-medium uppercase"
                        style={{ letterSpacing: "0.15em", color: "#78756F" }}
                      >
                        {p.phase}
                      </p>
                      <h3
                        className="mt-1 font-serif text-lg font-semibold"
                        style={{ color: "#F5F1EB" }}
                      >
                        {p.title}
                      </h3>
                      <p
                        className="mt-1 text-sm leading-relaxed"
                        style={{ color: "#A8A29E" }}
                      >
                        {p.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
