"use client"

import { motion } from "framer-motion"
import {
  FileText,
  ShieldCheck,
  Search,
  Gavel,
  BarChart3,
  Database,
} from "lucide-react"
import { Reveal } from "@/components/reveal"

const features = [
  {
    icon: FileText,
    title: "AI Legal Drafting",
    desc: "Generate contracts, notices, petitions, agreements, and legal documents instantly.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance Automation",
    desc: "Automate regulatory workflows and compliance documentation end to end.",
  },
  {
    icon: Search,
    title: "Case Research",
    desc: "Search judgments, precedents, and legal databases with AI in seconds.",
  },
  {
    icon: Gavel,
    title: "Judge Intelligence",
    desc: "Analyze judicial patterns, tendencies, and historical rulings with clarity.",
  },
  {
    icon: BarChart3,
    title: "Court Analytics",
    desc: "Gain insights into litigation trends and court performance at a glance.",
  },
  {
    icon: Database,
    title: "Document Repository",
    desc: "Centralized legal knowledge management and instant retrieval.",
  },
]

export function Features() {
  return (
    <section id="features" className="mt-28 scroll-mt-20 px-5 md:mt-36 md:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-gold">
            Capabilities
          </p>
          <h2 className="mt-4 text-balance font-serif text-3xl font-semibold leading-tight text-foreground md:text-5xl">
            Everything a modern legal team needs
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.06}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group h-full rounded-2xl border border-border bg-card p-7 transition-colors hover:border-gold/50"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-gold transition-colors group-hover:bg-gold group-hover:text-gold-foreground">
                  <f.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-serif text-xl font-semibold text-foreground">
                  {f.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                  {f.desc}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
