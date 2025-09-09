"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Upload, Link, CheckCircle, Trash2 } from "lucide-react"

interface Resource {
  id: string
  title: string
  description: string
  category: string
  type: "link" | "document" | "video"
  url: string
  uploadDate: string
  status: "active" | "pending" | "archived"
}

const existingResources: Resource[] = [
  {
    id: "1",
    title: "Mindfulness Meditation Guide",
    description: "Comprehensive guide to mindfulness practices for students",
    category: "meditation",
    type: "document",
    url: "https://example.com/mindfulness-guide.pdf",
    uploadDate: "Dec 10, 2024",
    status: "active",
  },
  {
    id: "2",
    title: "Anxiety Management Techniques",
    description: "Video series on managing anxiety and stress",
    category: "anxiety",
    type: "video",
    url: "https://example.com/anxiety-videos",
    uploadDate: "Dec 8, 2024",
    status: "active",
  },
  {
    id: "3",
    title: "Study-Life Balance Tips",
    description: "Article on maintaining healthy study habits",
    category: "academic",
    type: "link",
    url: "https://example.com/study-balance",
    uploadDate: "Dec 5, 2024",
    status: "pending",
  },
]

const resourceCategories = [
  { value: "meditation", label: "Meditation & Mindfulness" },
  { value: "anxiety", label: "Anxiety & Stress" },
  { value: "depression", label: "Depression Support" },
  { value: "academic", label: "Academic Support" },
  { value: "relationships", label: "Relationships" },
  { value: "self-care", label: "Self-Care" },
  { value: "crisis", label: "Crisis Resources" },
]

const resourceTypes = [
  { value: "link", label: "Web Link" },
  { value: "document", label: "Document/PDF" },
  { value: "video", label: "Video" },
]

export function ResourceUpload() {
  const [resources, setResources] = useState<Resource[]>(existingResources)
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState("")
  const [type, setType] = useState("")
  const [url, setUrl] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async () => {
    if (!title.trim() || !description.trim() || !category || !type || !url.trim()) return

    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const newResource: Resource = {
      id: Date.now().toString(),
      title,
      description,
      category,
      type: type as "link" | "document" | "video",
      url,
      uploadDate: new Date().toLocaleDateString(),
      status: "pending",
    }

    setResources((prev) => [newResource, ...prev])
    setIsSubmitting(false)
    setSubmitted(true)

    // Reset form
    setTimeout(() => {
      setTitle("")
      setDescription("")
      setCategory("")
      setType("")
      setUrl("")
      setSubmitted(false)
    }, 2000)
  }

  const handleDelete = (id: string) => {
    setResources((prev) => prev.filter((resource) => resource.id !== id))
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-700"
      case "pending":
        return "bg-yellow-100 text-yellow-700"
      case "archived":
        return "bg-gray-100 text-gray-700"
      default:
        return "bg-gray-100 text-gray-700"
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "link":
        return <Link className="h-3 w-3" />
      case "document":
        return <BookOpen className="h-3 w-3" />
      case "video":
        return <Upload className="h-3 w-3" />
      default:
        return <BookOpen className="h-3 w-3" />
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-heading text-2xl flex items-center gap-2">
          <BookOpen className="h-5 w-5" />
          Resource Management
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Upload New Resource */}
        <div className="space-y-4 p-4 border rounded-lg">
          <h4 className="font-medium">Add New Resource</h4>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium mb-1 block">Title</label>
              <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Resource title" />
            </div>

            <div>
              <label className="text-sm font-medium mb-1 block">URL/Link</label>
              <Input value={url} onChange={(e) => setUrl(e.target.value)} placeholder="https://example.com/resource" />
            </div>

            <div>
              <label className="text-sm font-medium mb-1 block">Category</label>
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {resourceCategories.map((cat) => (
                    <SelectItem key={cat.value} value={cat.value}>
                      {cat.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium mb-1 block">Type</label>
              <Select value={type} onValueChange={setType}>
                <SelectTrigger>
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  {resourceTypes.map((type) => (
                    <SelectItem key={type.value} value={type.value}>
                      {type.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <label className="text-sm font-medium mb-1 block">Description</label>
            <Textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe the resource and how it can help students..."
              rows={3}
            />
          </div>

          <Button
            onClick={handleSubmit}
            disabled={!title.trim() || !description.trim() || !category || !type || !url.trim() || isSubmitting}
            className="w-full"
          >
            {submitted ? (
              <>
                <CheckCircle className="h-4 w-4 mr-2" />
                Resource Added!
              </>
            ) : isSubmitting ? (
              "Adding Resource..."
            ) : (
              <>
                <Upload className="h-4 w-4 mr-2" />
                Add Resource
              </>
            )}
          </Button>
        </div>

        {/* Existing Resources */}
        <div>
          <h4 className="font-medium mb-3">Existing Resources ({resources.length})</h4>
          <div className="space-y-2 max-h-64 overflow-y-auto">
            {resources.map((resource) => (
              <div key={resource.id} className="p-3 border rounded-lg">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      {getTypeIcon(resource.type)}
                      <h5 className="font-medium text-sm">{resource.title}</h5>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">{resource.description}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <Badge variant="outline" className="text-xs">
                        {resourceCategories.find((cat) => cat.value === resource.category)?.label}
                      </Badge>
                      <Badge className={getStatusColor(resource.status)}>{resource.status}</Badge>
                      <span className="text-xs text-muted-foreground">{resource.uploadDate}</span>
                    </div>
                  </div>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => handleDelete(resource.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash2 className="h-3 w-3" />
                  </Button>
                </div>
                <div className="text-xs text-muted-foreground truncate">
                  <Link className="h-3 w-3 inline mr-1" />
                  {resource.url}
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
