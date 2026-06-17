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
    <section
      id="about"
      className="scroll-mt-20 py-24 md:py-36"
      style={{ backgroundColor: "#1F1D1A" }}
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div
          className="overflow-hidden rounded-2xl"
          style={{
            border: "1px solid rgba(255,255,255,0.06)",
            backgroundColor: "rgba(255,255,255,0.02)",
          }}
        >
          <div className="grid lg:grid-cols-2">
            <div className="flex flex-col justify-center p-8 md:p-14">
              <Reveal>
                <p
                  className="text-sm font-medium uppercase"
                  style={{ letterSpacing: "0.2em", color: "#78756F" }}
                >
                  About
                </p>
                <h2
                  className="mt-4 text-balance font-serif text-3xl font-semibold leading-tight md:text-4xl"
                  style={{ color: "#F5F1EB" }}
                >
                  Designed for lawyers. Powered by AI.
                </h2>
                <p
                  className="mt-5 text-pretty text-base leading-relaxed"
                  style={{ color: "#A8A29E" }}
                >
                  Whether you&apos;re a solo practitioner, law firm, in-house legal
                  team, or compliance professional, LawyersRepo provides the
                  intelligence layer needed to operate faster, smarter, and more
                  efficiently.
                </p>
                <ul className="mt-8 space-y-3">
                  {points.map((p) => (
                    <li
                      key={p}
                      className="flex items-center gap-3 text-sm"
                      style={{ color: "#F5F1EB" }}
                    >
                      <span
                        className="h-px w-4"
                        style={{ backgroundColor: "#78756F" }}
                      />
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
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to right, rgba(31,29,26,0.3), transparent)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
