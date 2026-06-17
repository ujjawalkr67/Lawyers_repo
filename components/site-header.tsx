"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Scale, Menu, X, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

const links = [
  { label: "Features", href: "#features" },
  { label: "Vision", href: "#vision" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
      )}
      style={{
        backgroundColor: scrolled ? "rgba(31,29,26,0.95)" : "transparent",
        borderBottom: scrolled ? "1px solid rgba(212,207,199,0.1)" : "none",
        backdropFilter: scrolled ? "blur(20px)" : "none",
      }}
    >
      {/* Announcement bar */}
      <div
        className={cn(
          "overflow-hidden transition-all duration-300",
          scrolled ? "h-0 opacity-0" : "h-auto opacity-100",
        )}
        style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-center gap-2 px-5 py-2.5 text-xs md:px-8">
          <span style={{ color: "#A8A29E" }}>
            The AI Operating System for Modern Legal Practice
          </span>
          <a
            href="#features"
            className="group inline-flex items-center gap-1 font-medium transition-opacity hover:opacity-80"
            style={{ color: "#F5F1EB" }}
          >
            Explore
            <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>

      {/* Main nav */}
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
        <a href="#top" className="flex items-center gap-2.5">
          <span
            className="flex h-8 w-8 items-center justify-center rounded-md"
            style={{ backgroundColor: "#F5F1EB", color: "#1F1D1A" }}
          >
            <Scale className="h-4 w-4" aria-hidden="true" />
          </span>
          <span
            className="font-serif text-lg font-semibold tracking-tight"
            style={{ color: "#F5F1EB" }}
          >
            LawyersRepo
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm transition-colors hover:opacity-80"
              style={{ color: "#A8A29E" }}
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href="#waitlist"
            className="group inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#F5F1EB", color: "#1F1D1A" }}
          >
            Join Waitlist
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>

        <button
          type="button"
          className="md:hidden"
          style={{ color: "#F5F1EB" }}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden md:hidden"
            style={{
              borderTop: "1px solid rgba(255,255,255,0.06)",
              backgroundColor: "rgba(31,29,26,0.98)",
              backdropFilter: "blur(20px)",
            }}
          >
            <div className="flex flex-col gap-1 px-5 py-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-2 py-2.5 text-sm transition-colors"
                  style={{ color: "#A8A29E" }}
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#waitlist"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-full px-5 py-2.5 text-center text-sm font-medium"
                style={{ backgroundColor: "#F5F1EB", color: "#1F1D1A" }}
              >
                Join Waitlist
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
