"use client"

import { useAuth } from "@/components/auth-provider"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { VolunteerForums } from "@/components/volunteer-forums"
import { CounsellorChat } from "@/components/counsellor-chat"
import { VolunteerWelcome } from "@/components/volunteer-welcome"
import { VolunteerStats } from "@/components/volunteer-stats"

export default function VolunteerDashboard() {
  const { user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!user || user.role !== "Volunteer") {
      router.push("/login")
    }
  }, [user, router])

  if (!user || user.role !== "Volunteer") {
    return null
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
          Hello, Volunteer! How are you feeling today?
        </h1>
        <p className="text-lg text-muted-foreground">
          Welcome back, {user.name}. Thank you for your dedication to supporting our community.
        </p>
      </div>

      {/* Welcome Check-in */}
      <VolunteerWelcome />

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-2 gap-6 mb-8">
        <VolunteerForums />
        <CounsellorChat />
      </div>

      {/* Volunteer Stats */}
      <VolunteerStats />
    </div>
  )
}
