"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { User, Calendar, Star } from "lucide-react"
import Link from "next/link"

const profileStats = {
  totalSessions: 127,
  activeStudents: 23,
  avgRating: 4.8,
  monthlyHours: 45,
}

const specializations = ["Anxiety Disorders", "Depression", "Academic Stress", "Crisis Intervention"]

const recentAchievements = [
  { id: "1", title: "100+ Sessions Completed", date: "Dec 2024" },
  { id: "2", title: "Excellence in Student Care", date: "Nov 2024" },
  { id: "3", title: "Crisis Intervention Certified", date: "Oct 2024" },
]

export function CounsellorProfile() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-heading text-2xl flex items-center gap-2">
          <User className="h-5 w-5" />
          Professional Profile
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Profile Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-3 bg-muted rounded-lg">
            <div className="font-bold text-2xl text-primary">{profileStats.totalSessions}</div>
            <div className="text-xs text-muted-foreground">Total Sessions</div>
          </div>
          <div className="text-center p-3 bg-muted rounded-lg">
            <div className="font-bold text-2xl text-primary">{profileStats.activeStudents}</div>
            <div className="text-xs text-muted-foreground">Active Students</div>
          </div>
          <div className="text-center p-3 bg-muted rounded-lg">
            <div className="font-bold text-2xl text-primary flex items-center justify-center gap-1">
              <Star className="h-4 w-4 fill-current" />
              {profileStats.avgRating}
            </div>
            <div className="text-xs text-muted-foreground">Avg Rating</div>
          </div>
          <div className="text-center p-3 bg-muted rounded-lg">
            <div className="font-bold text-2xl text-primary">{profileStats.monthlyHours}h</div>
            <div className="text-xs text-muted-foreground">This Month</div>
          </div>
        </div>

        {/* Specializations */}
        <div>
          <h4 className="font-medium mb-3">Specializations</h4>
          <div className="flex flex-wrap gap-2">
            {specializations.map((spec) => (
              <Badge key={spec} variant="secondary">
                {spec}
              </Badge>
            ))}
          </div>
        </div>

        {/* Recent Achievements */}
        <div>
          <h4 className="font-medium mb-3">Recent Achievements</h4>
          <div className="space-y-2">
            {recentAchievements.map((achievement) => (
              <div key={achievement.id} className="flex items-center justify-between p-2 bg-muted rounded">
                <div>
                  <div className="font-medium text-sm">{achievement.title}</div>
                  <div className="text-xs text-muted-foreground">{achievement.date}</div>
                </div>
                <Star className="h-4 w-4 text-yellow-500 fill-current" />
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="flex gap-2">
          <Link href="/counsellor-profile" className="flex-1">
            <Button variant="outline" className="w-full bg-transparent">
              <User className="h-4 w-4 mr-2" />
              Edit Profile
            </Button>
          </Link>
          <Button variant="outline" className="flex-1 bg-transparent">
            <Calendar className="h-4 w-4 mr-2" />
            Schedule Settings
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
