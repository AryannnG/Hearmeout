"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Heart, MessageSquare, Users, Award, Clock } from "lucide-react"

const volunteerStats = {
  totalHours: 47,
  studentsHelped: 23,
  forumPosts: 156,
  helpfulVotes: 89,
  monthlyGoal: 50,
  streak: 12,
}

const recentAchievements = [
  { id: "1", title: "Community Helper", description: "Helped 20+ students this month", icon: Users, date: "Dec 2024" },
  { id: "2", title: "Forum Star", description: "Received 50+ helpful votes", icon: MessageSquare, date: "Nov 2024" },
  { id: "3", title: "Consistent Volunteer", description: "10-day activity streak", icon: Award, date: "Nov 2024" },
]

const impactMetrics = [
  { label: "Students Reached", value: "150+", description: "Through forum interactions" },
  { label: "Response Rate", value: "94%", description: "Average response time: 2 hours" },
  { label: "Satisfaction", value: "4.9/5", description: "From student feedback" },
]

export function VolunteerStats() {
  const progressPercentage = Math.min((volunteerStats.totalHours / volunteerStats.monthlyGoal) * 100, 100)

  return (
    <div className="space-y-6">
      {/* Main Stats Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <Clock className="h-5 w-5 text-primary mr-2" />
              <span className="font-bold text-2xl text-primary">{volunteerStats.totalHours}h</span>
            </div>
            <div className="text-sm text-muted-foreground">Hours This Month</div>
            <div className="w-full bg-muted rounded-full h-2 mt-2">
              <div
                className="bg-primary h-2 rounded-full transition-all duration-300"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
            <div className="text-xs text-muted-foreground mt-1">
              {volunteerStats.monthlyGoal - volunteerStats.totalHours} hours to goal
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <Users className="h-5 w-5 text-primary mr-2" />
              <span className="font-bold text-2xl text-primary">{volunteerStats.studentsHelped}</span>
            </div>
            <div className="text-sm text-muted-foreground">Students Helped</div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <MessageSquare className="h-5 w-5 text-primary mr-2" />
              <span className="font-bold text-2xl text-primary">{volunteerStats.forumPosts}</span>
            </div>
            <div className="text-sm text-muted-foreground">Forum Contributions</div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <Heart className="h-5 w-5 text-primary mr-2" />
              <span className="font-bold text-2xl text-primary">{volunteerStats.helpfulVotes}</span>
            </div>
            <div className="text-sm text-muted-foreground">Helpful Votes</div>
          </CardContent>
        </Card>
      </div>

      {/* Impact and Achievements */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Impact Metrics */}
        <Card>
          <CardHeader>
            <CardTitle className="font-heading text-xl flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Your Impact
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {impactMetrics.map((metric, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <div>
                  <div className="font-medium text-sm">{metric.label}</div>
                  <div className="text-xs text-muted-foreground">{metric.description}</div>
                </div>
                <div className="font-bold text-lg text-primary">{metric.value}</div>
              </div>
            ))}
            <div className="text-center p-3 bg-primary/10 rounded-lg">
              <div className="font-medium text-primary">🔥 {volunteerStats.streak} Day Streak!</div>
              <div className="text-xs text-muted-foreground">Keep up the amazing work!</div>
            </div>
          </CardContent>
        </Card>

        {/* Recent Achievements */}
        <Card>
          <CardHeader>
            <CardTitle className="font-heading text-xl flex items-center gap-2">
              <Award className="h-5 w-5" />
              Recent Achievements
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {recentAchievements.map((achievement) => {
              const IconComponent = achievement.icon
              return (
                <div key={achievement.id} className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                  <div className="p-2 bg-primary/20 rounded-full">
                    <IconComponent className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-sm">{achievement.title}</div>
                    <div className="text-xs text-muted-foreground">{achievement.description}</div>
                    <Badge variant="outline" className="text-xs mt-1">
                      {achievement.date}
                    </Badge>
                  </div>
                </div>
              )
            })}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
