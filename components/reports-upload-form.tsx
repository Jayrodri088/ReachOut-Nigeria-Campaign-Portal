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

const reportTypes = [
  "Distribution Summary",
  "Community Outreach Report",
  "Zone Activity Report",
  "State Campaign Report",
  "Impact Assessment",
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

export function ReportsUploadForm() {
  const [formData, setFormData] = useState({
    title: "",
    reportType: "",
    state: "",
    lga: "",
    dateFrom: "",
    dateTo: "",
    summary: "",
    details: "",
    copiesDistributed: "",
    peopleReached: "",
    communities: "",
    challenges: "",
    recommendations: "",
    externalLink: "",
  })
  const [files, setFiles] = useState<File[]>([])
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.title || !formData.reportType || !formData.state) {
      toast({
        title: "Missing Required Fields",
        description: "Please fill in all required fields marked with *",
        variant: "destructive",
      })
      return
    }

    toast({
      title: "Report Uploaded Successfully!",
      description: "Your distribution report has been submitted and will be reviewed by our team.",
    })

    // Reset form
    setFormData({
      title: "",
      reportType: "",
      state: "",
      lga: "",
      dateFrom: "",
      dateTo: "",
      summary: "",
      details: "",
      copiesDistributed: "",
      peopleReached: "",
      communities: "",
      challenges: "",
      recommendations: "",
      externalLink: "",
    })
    setFiles([])
  }

  return (
    <div className="max-w-4xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Distribution Report Submission</CardTitle>
          <CardDescription>
            Provide detailed information about your campaign distribution activities and impact.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Basic Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Basic Information</h3>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Report Title *</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    placeholder="Enter report title"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="reportType">Report Type *</Label>
                  <Select
                    value={formData.reportType}
                    onValueChange={(value) => setFormData({ ...formData, reportType: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select report type" />
                    </SelectTrigger>
                    <SelectContent>
                      {reportTypes.map((type) => (
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
                  <Label htmlFor="state">State *</Label>
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
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="dateFrom">Campaign Start Date</Label>
                  <Input
                    id="dateFrom"
                    type="date"
                    value={formData.dateFrom}
                    onChange={(e) => setFormData({ ...formData, dateFrom: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dateTo">Campaign End Date</Label>
                  <Input
                    id="dateTo"
                    type="date"
                    value={formData.dateTo}
                    onChange={(e) => setFormData({ ...formData, dateTo: e.target.value })}
                  />
                </div>
              </div>
            </div>

            {/* Campaign Details */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Campaign Details</h3>

              <div className="space-y-2">
                <Label htmlFor="summary">Executive Summary</Label>
                <Textarea
                  id="summary"
                  value={formData.summary}
                  onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
                  placeholder="Provide a brief summary of your campaign activities..."
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="details">Detailed Report</Label>
                <Textarea
                  id="details"
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  placeholder="Provide detailed information about your campaign activities, methods used, locations visited, etc..."
                  rows={5}
                />
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="copiesDistributed">Copies Distributed</Label>
                  <Input
                    id="copiesDistributed"
                    type="number"
                    value={formData.copiesDistributed}
                    onChange={(e) => setFormData({ ...formData, copiesDistributed: e.target.value })}
                    placeholder="0"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="peopleReached">People Reached</Label>
                  <Input
                    id="peopleReached"
                    type="number"
                    value={formData.peopleReached}
                    onChange={(e) => setFormData({ ...formData, peopleReached: e.target.value })}
                    placeholder="0"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="communities">Communities Visited</Label>
                  <Input
                    id="communities"
                    type="number"
                    value={formData.communities}
                    onChange={(e) => setFormData({ ...formData, communities: e.target.value })}
                    placeholder="0"
                  />
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Additional Information</h3>

              <div className="space-y-2">
                <Label htmlFor="challenges">Challenges Encountered</Label>
                <Textarea
                  id="challenges"
                  value={formData.challenges}
                  onChange={(e) => setFormData({ ...formData, challenges: e.target.value })}
                  placeholder="Describe any challenges faced during the campaign..."
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="recommendations">Recommendations</Label>
                <Textarea
                  id="recommendations"
                  value={formData.recommendations}
                  onChange={(e) => setFormData({ ...formData, recommendations: e.target.value })}
                  placeholder="Share recommendations for future campaigns..."
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="externalLink">External Link (Optional)</Label>
                <Input
                  id="externalLink"
                  type="url"
                  value={formData.externalLink}
                  onChange={(e) => setFormData({ ...formData, externalLink: e.target.value })}
                  placeholder="https://example.com/additional-report"
                />
              </div>
            </div>

            {/* File Upload */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Upload Files</h3>
              <FileUpload
                files={files}
                onFilesChange={setFiles}
                acceptedTypes={[".pdf", ".doc", ".docx"]}
                maxSize={50 * 1024 * 1024} // 50MB
                multiple={true}
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button type="submit" className="bg-primary hover:bg-primary/90 flex-1">
                Submit Report
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
