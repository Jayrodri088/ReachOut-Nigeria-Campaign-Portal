import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ImpactSection() {
  return (
    <section id="impact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-foreground text-balance">Our Global Impact</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            See how the ReachOut Nigeria Campaign is transforming lives and communities across the nation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">50M+</div>
              <div className="text-sm text-muted-foreground">Copies Distributed</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">36</div>
              <div className="text-sm text-muted-foreground">States Reached</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">15M+</div>
              <div className="text-sm text-muted-foreground">Lives Touched</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">2,500+</div>
              <div className="text-sm text-muted-foreground">Testimonies</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-foreground">Transforming Nigeria, One Community at a Time</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The ReachOut Nigeria Campaign has become a powerful movement of transformation across our great nation.
              From bustling cities to remote villages, God's Word through Rhapsody of Realities is bringing hope,
              healing, and positive change to millions of lives.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-primary"></div>
                <span className="text-foreground">Nationwide distribution network</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-primary"></div>
                <span className="text-foreground">Community-driven impact</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-primary"></div>
                <span className="text-foreground">Documented testimonies of transformation</span>
              </div>
            </div>
            <Link href="/testimonies">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Read Testimonies
              </Button>
            </Link>
          </div>
          <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Join the Movement</CardTitle>
              <CardDescription className="text-center">
                Be part of this historic campaign to reach every home in Nigeria
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-primary">Every Home</div>
                <div className="text-sm text-muted-foreground">Our Vision</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-primary">Every Community</div>
                <div className="text-sm text-muted-foreground">Our Mission</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-primary">Every State</div>
                <div className="text-sm text-muted-foreground">Our Reach</div>
              </div>
              <Link href="/participate">
                <Button className="w-full bg-primary hover:bg-primary/90">Start Your Campaign</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
