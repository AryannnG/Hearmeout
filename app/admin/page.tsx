"use client"

import { useAuth } from "@/components/auth-provider"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { CounsellorApproval } from "@/components/counsellor-approval"
import { CounsellorFeedback } from "@/components/counsellor-feedback"
import { StudentEnrollment } from "@/components/student-enrollment"
import { ResourceUpload } from "@/components/resource-upload"
import { VolunteerApproval } from "@/components/volunteer-approval"
import { AdminStats } from "@/components/admin-stats"

export default function AdminDashboard() {
  const { user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!user || user.role !== "Admin") {
      router.push("/login")
    }
  }, [user, router])

  if (!user || user.role !== "Admin") {
    return null
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-2">Admin Dashboard</h1>
        <p className="text-lg text-muted-foreground">
          Welcome, {user.name}. Manage platform operations, user approvals, and system resources.
        </p>
      </div>

      {/* Admin Stats Overview */}
      <AdminStats />

      {/* Main Admin Cards Grid */}
      <div className="grid lg:grid-cols-2 gap-6 mb-8">
        <CounsellorApproval />
        <VolunteerApproval />
      </div>

      <div className="grid lg:grid-cols-2 gap-6 mb-8">
        <CounsellorFeedback />
        <StudentEnrollment />
      </div>

      {/* Resource Upload */}
      <ResourceUpload />
    </div>
  )
}
