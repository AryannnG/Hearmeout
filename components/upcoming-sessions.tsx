"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Users, FileText, User, ExternalLink } from "lucide-react"

const upcomingSessions = [
  {
    id: "1",
    studentName: "Sarah Mitchell",
    date: "Dec 15, 2024",
    time: "10:00 AM",
    reason: "anxiety",
    status: "confirmed",
    notes: "First session, reported high stress levels",
  },
  {
    id: "2",
    studentName: "John Davis",
    date: "Dec 15, 2024",
    time: "2:00 PM",
    reason: "depression",
    status: "pending",
    notes: "Follow-up session, medication adjustment needed",
  },
  {
    id: "3",
    studentName: "Emma Lopez",
    date: "Dec 16, 2024",
    time: "11:00 AM",
    reason: "academic-stress",
    status: "confirmed",
    notes: "Exam period support, coping strategies",
  },
  {
    id: "4",
    studentName: "Michael Roberts",
    date: "Dec 18, 2024",
    time: "3:00 PM",
    reason: "relationship",
    status: "confirmed",
    notes: "Group session preparation",
  },
]

const reasonOptions = [
  { value: "anxiety", label: "Anxiety" },
  { value: "depression", label: "Depression" },
  { value: "academic-stress", label: "Academic Stress" },
  { value: "relationship", label: "Relationship Issues" },
  { value: "other", label: "Other" },
]

export function UpcomingSessions() {
  const [sessions, setSessions] = useState(upcomingSessions)

  const updateSessionReason = (sessionId: string, newReason: string) => {
    setSessions((prev) =>
      prev.map((session) => (session.id === sessionId ? { ...session, reason: newReason } : session)),
    )
  }

  const getReasonLabel = (reason: string) => {
    return reasonOptions.find((option) => option.value === reason)?.label || reason
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
        return "bg-green-100 text-green-700"
      case "pending":
        return "bg-yellow-100 text-yellow-700"
      default:
        return "bg-gray-100 text-gray-700"
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-heading text-2xl flex items-center gap-2">
          <Users className="h-5 w-5" />
          Upcoming Sessions
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-3">
          {sessions.map((session) => (
            <div key={session.id} className="p-4 border rounded-lg space-y-3">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-medium">{session.studentName}</h4>
                  <p className="text-sm text-muted-foreground">
                    {session.date} at {session.time}
                  </p>
                </div>
                <Badge className={getStatusColor(session.status)}>{session.status}</Badge>
              </div>

              <div className="space-y-2">
                <div>
                  <label className="text-xs font-medium text-muted-foreground">Session Reason</label>
                  <Select value={session.reason} onValueChange={(value) => updateSessionReason(session.id, value)}>
                    <SelectTrigger className="h-8">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {reasonOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-xs font-medium text-muted-foreground">Notes</label>
                  <p className="text-sm p-2 bg-muted rounded">{session.notes}</p>
                </div>

                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex items-center gap-1 bg-transparent">
                    <FileText className="h-3 w-3" />
                    Medical Info
                  </Button>
                  <Button size="sm" variant="outline" className="flex items-center gap-1 bg-transparent">
                    <User className="h-3 w-3" />
                    Personal Info
                  </Button>
                  <Button size="sm" variant="outline" className="flex items-center gap-1 bg-transparent">
                    <ExternalLink className="h-3 w-3" />
                    Contact
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {sessions.length === 0 && (
          <p className="text-center text-muted-foreground py-8">No upcoming sessions scheduled.</p>
        )}
      </CardContent>
    </Card>
  )
}
