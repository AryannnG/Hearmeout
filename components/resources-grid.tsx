"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Video, BookOpen, ExternalLink } from "lucide-react"

const videoResources = [
  { id: "1", title: "5-Minute Breathing Exercise", duration: "5 min", category: "Relaxation" },
  { id: "2", title: "Managing Anxiety Techniques", duration: "12 min", category: "Coping Skills" },
  { id: "3", title: "Sleep Better Tonight", duration: "8 min", category: "Sleep" },
]

const bookResources = [
  { id: "1", title: "The Anxiety Toolkit", author: "Alice Boyes", category: "Self-Help" },
  { id: "2", title: "Mindfulness for Students", author: "Sarah Chen", category: "Mindfulness" },
  { id: "3", title: "Building Resilience", author: "Dr. Maria Rodriguez", category: "Personal Growth" },
]

export function ResourcesGrid() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {/* Video Resources */}
      <Card>
        <CardHeader>
          <CardTitle className="font-heading text-xl flex items-center gap-2">
            <Video className="h-5 w-5" />
            Helpful Videos
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {videoResources.map((video) => (
            <div key={video.id} className="flex items-center justify-between p-3 bg-muted rounded-lg">
              <div>
                <h4 className="font-medium text-sm">{video.title}</h4>
                <div className="flex items-center gap-2 mt-1">
                  <Badge variant="secondary" className="text-xs">
                    {video.category}
                  </Badge>
                  <span className="text-xs text-muted-foreground">{video.duration}</span>
                </div>
              </div>
              <Button size="sm" variant="ghost">
                <ExternalLink className="h-3 w-3" />
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Book Resources */}
      <Card>
        <CardHeader>
          <CardTitle className="font-heading text-xl flex items-center gap-2">
            <BookOpen className="h-5 w-5" />
            Recommended Books
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {bookResources.map((book) => (
            <div key={book.id} className="flex items-center justify-between p-3 bg-muted rounded-lg">
              <div>
                <h4 className="font-medium text-sm">{book.title}</h4>
                <div className="flex items-center gap-2 mt-1">
                  <Badge variant="secondary" className="text-xs">
                    {book.category}
                  </Badge>
                  <span className="text-xs text-muted-foreground">by {book.author}</span>
                </div>
              </div>
              <Button size="sm" variant="ghost">
                <ExternalLink className="h-3 w-3" />
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
