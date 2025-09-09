"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { UserCheck, Check, X, Eye, Mail } from "lucide-react"

interface CounsellorApplication {
  id: string
  name: string
  email: string
  specialty: string
  experience: string
  status: "pending" | "approved" | "rejected"
  applicationDate: string
  credentials: string
}

const initialApplications: CounsellorApplication[] = [
  {
    id: "1",
    name: "Dr. Lisa Thompson",
    email: "lisa.thompson@email.com",
    specialty: "Trauma Therapy",
    experience: "8 years",
    status: "pending",
    applicationDate: "Dec 12, 2024",
    credentials: "PhD Psychology, Licensed Clinical Psychologist",
  },
  {
    id: "2",
    name: "Dr. James Wilson",
    email: "james.wilson@email.com",
    specialty: "Cognitive Behavioral Therapy",
    experience: "5 years",
    status: "pending",
    applicationDate: "Dec 10, 2024",
    credentials: "MA Clinical Psychology, CBT Certified",
  },
  {
    id: "3",
    name: "Dr. Maria Garcia",
    email: "maria.garcia@email.com",
    specialty: "Group Therapy",
    experience: "12 years",
    status: "approved",
    applicationDate: "Dec 8, 2024",
    credentials: "PhD Clinical Psychology, Group Therapy Specialist",
  },
  {
    id: "4",
    name: "Dr. Robert Kim",
    email: "robert.kim@email.com",
    specialty: "Addiction Counseling",
    experience: "3 years",
    status: "rejected",
    applicationDate: "Dec 5, 2024",
    credentials: "MA Counseling Psychology",
  },
]

export function CounsellorApproval() {
  const [applications, setApplications] = useState<CounsellorApplication[]>(initialApplications)

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
          <UserCheck className="h-5 w-5" />
          Counsellor Approval
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
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="outline" className="text-xs">
                          {application.specialty}
                        </Badge>
                        <span className="text-xs text-muted-foreground">{application.experience} experience</span>
                      </div>
                    </div>
                    <Badge className={getStatusColor(application.status)}>{application.status}</Badge>
                  </div>

                  <div className="text-sm">
                    <div className="font-medium">Credentials:</div>
                    <div className="text-muted-foreground">{application.credentials}</div>
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
                      View Profile
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
                    <div className="text-xs text-muted-foreground">{application.specialty}</div>
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
            <UserCheck className="h-12 w-12 mx-auto mb-2 opacity-50" />
            <p>No pending counsellor applications</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
