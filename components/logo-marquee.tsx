"use client"

const clients = [
  "Allen & Overy",
  "Baker McKenzie",
  "Clifford Chance",
  "Dentons",
  "Freshfields",
  "Herbert Smith",
  "Kirkland & Ellis",
  "Latham & Watkins",
  "Linklaters",
  "Norton Rose",
  "Sullivan & Cromwell",
  "White & Case",
]

export function LogoMarquee() {
  const doubled = [...clients, ...clients]

  return (
    <section
      className="overflow-hidden py-10 md:py-14"
      style={{ backgroundColor: "#1F1D1A", borderBottom: "1px solid rgba(255,255,255,0.04)" }}
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <p
          className="mb-8 text-center text-xs font-medium uppercase"
          style={{ letterSpacing: "0.2em", color: "#78756F" }}
        >
          Trusted by leading legal teams worldwide
        </p>
      </div>

      <div className="relative">
        {/* left fade */}
        <div
          className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24"
          style={{ background: "linear-gradient(to right, #1F1D1A, transparent)" }}
        />
        {/* right fade */}
        <div
          className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24"
          style={{ background: "linear-gradient(to left, #1F1D1A, transparent)" }}
        />

        <div className="marquee-track">
          {doubled.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="mx-8 inline-block shrink-0 whitespace-nowrap font-serif text-lg font-medium md:mx-12 md:text-xl"
              style={{ color: "rgba(120, 117, 111, 0.6)" }}
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
