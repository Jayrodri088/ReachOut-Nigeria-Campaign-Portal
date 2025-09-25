import { ParticipationForm } from "@/components/participation-form"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function ParticipatePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h1 className="text-4xl font-bold text-foreground text-balance">Join the ReachOut Nigeria Campaign</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Choose your participation level and start making an impact in your community today.
            </p>
          </div>
          <ParticipationForm />
        </div>
      </main>
      <Footer />
    </div>
  )
}
