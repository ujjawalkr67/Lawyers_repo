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
    <section id="vision" className="mt-28 scroll-mt-20 px-5 md:mt-36 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-border">
              <Image
                src="/images/vision-detail.png"
                alt="Law book and scale of justice"
                width={700}
                height={780}
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="text-sm font-medium uppercase tracking-widest text-gold">
                Product Vision
              </p>
              <h2 className="mt-4 text-balance font-serif text-3xl font-semibold leading-tight text-foreground md:text-5xl">
                Built for the future of legal work
              </h2>
              <p className="mt-5 text-pretty text-base leading-relaxed text-muted-foreground">
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
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-gold/10 text-xs font-semibold text-gold">
                        {i + 1}
                      </span>
                      {i < phases.length - 1 && (
                        <span className="mt-1 w-px flex-1 bg-border" />
                      )}
                    </div>
                    <div className="pb-1">
                      <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                        {p.phase}
                      </p>
                      <h3 className="mt-1 font-serif text-lg font-semibold text-foreground">
                        {p.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
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
