import { Scale } from "lucide-react"

const links = [
  { label: "Features", href: "#features" },
  { label: "Vision", href: "#vision" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
]

export function SiteFooter() {
  return (
    <footer style={{ backgroundColor: "#1F1D1A", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 px-5 py-14 md:flex-row md:px-8">
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

        <nav className="flex flex-wrap items-center justify-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm transition-colors hover:opacity-80"
              style={{ color: "#78756F" }}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <p className="text-sm" style={{ color: "#78756F" }}>
          © 2026 LawyersRepo. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
