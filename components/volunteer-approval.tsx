"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, Check, X, Eye, Mail } from "lucide-react"

interface VolunteerApplication {
  id: string
  name: string
  email: string
  motivation: string
  availability: string
  status: "pending" | "approved" | "rejected"
  applicationDate: string
  background: string
}

const initialApplications: VolunteerApplication[] = [
  {
    id: "1",
    name: "Sarah Chen",
    email: "sarah.chen@email.com",
    motivation: "Want to support fellow students through peer counseling",
    availability: "Weekends, 10-15 hours/week",
    status: "pending",
    applicationDate: "Dec 13, 2024",
    background: "Psychology student, peer support experience",
  },
  {
    id: "2",
    name: "Michael Rodriguez",
    email: "michael.r@email.com",
    motivation: "Personal experience with mental health challenges, want to help others",
    availability: "Evenings, 5-10 hours/week",
    status: "pending",
    applicationDate: "Dec 11, 2024",
    background: "Social Work student, volunteer at local crisis center",
  },
  {
    id: "3",
    name: "Emma Johnson",
    email: "emma.johnson@email.com",
    motivation: "Passionate about mental health advocacy",
    availability: "Flexible, 15-20 hours/week",
    status: "approved",
    applicationDate: "Dec 9, 2024",
    background: "Mental Health First Aid certified",
  },
]

export function VolunteerApproval() {
  const [applications, setApplications] = useState<VolunteerApplication[]>(initialApplications)

  const handleApproval = (id: string, newStatus: "approved" | "rejected") => {
    setApplications((prev) => prev.map((app) => (app.id === id ? { ...app, status: newStatus } : app)))
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "approved":
        return "bg-green-100 text-green-700"
      case "rejected":
        return "bg-red-100 text-red-700"
      case "pending":
        return "bg-yellow-100 text-yellow-700"
      default:
        return "bg-gray-100 text-gray-700"
    }
  }

  const pendingApplications = applications.filter((app) => app.status === "pending")
  const processedApplications = applications.filter((app) => app.status !== "pending")

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-heading text-2xl flex items-center gap-2">
          <Users className="h-5 w-5" />
          Volunteer Approval
          {pendingApplications.length > 0 && (
            <Badge variant="destructive" className="ml-2">
              {pendingApplications.length} pending
            </Badge>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Pending Applications */}
        {pendingApplications.length > 0 && (
          <div>
            <h4 className="font-medium mb-3 text-sm">Pending Applications</h4>
            <div className="space-y-3">
              {pendingApplications.map((application) => (
                <div key={application.id} className="p-4 border rounded-lg space-y-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <h5 className="font-medium">{application.name}</h5>
                      <p className="text-sm text-muted-foreground">{application.email}</p>
                      <div className="text-xs text-muted-foreground mt-1">{application.availability}</div>
                    </div>
                    <Badge className={getStatusColor(application.status)}>{application.status}</Badge>
                  </div>

                  <div className="text-sm space-y-2">
                    <div>
                      <div className="font-medium">Background:</div>
                      <div className="text-muted-foreground">{application.background}</div>
                    </div>
                    <div>
                      <div className="font-medium">Motivation:</div>
                      <div className="text-muted-foreground">{application.motivation}</div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      onClick={() => handleApproval(application.id, "approved")}
                      className="flex items-center gap-1"
                    >
                      <Check className="h-3 w-3" />
                      Approve
                    </Button>
                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={() => handleApproval(application.id, "rejected")}
                      className="flex items-center gap-1"
                    >
                      <X className="h-3 w-3" />
                      Reject
                    </Button>
                    <Button size="sm" variant="outline" className="flex items-center gap-1 bg-transparent">
                      <Eye className="h-3 w-3" />
                      View Details
                    </Button>
                    <Button size="sm" variant="outline" className="flex items-center gap-1 bg-transparent">
                      <Mail className="h-3 w-3" />
                      Contact
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Recent Processed Applications */}
        {processedApplications.length > 0 && (
          <div>
            <h4 className="font-medium mb-3 text-sm">Recently Processed</h4>
            <div className="space-y-2">
              {processedApplications.slice(0, 3).map((application) => (
                <div key={application.id} className="flex items-center justify-between p-2 bg-muted rounded">
                  <div>
                    <div className="font-medium text-sm">{application.name}</div>
                    <div className="text-xs text-muted-foreground">{application.availability}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className={getStatusColor(application.status)}>{application.status}</Badge>
                    <span className="text-xs text-muted-foreground">{application.applicationDate}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {pendingApplications.length === 0 && (
          <div className="text-center py-8 text-muted-foreground">
            <Users className="h-12 w-12 mx-auto mb-2 opacity-50" />
            <p>No pending volunteer applications</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
