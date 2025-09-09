"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Compass, Wind, BookOpen, Lightbulb, Music } from "lucide-react"

const topics = [
  {
    id: "breathing",
    title: "Breathing Techniques",
    icon: Wind,
    description: "Learn various breathing exercises for relaxation and focus",
    color: "bg-blue-100 text-blue-700",
  },
  {
    id: "books",
    title: "Self-Help Books",
    icon: BookOpen,
    description: "Curated collection of mental health and wellness books",
    color: "bg-green-100 text-green-700",
  },
  {
    id: "techniques",
    title: "Coping Techniques",
    icon: Lightbulb,
    description: "Practical strategies for managing stress and emotions",
    color: "bg-yellow-100 text-yellow-700",
  },
]

export function ExploreTopics() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-heading text-xl flex items-center gap-2">
          <Compass className="h-5 w-5" />
          Explore Topics
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-3">
          {topics.map((topic) => {
            const IconComponent = topic.icon
            return (
              <div key={topic.id} className="p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                <div className="flex items-start gap-3">
                  <div className={`p-2 rounded-full ${topic.color}`}>
                    <IconComponent className="h-4 w-4" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-sm">{topic.title}</h4>
                    <p className="text-xs text-muted-foreground mt-1">{topic.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Music Section */}
        <div className="pt-4 border-t">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Music className="h-4 w-4" />
              <span className="font-medium text-sm">Relaxing Music</span>
            </div>
            <Button size="sm" variant="outline">
              Open Playlist
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-1">
            Curated playlists for relaxation, focus, and mood enhancement
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
