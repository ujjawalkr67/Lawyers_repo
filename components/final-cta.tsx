"use client"

import { ArrowRight } from "lucide-react"
import { Reveal } from "@/components/reveal"

export function FinalCta() {
  return (
    <section id="contact" className="mt-28 scroll-mt-20 px-5 md:mt-36 md:px-8">
      <Reveal className="mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-3xl border border-gold/30 bg-gradient-to-b from-secondary to-card px-6 py-16 text-center md:px-12 md:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-0 h-72 w-[600px] -translate-x-1/2 rounded-full bg-gold/15 blur-3xl"
          />
          <h2 className="relative mx-auto max-w-2xl text-balance font-serif text-3xl font-semibold leading-tight text-foreground md:text-5xl">
            Be among the first to experience LawyersRepo
          </h2>
          <p className="relative mx-auto mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground">
            Join the waitlist today and get early access when LawyersRepo launches.
          </p>
          <div className="relative mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="#waitlist"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Join Waitlist
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="mailto:hello@lawyersrepo.com"
              className="inline-flex items-center justify-center rounded-full border border-border bg-card px-7 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              Contact Us
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
