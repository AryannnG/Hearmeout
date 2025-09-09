"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MessageSquare, Star, AlertTriangle, Eye } from "lucide-react"

interface FeedbackEntry {
  id: string
  studentName: string
  counsellorName: string
  rating: number
  feedback: string
  date: string
  category: "positive" | "neutral" | "concern"
  sessionType: string
}

const feedbackEntries: FeedbackEntry[] = [
  {
    id: "1",
    studentName: "Anonymous Student",
    counsellorName: "Dr. Sarah Johnson",
    rating: 5,
    feedback:
      "Dr. Johnson was incredibly helpful and understanding. She provided practical strategies that really work.",
    date: "Dec 12, 2024",
    category: "positive",
    sessionType: "Individual Therapy",
  },
  {
    id: "2",
    studentName: "John D.",
    counsellorName: "Dr. Michael Chen",
    rating: 4,
    feedback: "Good session overall, but would like more specific homework assignments for managing stress.",
    date: "Dec 11, 2024",
    category: "neutral",
    sessionType: "Stress Management",
  },
  {
    id: "3",
    studentName: "Anonymous Student",
    counsellorName: "Dr. Emily Rodriguez",
    rating: 2,
    feedback: "Felt rushed during the session. Would appreciate more time to discuss my concerns thoroughly.",
    date: "Dec 10, 2024",
    category: "concern",
    sessionType: "Crisis Support",
  },
  {
    id: "4",
    studentName: "Sarah M.",
    counsellorName: "Dr. Sarah Johnson",
    rating: 5,
    feedback: "Excellent support during a difficult time. Dr. Johnson's approach is very effective.",
    date: "Dec 9, 2024",
    category: "positive",
    sessionType: "Anxiety Treatment",
  },
]

export function CounsellorFeedback() {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "positive":
        return "bg-green-100 text-green-700"
      case "concern":
        return "bg-red-100 text-red-700"
      case "neutral":
        return "bg-yellow-100 text-yellow-700"
      default:
        return "bg-gray-100 text-gray-700"
    }
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "concern":
        return <AlertTriangle className="h-3 w-3" />
      default:
        return <MessageSquare className="h-3 w-3" />
    }
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className={`h-3 w-3 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
    ))
  }

  const concernFeedback = feedbackEntries.filter((entry) => entry.category === "concern")
  const recentFeedback = feedbackEntries.slice(0, 4)

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-heading text-2xl flex items-center gap-2">
          <MessageSquare className="h-5 w-5" />
          Counsellor Feedback
          {concernFeedback.length > 0 && (
            <Badge variant="destructive" className="ml-2">
              {concernFeedback.length} concerns
            </Badge>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Feedback Requiring Attention */}
        {concernFeedback.length > 0 && (
          <div>
            <h4 className="font-medium mb-3 text-sm flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-red-500" />
              Feedback Requiring Attention
            </h4>
            <div className="space-y-2">
              {concernFeedback.map((entry) => (
                <div key={entry.id} className="p-3 border border-red-200 rounded-lg bg-red-50">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <div className="font-medium text-sm">{entry.counsellorName}</div>
                      <div className="text-xs text-muted-foreground">
                        Session with {entry.studentName} - {entry.sessionType}
                      </div>
                      <div className="flex items-center gap-1 mt-1">{renderStars(entry.rating)}</div>
                    </div>
                    <Badge className={getCategoryColor(entry.category)}>
                      {getCategoryIcon(entry.category)}
                      {entry.category}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{entry.feedback}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{entry.date}</span>
                    <Button size="sm" variant="outline" className="bg-transparent">
                      <Eye className="h-3 w-3 mr-1" />
                      Review
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Recent Feedback */}
        <div>
          <h4 className="font-medium mb-3 text-sm">Recent Feedback</h4>
          <div className="space-y-2">
            {recentFeedback.map((entry) => (
              <div key={entry.id} className="p-3 bg-muted rounded-lg">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <div className="font-medium text-sm">{entry.counsellorName}</div>
                    <div className="text-xs text-muted-foreground">
                      {entry.studentName} - {entry.sessionType}
                    </div>
                    <div className="flex items-center gap-1 mt-1">{renderStars(entry.rating)}</div>
                  </div>
                  <Badge className={getCategoryColor(entry.category)}>
                    {getCategoryIcon(entry.category)}
                    {entry.category}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-2 line-clamp-2">{entry.feedback}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{entry.date}</span>
                  <Button size="sm" variant="ghost">
                    <Eye className="h-3 w-3 mr-1" />
                    View
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-3 gap-3 pt-4 border-t">
          <div className="text-center">
            <div className="font-bold text-lg text-green-600">
              {feedbackEntries.filter((f) => f.category === "positive").length}
            </div>
            <div className="text-xs text-muted-foreground">Positive</div>
          </div>
          <div className="text-center">
            <div className="font-bold text-lg text-yellow-600">
              {feedbackEntries.filter((f) => f.category === "neutral").length}
            </div>
            <div className="text-xs text-muted-foreground">Neutral</div>
          </div>
          <div className="text-center">
            <div className="font-bold text-lg text-red-600">
              {feedbackEntries.filter((f) => f.category === "concern").length}
            </div>
            <div className="text-xs text-muted-foreground">Concerns</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
