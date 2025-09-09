"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, UserCheck, MessageSquare, BookOpen, TrendingUp, AlertTriangle } from "lucide-react"

const platformStats = {
  totalUsers: 1247,
  activeToday: 89,
  pendingApprovals: 7,
  totalSessions: 342,
  forumPosts: 1856,
  resources: 127,
}

const recentActivity = [
  { type: "approval", message: "3 new counsellor applications", time: "2 hours ago" },
  { type: "feedback", message: "New feedback submitted", time: "4 hours ago" },
  { type: "enrollment", message: "12 students enrolled today", time: "6 hours ago" },
]

export function AdminStats() {
  return (
    <div className="space-y-6 mb-8">
      {/* Main Stats Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <Users className="h-5 w-5 text-primary mr-2" />
              <span className="font-bold text-2xl text-primary">{platformStats.totalUsers}</span>
            </div>
            <div className="text-sm text-muted-foreground">Total Users</div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <UserCheck className="h-5 w-5 text-green-600 mr-2" />
              <span className="font-bold text-2xl text-green-600">{platformStats.activeToday}</span>
            </div>
            <div className="text-sm text-muted-foreground">Active Today</div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <AlertTriangle className="h-5 w-5 text-orange-600 mr-2" />
              <span className="font-bold text-2xl text-orange-600">{platformStats.pendingApprovals}</span>
            </div>
            <div className="text-sm text-muted-foreground">Pending Approvals</div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <TrendingUp className="h-5 w-5 text-primary mr-2" />
              <span className="font-bold text-2xl text-primary">{platformStats.totalSessions}</span>
            </div>
            <div className="text-sm text-muted-foreground">Total Sessions</div>
          </CardContent>
        </Card>
      </div>

      {/* Secondary Stats */}
      <div className="grid md:grid-cols-2 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-primary" />
                <span className="font-medium">Forum Activity</span>
              </div>
              <span className="font-bold text-xl text-primary">{platformStats.forumPosts}</span>
            </div>
            <div className="text-sm text-muted-foreground mt-1">Total forum posts</div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                <span className="font-medium">Resources</span>
              </div>
              <span className="font-bold text-xl text-primary">{platformStats.resources}</span>
            </div>
            <div className="text-sm text-muted-foreground mt-1">Available resources</div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle className="font-heading text-xl">Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-center justify-between p-2 bg-muted rounded">
                <span className="text-sm">{activity.message}</span>
                <span className="text-xs text-muted-foreground">{activity.time}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
