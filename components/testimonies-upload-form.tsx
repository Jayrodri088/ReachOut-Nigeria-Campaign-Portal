"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FileUpload } from "@/components/file-upload"
import { useToast } from "@/hooks/use-toast"

const testimonyTypes = [
  "Personal Transformation",
  "Healing Testimony",
  "Salvation Experience",
  "Community Impact",
  "Family Restoration",
  "Business/Career Breakthrough",
  "Educational Achievement",
  "Other",
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

export function TestimoniesUploadForm() {
  const [formData, setFormData] = useState({
    title: "",
    testimonyType: "",
    personName: "",
    contactInfo: "",
    state: "",
    lga: "",
    date: "",
    summary: "",
    fullTestimony: "",
    beforeSituation: "",
    transformation: "",
    currentStatus: "",
    consent: false,
    publicShare: false,
  })
  const [files, setFiles] = useState<File[]>([])
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.title || !formData.testimonyType || !formData.fullTestimony) {
      toast({
        title: "Missing Required Fields",
        description: "Please fill in all required fields marked with *",
        variant: "destructive",
      })
      return
    }

    toast({
      title: "Testimony Submitted Successfully!",
      description: "Thank you for sharing this powerful testimony. It will inspire many others.",
    })

    // Reset form
    setFormData({
      title: "",
      testimonyType: "",
      personName: "",
      contactInfo: "",
      state: "",
      lga: "",
      date: "",
      summary: "",
      fullTestimony: "",
      beforeSituation: "",
      transformation: "",
      currentStatus: "",
      consent: false,
      publicShare: false,
    })
    setFiles([])
  }

  return (
    <div className="max-w-4xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Testimony Submission</CardTitle>
          <CardDescription>
            Share powerful testimonies of lives transformed through the ReachOut Nigeria Campaign.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Basic Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Basic Information</h3>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Testimony Title *</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    placeholder="Enter a compelling title for this testimony"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="testimonyType">Testimony Type *</Label>
                  <Select
                    value={formData.testimonyType}
                    onValueChange={(value) => setFormData({ ...formData, testimonyType: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select testimony type" />
                    </SelectTrigger>
                    <SelectContent>
                      {testimonyTypes.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="personName">Person's Name (Optional)</Label>
                  <Input
                    id="personName"
                    value={formData.personName}
                    onChange={(e) => setFormData({ ...formData, personName: e.target.value })}
                    placeholder="Name of the person giving testimony"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contactInfo">Contact Information (Optional)</Label>
                  <Input
                    id="contactInfo"
                    value={formData.contactInfo}
                    onChange={(e) => setFormData({ ...formData, contactInfo: e.target.value })}
                    placeholder="Phone or email for follow-up"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="state">State</Label>
                  <Select value={formData.state} onValueChange={(value) => setFormData({ ...formData, state: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select state" />
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
                <div className="space-y-2">
                  <Label htmlFor="lga">Local Government Area</Label>
                  <Input
                    id="lga"
                    value={formData.lga}
                    onChange={(e) => setFormData({ ...formData, lga: e.target.value })}
                    placeholder="Enter LGA"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="date">Date of Testimony</Label>
                  <Input
                    id="date"
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  />
                </div>
              </div>
            </div>

            {/* Testimony Details */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Testimony Details</h3>

              <div className="space-y-2">
                <Label htmlFor="summary">Brief Summary</Label>
                <Textarea
                  id="summary"
                  value={formData.summary}
                  onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
                  placeholder="Provide a brief summary of this testimony in 2-3 sentences..."
                  rows={2}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="fullTestimony">Full Testimony *</Label>
                <Textarea
                  id="fullTestimony"
                  value={formData.fullTestimony}
                  onChange={(e) => setFormData({ ...formData, fullTestimony: e.target.value })}
                  placeholder="Share the complete testimony in detail. Include how the person encountered Rhapsody of Realities and the transformation that followed..."
                  rows={6}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="beforeSituation">Situation Before</Label>
                <Textarea
                  id="beforeSituation"
                  value={formData.beforeSituation}
                  onChange={(e) => setFormData({ ...formData, beforeSituation: e.target.value })}
                  placeholder="Describe the person's situation before encountering God's Word..."
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="transformation">The Transformation</Label>
                <Textarea
                  id="transformation"
                  value={formData.transformation}
                  onChange={(e) => setFormData({ ...formData, transformation: e.target.value })}
                  placeholder="Describe the specific changes and transformation that occurred..."
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="currentStatus">Current Status</Label>
                <Textarea
                  id="currentStatus"
                  value={formData.currentStatus}
                  onChange={(e) => setFormData({ ...formData, currentStatus: e.target.value })}
                  placeholder="Share the person's current situation and ongoing impact..."
                  rows={3}
                />
              </div>
            </div>

            {/* File Upload */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Supporting Files (Optional)</h3>
              <FileUpload
                files={files}
                onFilesChange={setFiles}
                acceptedTypes={[".pdf", ".doc", ".docx", ".jpg", ".jpeg", ".png", ".mp4", ".mov"]}
                maxSize={50 * 1024 * 1024} // 50MB
                multiple={true}
              />
            </div>

            {/* Consent and Permissions */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Consent & Permissions</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <input
                    type="checkbox"
                    id="consent"
                    checked={formData.consent}
                    onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                    className="mt-1"
                  />
                  <Label htmlFor="consent" className="text-sm leading-relaxed">
                    I confirm that I have obtained proper consent from the person giving this testimony to share their
                    story for the ReachOut Nigeria Campaign.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <input
                    type="checkbox"
                    id="publicShare"
                    checked={formData.publicShare}
                    onChange={(e) => setFormData({ ...formData, publicShare: e.target.checked })}
                    className="mt-1"
                  />
                  <Label htmlFor="publicShare" className="text-sm leading-relaxed">
                    This testimony may be shared publicly on ReachOut Nigeria platforms and materials to inspire others.
                  </Label>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button type="submit" className="bg-primary hover:bg-primary/90 flex-1">
                Submit Testimony
              </Button>
              <Button type="button" variant="outline" className="flex-1 bg-transparent">
                Save as Draft
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
