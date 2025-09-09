"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Smile, Meh, Frown, AlertCircle } from "lucide-react"

const moodOptions = [
  { icon: Frown, label: "Struggling", value: 1, color: "text-red-500" },
  { icon: AlertCircle, label: "Stressed", value: 2, color: "text-orange-500" },
  { icon: Meh, label: "Okay", value: 3, color: "text-yellow-500" },
  { icon: Smile, label: "Good", value: 4, color: "text-green-500" },
  { icon: Heart, label: "Great", value: 5, color: "text-pink-500" },
]

export function VolunteerWelcome() {
  const [selectedMood, setSelectedMood] = useState<number | null>(null)
  const [hasCheckedIn, setHasCheckedIn] = useState(false)

  const handleMoodSelect = (mood: number) => {
    setSelectedMood(mood)
    setHasCheckedIn(true)
  }

  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className="font-heading text-2xl flex items-center gap-2">
          <Heart className="h-5 w-5 text-pink-500" />
          Daily Check-in
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {!hasCheckedIn ? (
          <>
            <p className="text-muted-foreground">
              Before you start helping others, let's check in with how you're feeling. Your wellbeing matters too!
            </p>
            <div className="flex justify-center gap-4">
              {moodOptions.map((mood) => {
                const IconComponent = mood.icon
                return (
                  <button
                    key={mood.value}
                    onClick={() => handleMoodSelect(mood.value)}
                    className={`p-4 rounded-full transition-all hover:scale-110 hover:bg-muted ${
                      selectedMood === mood.value ? "bg-primary/20 ring-2 ring-primary scale-110" : ""
                    }`}
                    title={mood.label}
                  >
                    <IconComponent className={`h-8 w-8 ${mood.color}`} />
                  </button>
                )
              })}
            </div>
          </>
        ) : (
          <div className="text-center space-y-3">
            <div className="flex items-center justify-center gap-2">
              {(() => {
                const selectedMoodOption = moodOptions.find((m) => m.value === selectedMood)
                if (selectedMoodOption) {
                  const IconComponent = selectedMoodOption.icon
                  return (
                    <>
                      <IconComponent className={`h-6 w-6 ${selectedMoodOption.color}`} />
                      <span className="font-medium">You're feeling {selectedMoodOption.label.toLowerCase()}</span>
                    </>
                  )
                }
                return null
              })()}
            </div>
            <p className="text-sm text-muted-foreground">
              {selectedMood && selectedMood <= 2
                ? "Remember to take care of yourself too. Consider reaching out to a counsellor if you need support."
                : "Great! You're ready to make a positive impact in our community today."}
            </p>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setHasCheckedIn(false)
                setSelectedMood(null)
              }}
            >
              Update Check-in
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
