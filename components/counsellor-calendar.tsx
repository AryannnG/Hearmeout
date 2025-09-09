"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, Clock } from "lucide-react"

const appointments = [
  { id: "1", date: new Date(2024, 11, 15), time: "10:00 AM", student: "Sarah M.", type: "Initial Consultation" },
  { id: "2", date: new Date(2024, 11, 15), time: "2:00 PM", student: "John D.", type: "Follow-up" },
  { id: "3", date: new Date(2024, 11, 16), time: "11:00 AM", student: "Emma L.", type: "Crisis Support" },
  { id: "4", date: new Date(2024, 11, 18), time: "3:00 PM", student: "Michael R.", type: "Group Session" },
]

export function CounsellorCalendar() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())

  const getAppointmentsForDate = (date: Date) => {
    return appointments.filter(
      (apt) =>
        apt.date.getDate() === date.getDate() &&
        apt.date.getMonth() === date.getMonth() &&
        apt.date.getFullYear() === date.getFullYear(),
    )
  }

  const hasAppointments = (date: Date) => {
    return appointments.some(
      (apt) =>
        apt.date.getDate() === date.getDate() &&
        apt.date.getMonth() === date.getMonth() &&
        apt.date.getFullYear() === date.getFullYear(),
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-heading text-2xl flex items-center gap-2">
          <CalendarDays className="h-5 w-5" />
          Appointment Calendar
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Calendar
          mode="single"
          selected={selectedDate}
          onSelect={setSelectedDate}
          className="rounded-md border"
          modifiers={{
            hasAppointments: (date) => hasAppointments(date),
          }}
          modifiersStyles={{
            hasAppointments: {
              backgroundColor: "hsl(var(--primary))",
              color: "hsl(var(--primary-foreground))",
              borderRadius: "50%",
            },
          }}
        />

        {selectedDate && (
          <div className="space-y-3">
            <h4 className="font-medium flex items-center gap-2">
              <Clock className="h-4 w-4" />
              Appointments for {selectedDate.toLocaleDateString()}
            </h4>
            <div className="space-y-2">
              {getAppointmentsForDate(selectedDate).length > 0 ? (
                getAppointmentsForDate(selectedDate).map((appointment) => (
                  <div key={appointment.id} className="p-3 bg-muted rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium text-sm">{appointment.time}</div>
                        <div className="text-sm text-muted-foreground">{appointment.student}</div>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {appointment.type}
                      </Badge>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-sm text-muted-foreground">No appointments scheduled for this date.</p>
              )}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
