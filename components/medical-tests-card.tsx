"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { ClipboardList } from "lucide-react"

const sampleQuestions = [
  {
    id: "1",
    question: "Over the past two weeks, how often have you felt down, depressed, or hopeless?",
    options: ["Not at all", "Several days", "More than half the days", "Nearly every day"],
  },
  {
    id: "2",
    question: "How often do you feel overwhelmed by your daily responsibilities?",
    options: ["Never", "Sometimes", "Often", "Always"],
  },
]

export function MedicalTestsCard() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="font-heading text-xl flex items-center gap-2">
          <ClipboardList className="h-5 w-5" />
          Mental Health Assessment
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">
          Take a quick assessment to better understand your current mental health state.
        </p>

        {currentQuestion < sampleQuestions.length ? (
          <div className="space-y-4">
            <div className="text-sm font-medium">
              Question {currentQuestion + 1} of {sampleQuestions.length}
            </div>
            <div className="text-sm">{sampleQuestions[currentQuestion].question}</div>
            <RadioGroup
              value={answers[sampleQuestions[currentQuestion].id] || ""}
              onValueChange={(value) =>
                setAnswers((prev) => ({
                  ...prev,
                  [sampleQuestions[currentQuestion].id]: value,
                }))
              }
            >
              {sampleQuestions[currentQuestion].options.map((option, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <RadioGroupItem value={option} id={`option-${index}`} />
                  <Label htmlFor={`option-${index}`} className="text-sm">
                    {option}
                  </Label>
                </div>
              ))}
            </RadioGroup>
            <Button
              onClick={() => setCurrentQuestion((prev) => prev + 1)}
              disabled={!answers[sampleQuestions[currentQuestion].id]}
              className="w-full"
            >
              {currentQuestion === sampleQuestions.length - 1 ? "Complete Assessment" : "Next Question"}
            </Button>
          </div>
        ) : (
          <div className="text-center space-y-4">
            <div className="text-sm text-muted-foreground">Assessment completed!</div>
            <Button
              onClick={() => {
                setCurrentQuestion(0)
                setAnswers({})
              }}
              variant="outline"
              className="w-full"
            >
              Take Another Assessment
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
