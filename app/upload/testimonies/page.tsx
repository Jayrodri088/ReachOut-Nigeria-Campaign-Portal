import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TestimoniesUploadForm } from "@/components/testimonies-upload-form"

export default function TestimoniesUploadPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h1 className="text-4xl font-bold text-foreground text-balance">Share Testimonies</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Document the powerful testimonies of lives transformed through your campaign efforts.
            </p>
          </div>
          <TestimoniesUploadForm />
        </div>
      </main>
      <Footer />
    </div>
  )
}
