"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { MessageSquare, TrendingUp, Users } from "lucide-react"
import Link from "next/link"

const featuredDiscussions = [
  { id: "1", title: "Managing Exam Stress", replies: 23, category: "Academic" },
  { id: "2", title: "Building Healthy Habits", replies: 15, category: "Wellness" },
  { id: "3", title: "Social Anxiety Tips", replies: 31, category: "Mental Health" },
]

const activeTopics = [
  "Study-Life Balance",
  "Mindfulness Techniques",
  "Peer Support",
  "Sleep Hygiene",
  "Relationship Issues",
]

export function ForumsCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-heading text-2xl flex items-center gap-2">
          <MessageSquare className="h-5 w-5" />
          Community Forums
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Featured Discussions */}
        <div>
          <h4 className="font-medium mb-3 flex items-center gap-2">
            <TrendingUp className="h-4 w-4" />
            Featured Discussions
          </h4>
          <div className="space-y-2">
            {featuredDiscussions.map((discussion) => (
              <div key={discussion.id} className="p-3 bg-muted rounded-lg">
                <div className="flex items-start justify-between">
                  <div>
                    <h5 className="font-medium text-sm">{discussion.title}</h5>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant="secondary" className="text-xs">
                        {discussion.category}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{discussion.replies} replies</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Active Topics */}
        <div>
          <h4 className="font-medium mb-3 flex items-center gap-2">
            <Users className="h-4 w-4" />
            Active Topics
          </h4>
          <div className="flex flex-wrap gap-2">
            {activeTopics.map((topic) => (
              <Badge key={topic} variant="outline" className="text-xs">
                {topic}
              </Badge>
            ))}
          </div>
        </div>

        {/* Suggestion Box */}
        <div>
          <label className="text-sm font-medium mb-2 block">Suggest a Topic</label>
          <Textarea placeholder="What would you like to discuss with the community?" rows={2} />
        </div>

        {/* Go to Forums Button */}
        <Link href="/forums">
          <Button className="w-full">Visit Forums</Button>
        </Link>
      </CardContent>
    </Card>
  )
}
