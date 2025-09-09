"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Mail, Send, CheckCircle } from "lucide-react"

const students = [
  { id: "sarah", name: "Sarah Mitchell", status: "active" },
  { id: "john", name: "John Davis", status: "pending" },
  { id: "emma", name: "Emma Lopez", status: "active" },
  { id: "michael", name: "Michael Roberts", status: "active" },
]

const messageTemplates = [
  { id: "checkin", title: "Check-in", content: "Hi! I wanted to check in and see how you're doing today..." },
  {
    id: "reminder",
    title: "Appointment Reminder",
    content: "This is a friendly reminder about your upcoming appointment...",
  },
  {
    id: "followup",
    title: "Session Follow-up",
    content: "Thank you for our session today. I wanted to follow up on...",
  },
  { id: "resources", title: "New Resources", content: "I found some resources that might be helpful for you..." },
]

const recentMessages = [
  { id: "1", student: "Sarah M.", subject: "Check-in", date: "Dec 10", status: "read" },
  { id: "2", student: "John D.", subject: "Appointment Reminder", date: "Dec 9", status: "unread" },
]

export function SendMessage() {
  const [selectedStudent, setSelectedStudent] = useState("")
  const [message, setMessage] = useState("")
  const [subject, setSubject] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleTemplateSelect = (templateId: string) => {
    const template = messageTemplates.find((t) => t.id === templateId)
    if (template) {
      setSubject(template.title)
      setMessage(template.content)
    }
  }

  const handleSend = async () => {
    if (!selectedStudent || !message.trim() || !subject.trim()) return

    setIsSubmitting(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setSubmitted(true)

    // Reset form after success
    setTimeout(() => {
      setSelectedStudent("")
      setMessage("")
      setSubject("")
      setSubmitted(false)
    }, 2000)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-heading text-xl flex items-center gap-2">
          <Mail className="h-5 w-5" />
          Send Message
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Recent Messages */}
        <div>
          <h4 className="font-medium mb-2 text-sm">Recent Messages</h4>
          <div className="space-y-1">
            {recentMessages.map((msg) => (
              <div key={msg.id} className="p-2 bg-muted rounded text-xs">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">{msg.subject}</div>
                    <div className="text-muted-foreground">to {msg.student}</div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Badge variant={msg.status === "read" ? "secondary" : "default"} className="text-xs">
                      {msg.status}
                    </Badge>
                    <span className="text-muted-foreground">{msg.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Message Form */}
        <div className="space-y-3">
          <div>
            <label className="text-sm font-medium mb-1 block">Student</label>
            <Select value={selectedStudent} onValueChange={setSelectedStudent}>
              <SelectTrigger className="h-8">
                <SelectValue placeholder="Select student" />
              </SelectTrigger>
              <SelectContent>
                {students.map((student) => (
                  <SelectItem key={student.id} value={student.id}>
                    <div className="flex items-center gap-2">
                      <span>{student.name}</span>
                      <Badge variant={student.status === "active" ? "secondary" : "outline"} className="text-xs">
                        {student.status}
                      </Badge>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-sm font-medium mb-1 block">Quick Templates</label>
            <Select onValueChange={handleTemplateSelect}>
              <SelectTrigger className="h-8">
                <SelectValue placeholder="Choose a template (optional)" />
              </SelectTrigger>
              <SelectContent>
                {messageTemplates.map((template) => (
                  <SelectItem key={template.id} value={template.id}>
                    {template.title}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-sm font-medium mb-1 block">Subject</label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Message subject"
              className="w-full h-8 px-3 rounded-md border border-input bg-background text-sm"
            />
          </div>

          <div>
            <label className="text-sm font-medium mb-1 block">Message</label>
            <Textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message here..."
              rows={3}
            />
          </div>

          <Button
            onClick={handleSend}
            disabled={!selectedStudent || !message.trim() || !subject.trim() || isSubmitting}
            className="w-full"
          >
            {submitted ? (
              <>
                <CheckCircle className="h-4 w-4 mr-2" />
                Sent!
              </>
            ) : isSubmitting ? (
              "Sending..."
            ) : (
              <>
                <Send className="h-4 w-4 mr-2" />
                Send Message
              </>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
