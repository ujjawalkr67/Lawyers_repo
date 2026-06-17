"use client"

import Image from "next/image"
import { Reveal } from "@/components/reveal"

const points = [
  "Solo practitioners",
  "Law firms",
  "In-house legal teams",
  "Compliance professionals",
]

export function About() {
  return (
    <section id="about" className="mt-28 scroll-mt-20 px-5 md:mt-36 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="overflow-hidden rounded-3xl border border-border bg-card">
          <div className="grid lg:grid-cols-2">
            <div className="flex flex-col justify-center p-8 md:p-12">
              <Reveal>
                <p className="text-sm font-medium uppercase tracking-widest text-gold">
                  About
                </p>
                <h2 className="mt-4 text-balance font-serif text-3xl font-semibold leading-tight text-foreground md:text-4xl">
                  Designed for lawyers. Powered by AI.
                </h2>
                <p className="mt-5 text-pretty text-base leading-relaxed text-muted-foreground">
                  Whether you&apos;re a solo practitioner, law firm, in-house legal
                  team, or compliance professional, LawyersRepo provides the
                  intelligence layer needed to operate faster, smarter, and more
                  efficiently.
                </p>
                <ul className="mt-7 grid grid-cols-2 gap-3">
                  {points.map((p) => (
                    <li
                      key={p}
                      className="flex items-center gap-2.5 text-sm text-foreground"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                      {p}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
            <div className="relative min-h-[320px] lg:min-h-full">
              <Image
                src="/images/about-team.png"
                alt="Legal team collaborating in a modern office"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
