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
    <section
      id="features"
      className="scroll-mt-20 py-24 md:py-36"
      style={{ backgroundColor: "#F5F1EB" }}
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p
            className="text-sm font-medium uppercase"
            style={{ letterSpacing: "0.2em", color: "#78756F" }}
          >
            Capabilities
          </p>
          <h2
            className="mt-4 text-balance font-serif text-3xl font-semibold leading-tight md:text-5xl"
            style={{ color: "#1F1D1A" }}
          >
            Everything a modern legal team needs
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.06}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group h-full rounded-2xl border p-8 transition-all hover:shadow-lg"
                style={{
                  borderColor: "#D4CFC7",
                  backgroundColor: "white",
                }}
              >
                <span
                  className="flex h-12 w-12 items-center justify-center rounded-xl"
                  style={{ backgroundColor: "#1F1D1A", color: "#F5F1EB" }}
                >
                  <f.icon className="h-5 w-5" />
                </span>
                <h3
                  className="mt-6 font-serif text-xl font-semibold"
                  style={{ color: "#1F1D1A" }}
                >
                  {f.title}
                </h3>
                <p
                  className="mt-3 text-sm leading-relaxed"
                  style={{ color: "#78756F" }}
                >
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
