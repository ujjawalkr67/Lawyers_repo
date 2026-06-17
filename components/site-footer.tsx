import { Scale } from "lucide-react"

const links = [
  { label: "Features", href: "#features" },
  { label: "Vision", href: "#vision" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
]

export function SiteFooter() {
  return (
    <footer className="mt-28 border-t border-border px-5 py-12 md:mt-36 md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        <a href="#top" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <Scale className="h-4 w-4" aria-hidden="true" />
          </span>
          <span className="font-serif text-lg font-semibold tracking-tight text-foreground">
            LawyersRepo
          </span>
        </a>

        <nav className="flex flex-wrap items-center justify-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <p className="text-sm text-muted-foreground">
          © 2026 LawyersRepo. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
