import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-accent to-primary/80 text-primary-foreground">
      <div className="absolute inset-0 bg-[url('/abstract-geometric-pattern.png')] opacity-10"></div>
      <div className="relative container mx-auto px-4 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-balance">
                Welcome to the ReachOut Nigeria Campaign Portal!
              </h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed text-pretty">
                A Christ Embassy nationwide movement inspired by our vision to take God's Word through Rhapsody of
                Realities to every home, community, and state across Nigeria. Join believers from every church, zone,
                and group in this transformational campaign.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                Start Your Campaign
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative">
            <Card className="p-8 bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/20">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                    <span className="text-2xl">📑</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Upload Reports</h3>
                    <p className="text-primary-foreground/80">Share your distribution activities</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                    <span className="text-2xl">📸</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Share Testimonies</h3>
                    <p className="text-primary-foreground/80">Document transformed lives</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                    <span className="text-2xl">🌍</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Global Impact</h3>
                    <p className="text-primary-foreground/80">Part of ReachOut World movement</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
