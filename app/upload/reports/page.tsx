import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ReportsUploadForm } from "@/components/reports-upload-form"

export default function ReportsUploadPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h1 className="text-4xl font-bold text-foreground text-balance">Upload Distribution Reports</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Share your campaign distribution reports and activity summaries to track your impact.
            </p>
          </div>
          <ReportsUploadForm />
        </div>
      </main>
      <Footer />
    </div>
  )
}
