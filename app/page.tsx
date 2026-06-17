import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { WaitlistBanner } from "@/components/waitlist-banner"
import { Features } from "@/components/features"
import { Vision } from "@/components/vision"
import { WhyUs } from "@/components/why-us"
import { About } from "@/components/about"
import { Testimonials } from "@/components/testimonials"
import { FinalCta } from "@/components/final-cta"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <Hero />
      <WaitlistBanner />
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
