"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MessageSquare, Users, TrendingUp, Plus } from "lucide-react"
import Link from "next/link"

const forumActivity = {
  postsToday: 8,
  repliesGiven: 23,
  helpfulVotes: 15,
}

const activeDiscussions = [
  {
    id: "1",
    title: "First week at university - feeling overwhelmed",
    author: "Anonymous Student",
    replies: 12,
    lastActivity: "2 hours ago",
    needsSupport: true,
  },
  {
    id: "2",
    title: "Study group for anxiety management techniques",
    author: "Sarah M.",
    replies: 8,
    lastActivity: "4 hours ago",
    needsSupport: false,
  },
  {
    id: "3",
    title: "Dealing with homesickness",
    author: "Anonymous Student",
    replies: 15,
    lastActivity: "6 hours ago",
    needsSupport: true,
  },
]

const suggestedTopics = ["Peer Support Circle", "Study Tips Exchange", "Mindfulness Monday", "Weekend Check-in"]

export function VolunteerForums() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-heading text-2xl flex items-center gap-2">
          <MessageSquare className="h-5 w-5" />
          Community Forums
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Activity Stats */}
        <div className="grid grid-cols-3 gap-3">
          <div className="text-center p-3 bg-muted rounded-lg">
            <div className="font-bold text-lg text-primary">{forumActivity.postsToday}</div>
            <div className="text-xs text-muted-foreground">Posts Today</div>
          </div>
          <div className="text-center p-3 bg-muted rounded-lg">
            <div className="font-bold text-lg text-primary">{forumActivity.repliesGiven}</div>
            <div className="text-xs text-muted-foreground">Your Replies</div>
          </div>
          <div className="text-center p-3 bg-muted rounded-lg">
            <div className="font-bold text-lg text-primary">{forumActivity.helpfulVotes}</div>
            <div className="text-xs text-muted-foreground">Helpful Votes</div>
          </div>
        </div>

        {/* Active Discussions */}
        <div>
          <h4 className="font-medium mb-3 flex items-center gap-2">
            <TrendingUp className="h-4 w-4" />
            Discussions Needing Support
          </h4>
          <div className="space-y-2">
            {activeDiscussions
              .filter((discussion) => discussion.needsSupport)
              .map((discussion) => (
                <div key={discussion.id} className="p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h5 className="font-medium text-sm">{discussion.title}</h5>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs text-muted-foreground">by {discussion.author}</span>
                        <Badge variant="outline" className="text-xs">
                          {discussion.replies} replies
                        </Badge>
                        <span className="text-xs text-muted-foreground">{discussion.lastActivity}</span>
                      </div>
                    </div>
                    <Badge variant="secondary" className="text-xs bg-orange-100 text-orange-700">
                      Needs Support
                    </Badge>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Suggested Topics */}
        <div>
          <h4 className="font-medium mb-2 flex items-center gap-2">
            <Plus className="h-4 w-4" />
            Suggested Discussion Topics
          </h4>
          <div className="flex flex-wrap gap-2">
            {suggestedTopics.map((topic) => (
              <Badge
                key={topic}
                variant="outline"
                className="text-xs cursor-pointer hover:bg-primary hover:text-primary-foreground"
              >
                {topic}
              </Badge>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <Link href="/forums" className="flex-1">
            <Button className="w-full">
              <Users className="h-4 w-4 mr-2" />
              Visit Forums
            </Button>
          </Link>
          <Button variant="outline" className="flex-1 bg-transparent">
            <Plus className="h-4 w-4 mr-2" />
            Start Discussion
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
