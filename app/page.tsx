import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ParticipationSection } from "@/components/participation-section"
import { UploadSection } from "@/components/upload-section"
import { ImpactSection } from "@/components/impact-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ParticipationSection />
        <UploadSection />
        <ImpactSection />
      </main>
      <Footer />
    </div>
  )
}
