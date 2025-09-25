import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { UploadDashboard } from "@/components/upload-dashboard"

export default function UploadPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h1 className="text-4xl font-bold text-foreground text-balance">Share Your Campaign Impact</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Upload your reports, testimonies, and media to contribute to the ReachOut Nigeria story.
            </p>
          </div>
          <UploadDashboard />
        </div>
      </main>
      <Footer />
    </div>
  )
}
