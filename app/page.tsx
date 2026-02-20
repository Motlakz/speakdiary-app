import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about"
import FeaturesSection from "@/components/features"
import PricingSection from "@/components/pricing"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        <PricingSection />
      </main>
      <Footer />
    </>
  )
}
