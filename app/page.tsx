import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Vision } from "@/components/vision"
import { WhyUs } from "@/components/why-us"
import { About } from "@/components/about"
import { Testimonials } from "@/components/testimonials"
import { FinalCta } from "@/components/final-cta"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <main className="min-h-screen">
      <SiteHeader />
      <Hero />
      <Features />
      <Vision />
      <WhyUs />
      <About />
      <Testimonials />
      <FinalCta />
      <SiteFooter />
    </main>
  )
}
