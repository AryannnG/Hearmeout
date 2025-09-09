"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Brain, Clock } from "lucide-react"
import Link from "next/link"

const meditationResources = [
  { id: "1", title: "Morning Mindfulness", duration: "10 min", difficulty: "Beginner" },
  { id: "2", title: "Stress Relief Session", duration: "15 min", difficulty: "Intermediate" },
  { id: "3", title: "Deep Relaxation", duration: "20 min", difficulty: "Advanced" },
]

export function MeditationCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-heading text-xl flex items-center gap-2">
          <Brain className="h-5 w-5" />
          Meditation & Mindfulness
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">
          Discover guided meditations and mindfulness exercises to help you find peace and clarity.
        </p>

        <div className="space-y-2">
          {meditationResources.map((resource) => (
            <div key={resource.id} className="flex items-center justify-between p-2 bg-muted rounded">
              <div>
                <div className="font-medium text-sm">{resource.title}</div>
                <div className="flex items-center gap-2 mt-1">
                  <Badge variant="outline" className="text-xs">
                    {resource.difficulty}
                  </Badge>
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {resource.duration}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Link href="/meditation">
          <Button className="w-full">Explore All Meditations</Button>
        </Link>
      </CardContent>
    </Card>
  )
}
