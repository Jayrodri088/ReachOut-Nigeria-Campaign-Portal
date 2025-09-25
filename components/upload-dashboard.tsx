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

export function UploadDashboard() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
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

      <div className="mt-16">
        <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Upload Guidelines</h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div>
                <h4 className="font-semibold mb-2 text-foreground">File Requirements</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Maximum file size: 50MB</li>
                  <li>• Clear, high-quality content</li>
                  <li>• Relevant to campaign activities</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-foreground">Content Standards</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Accurate and truthful information</li>
                  <li>• Respectful and appropriate content</li>
                  <li>• Include location and date details</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-foreground">Privacy & Consent</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Obtain consent for photos/videos</li>
                  <li>• Protect personal information</li>
                  <li>• Follow campaign guidelines</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
