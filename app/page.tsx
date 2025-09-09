"use client"

import { useAuth } from "@/components/auth-provider"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function HomePage() {
  const { user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (user) {
      // Redirect to appropriate dashboard based on role
      switch (user.role) {
        case "Student":
          router.push("/student")
          break
        case "Counsellor":
          router.push("/counsellor")
          break
        case "Volunteer":
          router.push("/volunteer")
          break
        case "Admin":
          router.push("/admin")
          break
      }
    }
  }, [user, router])

  if (user) {
    return null // Will redirect
  }

  return (
    <div className="container mx-auto px-4 py-16 max-w-6xl">
      <div className="text-center mb-16">
        <h1 className="font-heading text-5xl md:text-6xl font-bold text-foreground mb-6">Welcome to MindCare</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          A comprehensive mental health platform connecting students, counsellors, volunteers, and administrators in a
          supportive community focused on wellbeing and growth.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/signup">
            <Button size="lg" className="w-full sm:w-auto">
              Get Started
            </Button>
          </Link>
          <Link href="/login">
            <Button variant="outline" size="lg" className="w-full sm:w-auto bg-transparent">
              Sign In
            </Button>
          </Link>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        <Card className="text-center">
          <CardHeader>
            <CardTitle className="font-heading text-2xl text-secondary">Students</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-base">
              Access counselling, join forums, track your mood, and explore healing resources
            </CardDescription>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardHeader>
            <CardTitle className="font-heading text-2xl text-secondary">Counsellors</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-base">
              Manage appointments, connect with students, and provide professional support
            </CardDescription>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardHeader>
            <CardTitle className="font-heading text-2xl text-secondary">Volunteers</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-base">
              Support the community through peer conversations and forum participation
            </CardDescription>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardHeader>
            <CardTitle className="font-heading text-2xl text-secondary">Administrators</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-base">
              Oversee platform operations, approve users, and manage resources
            </CardDescription>
          </CardContent>
        </Card>
      </div>

      <div className="text-center">
        <h2 className="font-heading text-3xl font-semibold text-foreground mb-4">
          Your Mental Health Journey Starts Here
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Join our supportive community where mental health is prioritized, resources are accessible, and every
          individual is valued. Together, we create a space for healing, growth, and connection.
        </p>
      </div>
    </div>
  )
}
