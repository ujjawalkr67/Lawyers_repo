"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import {
  FileText,
  ShieldCheck,
  Search,
  Gavel,
  BarChart3,
  ArrowRight,
  Play,
} from "lucide-react"

const dashItems = [
  { icon: Search, label: "Case Research", value: "1,284 sources" },
  { icon: ShieldCheck, label: "Compliance Monitor", value: "All clear" },
  { icon: FileText, label: "Contract Drafting", value: "12 in progress" },
  { icon: Gavel, label: "Judge Intelligence", value: "Patterns ready" },
  { icon: BarChart3, label: "Court Analytics", value: "+18% throughput" },
]

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 md:pt-36">
      {/* soft glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-gold/20 blur-3xl"
      />
      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium text-muted-foreground"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              The AI Operating System for Modern Legal Practice
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-6 text-balance font-serif text-5xl font-semibold leading-[1.05] tracking-tight text-foreground md:text-6xl lg:text-7xl"
            >
              Legal Intelligence. Reimagined.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.12 }}
              className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg"
            >
              LawyersRepo transforms legal work with AI-powered drafting, compliance
              automation, case intelligence, judge analytics, and legal research —
              helping professionals move from hours to minutes.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.18 }}
              className="mt-9 flex flex-col gap-3 sm:flex-row"
            >
              <a
                href="#waitlist"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                Join Waitlist
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#vision"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-7 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
              >
                <Play className="h-4 w-4 text-gold" />
                Watch Demo
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-10 flex items-center gap-6 text-xs text-muted-foreground"
            >
              <span>Trusted by forward-thinking legal teams</span>
            </motion.div>
          </div>

          {/* Dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-[0_30px_80px_-30px_rgba(60,50,30,0.35)]">
              <div className="relative h-40 w-full md:h-48">
                <Image
                  src="/images/hero-law.png"
                  alt="Modern law office workspace"
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
              </div>
              <div className="space-y-2.5 p-5">
                <div className="flex items-center justify-between pb-1">
                  <span className="font-serif text-sm font-semibold text-foreground">
                    Legal Command Center
                  </span>
                  <span className="rounded-full bg-gold/15 px-2.5 py-1 text-[10px] font-medium text-gold-foreground">
                    Live
                  </span>
                </div>
                {dashItems.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                    className="flex items-center justify-between rounded-lg border border-border/70 bg-background px-3.5 py-2.5"
                  >
                    <span className="flex items-center gap-3 text-sm text-foreground">
                      <span className="flex h-7 w-7 items-center justify-center rounded-md bg-secondary text-gold">
                        <item.icon className="h-3.5 w-3.5" />
                      </span>
                      {item.label}
                    </span>
                    <span className="text-xs text-muted-foreground">{item.value}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* floating accent cards */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="absolute -left-4 top-24 hidden rounded-xl border border-border bg-card px-4 py-3 shadow-lg md:block"
            >
              <p className="text-2xl font-semibold text-foreground">95%</p>
              <p className="text-[11px] text-muted-foreground">Research time saved</p>
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="absolute -right-4 bottom-10 hidden rounded-xl border border-border bg-card px-4 py-3 shadow-lg md:block"
            >
              <p className="text-2xl font-semibold text-foreground">10x</p>
              <p className="text-[11px] text-muted-foreground">Faster drafting</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
