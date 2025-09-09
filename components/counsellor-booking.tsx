"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Textarea } from "@/components/ui/textarea"
import { Clock, User } from "lucide-react"

const counsellors = [
  { id: "1", name: "Dr. Sarah Johnson", specialty: "Anxiety & Depression" },
  { id: "2", name: "Dr. Michael Chen", specialty: "Stress Management" },
  { id: "3", name: "Dr. Emily Rodriguez", specialty: "Academic Pressure" },
]

const timeSlots = ["9:00 AM", "10:00 AM", "11:00 AM", "2:00 PM", "3:00 PM", "4:00 PM"]

const existingAppointments = [
  { id: "1", counsellor: "Dr. Sarah Johnson", date: "Dec 15, 2024", time: "2:00 PM" },
  { id: "2", counsellor: "Dr. Michael Chen", date: "Dec 20, 2024", time: "10:00 AM" },
]

export function CounsellorBooking() {
  const [selectedCounsellor, setSelectedCounsellor] = useState("")
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())
  const [selectedTime, setSelectedTime] = useState("")
  const [feedback, setFeedback] = useState("")

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-heading text-2xl flex items-center gap-2">
          <User className="h-5 w-5" />
          Counsellor Booking
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Counsellor Selection */}
        <div>
          <label className="text-sm font-medium mb-2 block">Select Counsellor</label>
          <Select value={selectedCounsellor} onValueChange={setSelectedCounsellor}>
            <SelectTrigger>
              <SelectValue placeholder="Choose a counsellor" />
            </SelectTrigger>
            <SelectContent>
              {counsellors.map((counsellor) => (
                <SelectItem key={counsellor.id} value={counsellor.id}>
                  <div>
                    <div className="font-medium">{counsellor.name}</div>
                    <div className="text-xs text-muted-foreground">{counsellor.specialty}</div>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Date Selection */}
        <div>
          <label className="text-sm font-medium mb-2 block">Select Date</label>
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
            className="rounded-md border"
            disabled={(date) => date < new Date()}
          />
        </div>

        {/* Time Selection */}
        <div>
          <label className="text-sm font-medium mb-2 block">Available Times</label>
          <div className="grid grid-cols-3 gap-2">
            {timeSlots.map((time) => (
              <Button
                key={time}
                variant={selectedTime === time ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedTime(time)}
              >
                <Clock className="h-3 w-3 mr-1" />
                {time}
              </Button>
            ))}
          </div>
        </div>

        {/* Book Appointment Button */}
        <Button className="w-full" disabled={!selectedCounsellor || !selectedDate || !selectedTime}>
          Book Appointment
        </Button>

        {/* Existing Appointments */}
        <div>
          <h4 className="font-medium mb-2">Your Appointments</h4>
          <div className="space-y-2">
            {existingAppointments.map((appointment) => (
              <div key={appointment.id} className="flex items-center justify-between p-2 bg-muted rounded">
                <div className="text-sm">
                  <div className="font-medium">{appointment.counsellor}</div>
                  <div className="text-muted-foreground">
                    {appointment.date} at {appointment.time}
                  </div>
                </div>
                <Button size="sm" variant="outline">
                  Reconnect
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Feedback */}
        <div>
          <label className="text-sm font-medium mb-2 block">Feedback</label>
          <Textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Share your thoughts about your counselling experience..."
            rows={3}
          />
        </div>
      </CardContent>
    </Card>
  )
}
