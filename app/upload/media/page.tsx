import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MediaUploadForm } from "@/components/media-upload-form"

export default function MediaUploadPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h1 className="text-4xl font-bold text-foreground text-balance">Upload Pictures & Videos</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Share visual content that captures the impact and reach of your campaign activities.
            </p>
          </div>
          <MediaUploadForm />
        </div>
      </main>
      <Footer />
    </div>
  )
}
