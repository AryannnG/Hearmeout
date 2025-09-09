"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MessageSquare, TrendingUp, Users } from "lucide-react"
import Link from "next/link"

const forumStats = {
  totalDiscussions: 47,
  activeToday: 12,
  needingAttention: 3,
}

const recentDiscussions = [
  { id: "1", title: "Student struggling with exam anxiety", replies: 8, priority: "high" },
  { id: "2", title: "Group therapy session feedback", replies: 15, priority: "medium" },
  { id: "3", title: "Resources for depression support", replies: 23, priority: "low" },
]

export function CounsellorForums() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-heading text-xl flex items-center gap-2">
          <MessageSquare className="h-5 w-5" />
          Community Forums
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Forum Stats */}
        <div className="grid grid-cols-3 gap-2 text-center">
          <div className="p-2 bg-muted rounded">
            <div className="font-bold text-lg">{forumStats.totalDiscussions}</div>
            <div className="text-xs text-muted-foreground">Total</div>
          </div>
          <div className="p-2 bg-muted rounded">
            <div className="font-bold text-lg">{forumStats.activeToday}</div>
            <div className="text-xs text-muted-foreground">Active Today</div>
          </div>
          <div className="p-2 bg-muted rounded">
            <div className="font-bold text-lg text-orange-600">{forumStats.needingAttention}</div>
            <div className="text-xs text-muted-foreground">Need Attention</div>
          </div>
        </div>

        {/* Recent Discussions */}
        <div>
          <h4 className="font-medium mb-2 flex items-center gap-2">
            <TrendingUp className="h-4 w-4" />
            Recent Discussions
          </h4>
          <div className="space-y-2">
            {recentDiscussions.map((discussion) => (
              <div key={discussion.id} className="p-2 bg-muted rounded text-sm">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="font-medium">{discussion.title}</div>
                    <div className="text-xs text-muted-foreground">{discussion.replies} replies</div>
                  </div>
                  <Badge variant={discussion.priority === "high" ? "destructive" : "secondary"} className="text-xs">
                    {discussion.priority}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Link href="/forums">
          <Button className="w-full">
            <Users className="h-4 w-4 mr-2" />
            Manage Forums
          </Button>
        </Link>
      </CardContent>
    </Card>
  )
}
