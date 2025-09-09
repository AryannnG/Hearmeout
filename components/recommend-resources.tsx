"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Send, CheckCircle } from "lucide-react"

const resourceCategories = [
  { value: "books", label: "Books" },
  { value: "videos", label: "Videos" },
  { value: "articles", label: "Articles" },
  { value: "exercises", label: "Exercises" },
  { value: "apps", label: "Apps" },
]

const recentRecommendations = [
  { id: "1", category: "books", title: "The Anxiety Toolkit", student: "Sarah M.", date: "Dec 10" },
  { id: "2", category: "videos", title: "Mindfulness Meditation", student: "John D.", date: "Dec 8" },
]

export function RecommendResources() {
  const [recommendation, setRecommendation] = useState("")
  const [category, setCategory] = useState("")
  const [targetStudent, setTargetStudent] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async () => {
    if (!recommendation.trim() || !category) return

    setIsSubmitting(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setSubmitted(true)

    // Reset form after success
    setTimeout(() => {
      setRecommendation("")
      setCategory("")
      setTargetStudent("")
      setSubmitted(false)
    }, 2000)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-heading text-xl flex items-center gap-2">
          <BookOpen className="h-5 w-5" />
          Recommend Resources
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Recent Recommendations */}
        <div>
          <h4 className="font-medium mb-2 text-sm">Recent Recommendations</h4>
          <div className="space-y-1">
            {recentRecommendations.map((rec) => (
              <div key={rec.id} className="p-2 bg-muted rounded text-xs">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">{rec.title}</div>
                    <div className="text-muted-foreground">to {rec.student}</div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Badge variant="outline" className="text-xs">
                      {rec.category}
                    </Badge>
                    <span className="text-muted-foreground">{rec.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* New Recommendation Form */}
        <div className="space-y-3">
          <div>
            <label className="text-sm font-medium mb-1 block">Category</label>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="h-8">
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
            <label className="text-sm font-medium mb-1 block">Target Student (Optional)</label>
            <Select value={targetStudent} onValueChange={setTargetStudent}>
              <SelectTrigger className="h-8">
                <SelectValue placeholder="Select student or leave blank for general" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sarah">Sarah Mitchell</SelectItem>
                <SelectItem value="john">John Davis</SelectItem>
                <SelectItem value="emma">Emma Lopez</SelectItem>
                <SelectItem value="michael">Michael Roberts</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-sm font-medium mb-1 block">Resource Details</label>
            <Textarea
              value={recommendation}
              onChange={(e) => setRecommendation(e.target.value)}
              placeholder="Describe the resource, include links, and explain why it would be helpful..."
              rows={3}
            />
          </div>

          <Button
            onClick={handleSubmit}
            disabled={!recommendation.trim() || !category || isSubmitting}
            className="w-full"
          >
            {submitted ? (
              <>
                <CheckCircle className="h-4 w-4 mr-2" />
                Sent!
              </>
            ) : isSubmitting ? (
              "Sending..."
            ) : (
              <>
                <Send className="h-4 w-4 mr-2" />
                Send Recommendation
              </>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
