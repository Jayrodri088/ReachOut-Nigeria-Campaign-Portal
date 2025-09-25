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

const mediaTypes = [
  "Campaign Activities",
  "Distribution Events",
  "Community Outreach",
  "Testimonial Videos",
  "Before/After Photos",
  "Team Photos",
  "Impact Documentation",
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

export function MediaUploadForm() {
  const [formData, setFormData] = useState({
    title: "",
    mediaType: "",
    description: "",
    state: "",
    lga: "",
    location: "",
    date: "",
    photographer: "",
    participants: "",
    context: "",
    impact: "",
    consent: false,
    publicUse: false,
  })
  const [files, setFiles] = useState<File[]>([])
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.title || !formData.mediaType || files.length === 0) {
      toast({
        title: "Missing Required Fields",
        description: "Please provide a title, media type, and upload at least one file",
        variant: "destructive",
      })
      return
    }

    toast({
      title: "Media Uploaded Successfully!",
      description: "Your photos and videos have been submitted and will help showcase the campaign impact.",
    })

    // Reset form
    setFormData({
      title: "",
      mediaType: "",
      description: "",
      state: "",
      lga: "",
      location: "",
      date: "",
      photographer: "",
      participants: "",
      context: "",
      impact: "",
      consent: false,
      publicUse: false,
    })
    setFiles([])
  }

  return (
    <div className="max-w-4xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Media Upload</CardTitle>
          <CardDescription>
            Upload photos and videos that capture the impact and reach of your ReachOut Nigeria campaign activities.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Basic Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Basic Information</h3>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Media Title *</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    placeholder="Enter a descriptive title for your media"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="mediaType">Media Type *</Label>
                  <Select
                    value={formData.mediaType}
                    onValueChange={(value) => setFormData({ ...formData, mediaType: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select media type" />
                    </SelectTrigger>
                    <SelectContent>
                      {mediaTypes.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Provide a detailed description of what the media shows..."
                  rows={3}
                />
              </div>
            </div>

            {/* Location and Date */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Location & Date</h3>

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
                  <Label htmlFor="date">Date Taken</Label>
                  <Input
                    id="date"
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Specific Location</Label>
                <Input
                  id="location"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  placeholder="Enter specific location (e.g., community name, landmark, address)"
                />
              </div>
            </div>

            {/* Additional Details */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Additional Details</h3>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="photographer">Photographer/Videographer</Label>
                  <Input
                    id="photographer"
                    value={formData.photographer}
                    onChange={(e) => setFormData({ ...formData, photographer: e.target.value })}
                    placeholder="Name of person who took the media"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="participants">Number of Participants</Label>
                  <Input
                    id="participants"
                    type="number"
                    value={formData.participants}
                    onChange={(e) => setFormData({ ...formData, participants: e.target.value })}
                    placeholder="Approximate number of people involved"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="context">Context & Background</Label>
                <Textarea
                  id="context"
                  value={formData.context}
                  onChange={(e) => setFormData({ ...formData, context: e.target.value })}
                  placeholder="Provide context about what was happening when this media was captured..."
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="impact">Impact & Significance</Label>
                <Textarea
                  id="impact"
                  value={formData.impact}
                  onChange={(e) => setFormData({ ...formData, impact: e.target.value })}
                  placeholder="Explain the significance of this media and its impact on the campaign..."
                  rows={3}
                />
              </div>
            </div>

            {/* File Upload */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Upload Media Files *</h3>
              <FileUpload
                files={files}
                onFilesChange={setFiles}
                acceptedTypes={[".jpg", ".jpeg", ".png", ".gif", ".mp4", ".mov", ".avi", ".wmv"]}
                maxSize={100 * 1024 * 1024} // 100MB for media files
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
                    I confirm that I have obtained proper consent from all individuals visible in these photos/videos
                    for their use in the ReachOut Nigeria Campaign.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <input
                    type="checkbox"
                    id="publicUse"
                    checked={formData.publicUse}
                    onChange={(e) => setFormData({ ...formData, publicUse: e.target.checked })}
                    className="mt-1"
                  />
                  <Label htmlFor="publicUse" className="text-sm leading-relaxed">
                    This media may be used publicly on ReachOut Nigeria platforms, social media, and promotional
                    materials.
                  </Label>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button type="submit" className="bg-primary hover:bg-primary/90 flex-1">
                Upload Media
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
