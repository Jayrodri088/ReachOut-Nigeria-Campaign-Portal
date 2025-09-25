"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const participationTypes = [
  {
    id: "individual",
    title: "Individual",
    description: "Join as an individual church member in your local community",
    icon: "👤",
    features: ["Personal impact tracking", "Community outreach", "Individual testimony reports"],
  },
  {
    id: "group",
    title: "Group",
    description: "Participate with your cell group, department, or ministry team",
    icon: "👥",
    features: ["Cell group coordination", "Ministry team reports", "Group testimonies"],
  },
  {
    id: "zone",
    title: "Zone",
    description: "Coordinate activities across your Christ Embassy zone",
    icon: "🏘️",
    features: ["Zone-wide coordination", "Multi-church oversight", "Regional church impact"],
  },
  {
    id: "state",
    title: "State",
    description: "Lead state-wide Christ Embassy campaign initiatives",
    icon: "🏛️",
    features: ["State church leadership", "Comprehensive state reporting", "Strategic ministry oversight"],
  },
]

export function ParticipationSection() {
  const [selectedType, setSelectedType] = useState<string | null>(null)

  return (
    <section id="participate" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-foreground text-balance">Choose Your Ministry Participation Level</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Select how you want to contribute to the ReachOut Nigeria Campaign through your Christ Embassy church, zone,
            or ministry group.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {participationTypes.map((type) => (
            <Card
              key={type.id}
              className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                selectedType === type.id ? "ring-2 ring-primary bg-primary/5" : "hover:bg-card/80"
              }`}
              onClick={() => setSelectedType(type.id)}
            >
              <CardHeader className="text-center">
                <div className="text-4xl mb-2">{type.icon}</div>
                <CardTitle className="text-xl">{type.title}</CardTitle>
                <CardDescription className="text-pretty">{type.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {type.features.map((feature, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>
                {selectedType === type.id && (
                  <Link href="/participate">
                    <Button className="w-full mt-4 bg-primary hover:bg-primary/90">Continue as {type.title}</Button>
                  </Link>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
