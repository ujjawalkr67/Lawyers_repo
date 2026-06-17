"use client"

import { useState } from "react"
import { Rocket, Check } from "lucide-react"
import { Reveal } from "@/components/reveal"

export function WaitlistBanner() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
  }

  return (
    <section id="waitlist" className="mt-24 px-5 md:mt-32 md:px-8">
      <Reveal className="mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-primary px-6 py-12 text-center md:px-12 md:py-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gold/25 blur-3xl"
          />
          <span className="relative inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/15 px-4 py-1.5 text-xs font-medium text-gold">
            <Rocket className="h-3.5 w-3.5" />
            Coming Soon
          </span>
          <h2 className="relative mx-auto mt-6 max-w-2xl text-balance font-serif text-3xl font-semibold leading-tight text-primary-foreground md:text-4xl">
            Join the private waitlist for early access
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-pretty text-sm leading-relaxed text-primary-foreground/70 md:text-base">
            LawyersRepo is currently in private development. Join the waitlist to get
            early access and product updates.
          </p>

          {submitted ? (
            <div className="relative mx-auto mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-medium text-gold-foreground">
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
                className="w-full rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-5 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/50 outline-none transition-colors focus:border-gold"
              />
              <button
                type="submit"
                className="shrink-0 rounded-full bg-gold px-6 py-3 text-sm font-medium text-gold-foreground transition-opacity hover:opacity-90"
              >
                Join Waitlist
              </button>
            </form>
          )}
        </div>
      </Reveal>
    </section>
  )
}
