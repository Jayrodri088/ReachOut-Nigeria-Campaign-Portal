"use client"

import type React from "react"

import { useState, useCallback } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { X, Upload, ImageIcon, Video } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface FileUploadProps {
  files: File[]
  onFilesChange: (files: File[]) => void
  acceptedTypes?: string[]
  maxSize?: number
  multiple?: boolean
  className?: string
}

export function FileUpload({
  files,
  onFilesChange,
  acceptedTypes = [".pdf", ".doc", ".docx", ".jpg", ".jpeg", ".png", ".mp4", ".mov"],
  maxSize = 50 * 1024 * 1024, // 50MB
  multiple = true,
  className = "",
}: FileUploadProps) {
  const [dragActive, setDragActive] = useState(false)
  const [uploadProgress, setUploadProgress] = useState<{ [key: string]: number }>({})
  const { toast } = useToast()

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const sizes = ["Bytes", "KB", "MB", "GB"]
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
  }

  const getFileIcon = (file: File) => {
    if (file.type.startsWith("image/")) return <ImageIcon className="h-4 w-4" />
    if (file.type.startsWith("video/")) return <Video className="h-4 w-4" />
    return <Upload className="h-4 w-4" />
  }

  const validateFile = (file: File) => {
    if (file.size > maxSize) {
      toast({
        title: "File too large",
        description: `${file.name} is larger than ${formatFileSize(maxSize)}`,
        variant: "destructive",
      })
      return false
    }

    const fileExtension = "." + file.name.split(".").pop()?.toLowerCase()
    if (acceptedTypes.length > 0 && !acceptedTypes.includes(fileExtension)) {
      toast({
        title: "Invalid file type",
        description: `${file.name} is not a supported file type`,
        variant: "destructive",
      })
      return false
    }

    return true
  }

  const handleFiles = useCallback(
    (newFiles: FileList | null) => {
      if (!newFiles) return

      const validFiles: File[] = []
      Array.from(newFiles).forEach((file) => {
        if (validateFile(file)) {
          validFiles.push(file)
        }
      })

      if (validFiles.length > 0) {
        const updatedFiles = multiple ? [...files, ...validFiles] : validFiles
        onFilesChange(updatedFiles)

        // Simulate upload progress
        validFiles.forEach((file) => {
          const fileId = file.name + file.size
          let progress = 0
          const interval = setInterval(() => {
            progress += Math.random() * 30
            if (progress >= 100) {
              progress = 100
              clearInterval(interval)
              setTimeout(() => {
                setUploadProgress((prev) => {
                  const newProgress = { ...prev }
                  delete newProgress[fileId]
                  return newProgress
                })
              }, 1000)
            }
            setUploadProgress((prev) => ({ ...prev, [fileId]: progress }))
          }, 200)
        })

        toast({
          title: "Files uploaded successfully",
          description: `${validFiles.length} file(s) have been uploaded`,
        })
      }
    },
    [files, multiple, onFilesChange, maxSize, acceptedTypes, toast],
  )

  const removeFile = (index: number) => {
    const newFiles = files.filter((_, i) => i !== index)
    onFilesChange(newFiles)
  }

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }, [])

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault()
      e.stopPropagation()
      setDragActive(false)
      handleFiles(e.dataTransfer.files)
    },
    [handleFiles],
  )

  return (
    <div className={`space-y-4 ${className}`}>
      <Card
        className={`border-2 border-dashed transition-colors ${
          dragActive ? "border-primary bg-primary/5" : "border-muted-foreground/25 hover:border-primary/50"
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <CardContent className="p-8 text-center">
          <div className="space-y-4">
            <div className="mx-auto h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Upload className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">Upload Files</h3>
              <p className="text-muted-foreground">Drag and drop files here, or click to browse</p>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {acceptedTypes.map((type) => (
                <Badge key={type} variant="secondary" className="text-xs">
                  {type.toUpperCase()}
                </Badge>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">Maximum file size: {formatFileSize(maxSize)}</p>
            <Button
              type="button"
              variant="outline"
              onClick={() => {
                const input = document.createElement("input")
                input.type = "file"
                input.multiple = multiple
                input.accept = acceptedTypes.join(",")
                input.onchange = (e) => {
                  const target = e.target as HTMLInputElement
                  handleFiles(target.files)
                }
                input.click()
              }}
            >
              Browse Files
            </Button>
          </div>
        </CardContent>
      </Card>

      {files.length > 0 && (
        <div className="space-y-2">
          <h4 className="font-medium text-foreground">Uploaded Files ({files.length})</h4>
          <div className="space-y-2">
            {files.map((file, index) => {
              const fileId = file.name + file.size
              const progress = uploadProgress[fileId]
              return (
                <Card key={index} className="p-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 flex-1 min-w-0">
                      {getFileIcon(file)}
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-foreground truncate">{file.name}</p>
                        <p className="text-xs text-muted-foreground">{formatFileSize(file.size)}</p>
                        {progress !== undefined && progress < 100 && (
                          <div className="mt-1">
                            <Progress value={progress} className="h-1" />
                            <p className="text-xs text-muted-foreground mt-1">{Math.round(progress)}% uploaded</p>
                          </div>
                        )}
                      </div>
                    </div>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => removeFile(index)}
                      className="text-muted-foreground hover:text-destructive"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}
