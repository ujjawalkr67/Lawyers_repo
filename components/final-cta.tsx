"use client"

import { useState } from "react"
import { ArrowRight, Rocket, Check } from "lucide-react"
import { Reveal } from "@/components/reveal"

export function FinalCta() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
  }

  return (
    <section
      id="contact"
      className="scroll-mt-20 py-24 md:py-36"
      style={{ backgroundColor: "#1F1D1A" }}
    >
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        {/* Waitlist section */}
        <Reveal>
          <div
            id="waitlist"
            className="relative overflow-hidden rounded-2xl px-6 py-14 text-center md:px-12 md:py-20"
            style={{
              border: "1px solid rgba(255,255,255,0.06)",
              backgroundColor: "rgba(255,255,255,0.03)",
            }}
          >
            {/* Ambient glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full opacity-[0.06]"
              style={{
                background: "radial-gradient(circle, #D4CFC7, transparent 70%)",
              }}
            />

            <span
              className="relative inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium"
              style={{
                border: "1px solid rgba(168,162,158,0.3)",
                backgroundColor: "rgba(168,162,158,0.1)",
                color: "#D4CFC7",
              }}
            >
              <Rocket className="h-3.5 w-3.5" />
              Coming Soon
            </span>

            <h2
              className="relative mx-auto mt-6 max-w-2xl text-balance font-serif text-3xl font-semibold leading-tight md:text-4xl"
              style={{ color: "#F5F1EB" }}
            >
              Be among the first to experience LawyersRepo
            </h2>
            <p
              className="relative mx-auto mt-4 max-w-xl text-pretty text-sm leading-relaxed md:text-base"
              style={{ color: "#A8A29E" }}
            >
              LawyersRepo is currently in private development. Join the waitlist
              to get early access and product updates.
            </p>

            {submitted ? (
              <div
                className="relative mx-auto mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium"
                style={{
                  border: "1px solid rgba(255,255,255,0.1)",
                  backgroundColor: "rgba(255,255,255,0.05)",
                  color: "#F5F1EB",
                }}
              >
                <Check className="h-4 w-4" />
                You&apos;re on the list — we&apos;ll be in touch.
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="relative mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your work email"
                  className="w-full rounded-full px-5 py-3.5 text-sm outline-none transition-colors"
                  style={{
                    border: "1px solid rgba(255,255,255,0.12)",
                    backgroundColor: "rgba(255,255,255,0.06)",
                    color: "#F5F1EB",
                  }}
                />
                <button
                  type="submit"
                  className="group shrink-0 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium transition-all hover:shadow-lg"
                  style={{
                    backgroundColor: "#F5F1EB",
                    color: "#1F1D1A",
                  }}
                >
                  Join Waitlist
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </button>
              </form>
            )}
          </div>
        </Reveal>

        {/* Contact link */}
        <div className="mt-8 text-center">
          <a
            href="mailto:hello@lawyersrepo.com"
            className="text-sm transition-colors hover:opacity-80"
            style={{ color: "#78756F" }}
          >
            Or contact us directly →
          </a>
        </div>
      </div>
    </section>
  )
}
