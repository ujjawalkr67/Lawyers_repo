"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight, Play } from "lucide-react"

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen overflow-hidden"
      style={{ backgroundColor: "#1F1D1A" }}
    >
      {/* Full-bleed background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-office.png"
          alt="Modern law office at dusk"
          fill
          priority
          className="object-cover"
        />
        {/* Dark gradient overlay for text readability */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(31,29,26,0.55) 0%, rgba(31,29,26,0.7) 50%, rgba(31,29,26,0.92) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative flex min-h-screen items-center">
        <div className="mx-auto max-w-6xl px-5 py-32 md:px-8 md:py-40">
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium"
              style={{
                border: "1px solid rgba(255,255,255,0.12)",
                backgroundColor: "rgba(255,255,255,0.06)",
                color: "#D4CFC7",
              }}
            >
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: "#D4CFC7" }}
              />
              The AI Operating System for Modern Legal Practice
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.05 }}
              className="mt-8 text-balance font-serif text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl lg:text-[5rem]"
              style={{ color: "#F5F1EB" }}
            >
              Legal Intelligence.{" "}
              <span style={{ color: "#D4CFC7" }}>Reimagined.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-7 max-w-xl text-pretty text-base leading-relaxed md:text-lg"
              style={{ color: "#A8A29E" }}
            >
              LawyersRepo transforms legal work with AI-powered drafting,
              compliance automation, case intelligence, judge analytics, and
              legal research — helping professionals move from hours to minutes.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <a
                href="#waitlist"
                className="group inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm font-medium transition-all hover:shadow-lg"
                style={{
                  backgroundColor: "#F5F1EB",
                  color: "#1F1D1A",
                }}
              >
                Join Waitlist
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#vision"
                className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm font-medium transition-all hover:bg-white/10"
                style={{
                  border: "1px solid rgba(255,255,255,0.15)",
                  color: "#F5F1EB",
                }}
              >
                <Play className="h-4 w-4" style={{ color: "#D4CFC7" }} />
                Watch Demo
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom edge fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32"
        style={{
          background: "linear-gradient(to bottom, transparent, #F5F1EB)",
        }}
      />
    </section>
  )
}
