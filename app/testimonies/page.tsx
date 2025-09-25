import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TestimoniesShowcase } from "@/components/testimonies-showcase"

export default function TestimoniesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h1 className="text-4xl font-bold text-foreground text-balance">Testimonies of Transformation</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Discover the powerful stories of lives transformed through the ReachOut Nigeria Campaign.
            </p>
          </div>
          <TestimoniesShowcase />
        </div>
      </main>
      <Footer />
    </div>
  )
}
