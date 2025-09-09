"use client"

import { useAuth } from "@/components/auth-provider"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { CounsellorCalendar } from "@/components/counsellor-calendar"
import { UpcomingSessions } from "@/components/upcoming-sessions"
import { CounsellorForums } from "@/components/counsellor-forums"
import { RecommendResources } from "@/components/recommend-resources"
import { SendMessage } from "@/components/send-message"
import { CounsellorProfile } from "@/components/counsellor-profile"

export default function CounsellorDashboard() {
  const { user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!user || user.role !== "Counsellor") {
      router.push("/login")
    }
  }, [user, router])

  if (!user || user.role !== "Counsellor") {
    return null
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-2">
          Welcome back, Dr. {user.name}
        </h1>
        <p className="text-lg text-muted-foreground">
          Your dashboard for managing appointments, connecting with students, and providing support.
        </p>
      </div>

      {/* Main Calendar and Sessions Section */}
      <div className="grid lg:grid-cols-2 gap-6 mb-8">
        <CounsellorCalendar />
        <UpcomingSessions />
      </div>

      {/* Feature Cards Section */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <CounsellorForums />
        <RecommendResources />
        <SendMessage />
      </div>

      {/* Profile Section */}
      <CounsellorProfile />
    </div>
  )
}
