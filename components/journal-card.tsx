"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen } from "lucide-react"
import Link from "next/link"

export function JournalCard() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="font-heading text-xl flex items-center gap-2">
          <BookOpen className="h-5 w-5" />
          My Journal
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">
          Keep track of your thoughts, feelings, and daily reflections. Journaling can help you process emotions and
          track your mental health journey.
        </p>
        <div className="space-y-2">
          <div className="text-xs text-muted-foreground">Recent entries:</div>
          <div className="space-y-1">
            <div className="text-sm p-2 bg-muted rounded">Dec 10: Feeling more optimistic today...</div>
            <div className="text-sm p-2 bg-muted rounded">Dec 8: Had a challenging day but...</div>
          </div>
        </div>
        <Link href="/journal">
          <Button className="w-full">Open Journal</Button>
        </Link>
      </CardContent>
    </Card>
  )
}
