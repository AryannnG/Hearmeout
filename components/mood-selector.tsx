"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const moods = [
  { emoji: "😢", label: "Very Sad", value: 1 },
  { emoji: "😔", label: "Sad", value: 2 },
  { emoji: "😐", label: "Neutral", value: 3 },
  { emoji: "🙂", label: "Happy", value: 4 },
  { emoji: "😊", label: "Very Happy", value: 5 },
]

export function MoodSelector() {
  const [selectedMood, setSelectedMood] = useState<number | null>(null)

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-heading text-2xl">How are you feeling right now?</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-center gap-4">
          {moods.map((mood) => (
            <button
              key={mood.value}
              onClick={() => setSelectedMood(mood.value)}
              className={`p-4 rounded-full text-4xl transition-all hover:scale-110 ${
                selectedMood === mood.value ? "bg-primary/20 ring-2 ring-primary scale-110" : "hover:bg-muted"
              }`}
              title={mood.label}
            >
              {mood.emoji}
            </button>
          ))}
        </div>
        {selectedMood && (
          <p className="text-center mt-4 text-muted-foreground">
            You're feeling: {moods.find((m) => m.value === selectedMood)?.label}
          </p>
        )}
      </CardContent>
    </Card>
  )
}
