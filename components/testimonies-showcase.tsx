import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const featuredTestimonies = [
  {
    id: 1,
    title: "From Despair to Hope",
    type: "Personal Transformation",
    location: "Lagos State",
    date: "December 2024",
    summary:
      "A young entrepreneur shares how Rhapsody of Realities transformed her failing business into a thriving enterprise.",
    excerpt:
      "I was on the verge of closing my business when I received Rhapsody of Realities. The daily devotionals gave me new perspective and faith. Today, my business has grown beyond my wildest dreams...",
    impact: "Business Growth",
  },
  {
    id: 2,
    title: "Healing and Restoration",
    type: "Healing Testimony",
    location: "Kano State",
    date: "November 2024",
    summary: "A mother of three testifies to divine healing after years of chronic illness.",
    excerpt:
      "For five years, I battled with a chronic condition that doctors couldn't cure. Through the prayers and teachings in Rhapsody of Realities, I experienced complete healing...",
    impact: "Divine Healing",
  },
  {
    id: 3,
    title: "Community Transformation",
    type: "Community Impact",
    location: "Rivers State",
    date: "January 2025",
    summary: "An entire community experiences positive change through the ReachOut Nigeria Campaign.",
    excerpt:
      "Our community was plagued with conflicts and divisions. The ReachOut campaign brought unity and peace. Families are restored, and our youth are now focused on positive pursuits...",
    impact: "Community Unity",
  },
  {
    id: 4,
    title: "Academic Excellence",
    type: "Educational Achievement",
    location: "Ogun State",
    date: "December 2024",
    summary: "A struggling student achieves academic breakthrough through faith and determination.",
    excerpt:
      "I was failing in school and had lost all hope. The daily confessions and teachings in Rhapsody of Realities renewed my mind. I graduated with first-class honors...",
    impact: "Academic Success",
  },
  {
    id: 5,
    title: "Marriage Restoration",
    type: "Family Restoration",
    location: "Abuja FCT",
    date: "October 2024",
    summary: "A couple on the brink of divorce finds healing and restoration through God's Word.",
    excerpt:
      "Our marriage was falling apart after 15 years. The principles we learned from Rhapsody of Realities helped us rebuild our relationship stronger than ever...",
    impact: "Family Healing",
  },
  {
    id: 6,
    title: "Career Breakthrough",
    type: "Business/Career Breakthrough",
    location: "Kaduna State",
    date: "November 2024",
    summary: "An unemployed graduate lands dream job after months of faith-filled declarations.",
    excerpt:
      "After two years of unemployment, I was losing hope. The daily confessions from Rhapsody of Realities built my faith. Within weeks, I received multiple job offers...",
    impact: "Career Success",
  },
]

export function TestimoniesShowcase() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Call to Action */}
      <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
        <CardContent className="p-8 text-center">
          <h2 className="text-2xl font-bold mb-4 text-foreground">Share Your Testimony</h2>
          <p className="text-muted-foreground mb-6 text-pretty">
            Have you experienced transformation through the ReachOut Nigeria Campaign? Share your story to inspire
            others.
          </p>
          <Link href="/upload/testimonies">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Submit Your Testimony
            </Button>
          </Link>
        </CardContent>
      </Card>

      {/* Featured Testimonies */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-center text-foreground">Featured Testimonies</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredTestimonies.map((testimony) => (
            <Card key={testimony.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {testimony.type}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {testimony.impact}
                  </Badge>
                </div>
                <CardTitle className="text-lg text-balance">{testimony.title}</CardTitle>
                <CardDescription className="text-sm">
                  {testimony.location} • {testimony.date}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground text-pretty">{testimony.summary}</p>
                <blockquote className="border-l-4 border-primary pl-4 italic text-sm text-foreground">
                  "{testimony.excerpt}"
                </blockquote>
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  Read Full Testimony
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Impact Statistics */}
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Campaign Impact</CardTitle>
          <CardDescription>Lives transformed through the ReachOut Nigeria Campaign</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">2,500+</div>
              <div className="text-sm text-muted-foreground">Testimonies Collected</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">36</div>
              <div className="text-sm text-muted-foreground">States Reached</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">15M+</div>
              <div className="text-sm text-muted-foreground">Lives Touched</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">50K+</div>
              <div className="text-sm text-muted-foreground">Communities Impacted</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Categories */}
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-center text-foreground">Testimony Categories</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { name: "Personal Transformation", count: 450, color: "bg-blue-100 text-blue-800" },
            { name: "Healing Testimonies", count: 320, color: "bg-green-100 text-green-800" },
            { name: "Family Restoration", count: 280, color: "bg-purple-100 text-purple-800" },
            { name: "Career Breakthrough", count: 380, color: "bg-orange-100 text-orange-800" },
            { name: "Community Impact", count: 150, color: "bg-teal-100 text-teal-800" },
            { name: "Educational Success", count: 220, color: "bg-indigo-100 text-indigo-800" },
            { name: "Business Growth", count: 190, color: "bg-pink-100 text-pink-800" },
            { name: "Salvation Stories", count: 510, color: "bg-yellow-100 text-yellow-800" },
          ].map((category) => (
            <Card key={category.name} className="text-center hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-2 ${category.color}`}>
                  {category.count}
                </div>
                <h4 className="font-semibold text-sm text-foreground">{category.name}</h4>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
