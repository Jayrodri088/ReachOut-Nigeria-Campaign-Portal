import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const uploadTypes = [
  {
    title: "Distribution Reports",
    description: "Upload your campaign distribution reports and activity summaries",
    icon: "📊",
    formats: "DOC, PDF, LINK",
    color: "bg-blue-50 border-blue-200 text-blue-900",
    href: "/upload/reports",
  },
  {
    title: "Testimonies",
    description: "Share powerful testimonies of lives transformed through your efforts",
    icon: "💬",
    formats: "DOC, PDF, TEXT",
    color: "bg-green-50 border-green-200 text-green-900",
    href: "/upload/testimonies",
  },
  {
    title: "Pictures & Videos",
    description: "Upload visual content that captures your campaign impact",
    icon: "📸",
    formats: "JPG, PNG, MP4, MOV",
    color: "bg-purple-50 border-purple-200 text-purple-900",
    href: "/upload/media",
  },
]

export function UploadSection() {
  return (
    <section id="upload" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-foreground text-balance">Share Your Campaign Impact</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Every submission contributes to the larger story of how God's Word is prevailing in Nigeria, one community
            at a time.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {uploadTypes.map((type, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="text-5xl mb-4">{type.icon}</div>
                <CardTitle className="text-xl">{type.title}</CardTitle>
                <CardDescription className="text-pretty">{type.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className={`p-3 rounded-lg ${type.color}`}>
                  <p className="text-sm font-medium">Supported formats:</p>
                  <p className="text-sm">{type.formats}</p>
                </div>
                <Link href={type.href}>
                  <Button className="w-full bg-primary hover:bg-primary/90">Upload {type.title}</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-foreground">Join us in documenting history!</h3>
              <p className="text-muted-foreground mb-6 text-pretty">
                Your contributions help inspire others and celebrate the impact of the Gospel through ReachOut Nigeria.
              </p>
              <Link href="/upload">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Start Contributing Now
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
