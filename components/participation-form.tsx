"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/hooks/use-toast"

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

const nigerianStates = [
  "Abia",
  "Adamawa",
  "Akwa Ibom",
  "Anambra",
  "Bauchi",
  "Bayelsa",
  "Benue",
  "Borno",
  "Cross River",
  "Delta",
  "Ebonyi",
  "Edo",
  "Ekiti",
  "Enugu",
  "FCT",
  "Gombe",
  "Imo",
  "Jigawa",
  "Kaduna",
  "Kano",
  "Katsina",
  "Kebbi",
  "Kogi",
  "Kwara",
  "Lagos",
  "Nasarawa",
  "Niger",
  "Ogun",
  "Ondo",
  "Osun",
  "Oyo",
  "Plateau",
  "Rivers",
  "Sokoto",
  "Taraba",
  "Yobe",
  "Zamfara",
]

export function ParticipationForm() {
  const [selectedType, setSelectedType] = useState<string>("")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    state: "",
    lga: "",
    organization: "",
    churchName: "",
    pastorName: "",
    experience: "",
    goals: "",
  })
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedType) {
      toast({
        title: "Please select a participation type",
        description: "Choose how you want to participate in the campaign.",
        variant: "destructive",
      })
      return
    }

    toast({
      title: "Registration Successful!",
      description: "Welcome to the ReachOut Nigeria Campaign. You'll receive further instructions via email.",
    })

    // Reset form
    setSelectedType("")
    setFormData({
      name: "",
      email: "",
      phone: "",
      state: "",
      lga: "",
      organization: "",
      churchName: "",
      pastorName: "",
      experience: "",
      goals: "",
    })
  }

  const selectedTypeData = participationTypes.find((type) => type.id === selectedType)

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Participation Type Selection */}
      <Card>
        <CardHeader>
          <CardTitle>Step 1: Choose Your Ministry Participation Level</CardTitle>
          <CardDescription>
            Select the level that best matches your role in Christ Embassy and your ministry capacity.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {participationTypes.map((type) => (
              <Card
                key={type.id}
                className={`cursor-pointer transition-all duration-300 hover:shadow-md ${
                  selectedType === type.id ? "ring-2 ring-primary bg-primary/5" : "hover:bg-card/80"
                }`}
                onClick={() => setSelectedType(type.id)}
              >
                <CardHeader className="text-center pb-2">
                  <div className="text-3xl mb-2">{type.icon}</div>
                  <CardTitle className="text-lg">{type.title}</CardTitle>
                  <CardDescription className="text-sm text-pretty">{type.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-1">
                    {type.features.map((feature, index) => (
                      <Badge key={index} variant="secondary" className="text-xs mr-1 mb-1">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Registration Form */}
      {selectedType && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <span className="text-2xl">{selectedTypeData?.icon}</span>
              Step 2: Register as {selectedTypeData?.title}
            </CardTitle>
            <CardDescription>
              Complete your registration to join the ReachOut Nigeria Campaign as a{" "}
              {selectedTypeData?.title.toLowerCase()} participant from Christ Embassy.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Enter your email address"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="Enter your phone number"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="state">State *</Label>
                  <Select value={formData.state} onValueChange={(value) => setFormData({ ...formData, state: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your state" />
                    </SelectTrigger>
                    <SelectContent>
                      {nigerianStates.map((state) => (
                        <SelectItem key={state} value={state}>
                          {state}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Church-specific fields */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="churchName">Christ Embassy Church/Branch *</Label>
                  <Input
                    id="churchName"
                    value={formData.churchName}
                    onChange={(e) => setFormData({ ...formData, churchName: e.target.value })}
                    placeholder="e.g., Christ Embassy Lagos, Christ Embassy Abuja"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="pastorName">Pastor/Zone Pastor Name</Label>
                  <Input
                    id="pastorName"
                    value={formData.pastorName}
                    onChange={(e) => setFormData({ ...formData, pastorName: e.target.value })}
                    placeholder="Enter your pastor's name"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="lga">Local Government Area</Label>
                  <Input
                    id="lga"
                    value={formData.lga}
                    onChange={(e) => setFormData({ ...formData, lga: e.target.value })}
                    placeholder="Enter your LGA"
                  />
                </div>
                {(selectedType === "group" || selectedType === "zone" || selectedType === "state") && (
                  <div className="space-y-2">
                    <Label htmlFor="organization">
                      {selectedType === "group"
                        ? "Cell Group/Department Name"
                        : selectedType === "zone"
                          ? "Zone Name"
                          : "State Ministry Name"}
                    </Label>
                    <Input
                      id="organization"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      placeholder={
                        selectedType === "group"
                          ? "e.g., Victory Cell, Youth Ministry"
                          : selectedType === "zone"
                            ? "e.g., Zone 1, Zone A"
                            : "e.g., Lagos State Ministry"
                      }
                    />
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="experience">Previous Ministry/Campaign Experience</Label>
                <Textarea
                  id="experience"
                  value={formData.experience}
                  onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                  placeholder="Tell us about any previous ministry, outreach, or ReachOut campaign experience you have..."
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="goals">Ministry Goals & Vision for ReachOut Nigeria</Label>
                <Textarea
                  id="goals"
                  value={formData.goals}
                  onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
                  placeholder="Share your ministry goals and vision for participating in the ReachOut Nigeria Campaign..."
                  rows={3}
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button type="submit" className="bg-primary hover:bg-primary/90 flex-1">
                  Complete Registration
                </Button>
                <Button type="button" variant="outline" onClick={() => setSelectedType("")} className="flex-1">
                  Change Participation Type
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
