"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { User } from "lucide-react"
import Link from "next/link"

export function ProfileCard() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="font-heading text-xl flex items-center gap-2">
          <User className="h-5 w-5" />
          My Profile
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">
          Manage your personal information, preferences, and privacy settings.
        </p>
        <div className="space-y-2">
          <div className="text-xs text-muted-foreground">Quick stats:</div>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="p-2 bg-muted rounded">
              <div className="font-medium">7</div>
              <div className="text-xs text-muted-foreground">Journal entries</div>
            </div>
            <div className="p-2 bg-muted rounded">
              <div className="font-medium">3</div>
              <div className="text-xs text-muted-foreground">Sessions booked</div>
            </div>
          </div>
        </div>
        <Link href="/student-profile">
          <Button className="w-full">View Profile</Button>
        </Link>
      </CardContent>
    </Card>
  )
}
