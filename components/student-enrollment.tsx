"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Search, Mail, Eye, Download } from "lucide-react"

interface StudentRecord {
  id: string
  name: string
  email: string
  year: string
  enrollmentDate: string
  status: "active" | "inactive" | "suspended"
  sessionsAttended: number
  lastActivity: string
}

const studentRecords: StudentRecord[] = [
  {
    id: "1",
    name: "Sarah Mitchell",
    email: "sarah.mitchell@university.edu",
    year: "Junior",
    enrollmentDate: "Sep 15, 2024",
    status: "active",
    sessionsAttended: 8,
    lastActivity: "Dec 12, 2024",
  },
  {
    id: "2",
    name: "John Davis",
    email: "john.davis@university.edu",
    year: "Sophomore",
    enrollmentDate: "Oct 3, 2024",
    status: "active",
    sessionsAttended: 5,
    lastActivity: "Dec 11, 2024",
  },
  {
    id: "3",
    name: "Emma Lopez",
    email: "emma.lopez@university.edu",
    year: "Senior",
    enrollmentDate: "Aug 28, 2024",
    status: "active",
    sessionsAttended: 12,
    lastActivity: "Dec 10, 2024",
  },
  {
    id: "4",
    name: "Michael Roberts",
    email: "michael.roberts@university.edu",
    year: "Freshman",
    enrollmentDate: "Nov 20, 2024",
    status: "inactive",
    sessionsAttended: 2,
    lastActivity: "Nov 25, 2024",
  },
  {
    id: "5",
    name: "Lisa Chen",
    email: "lisa.chen@university.edu",
    year: "Graduate",
    enrollmentDate: "Sep 5, 2024",
    status: "active",
    sessionsAttended: 15,
    lastActivity: "Dec 13, 2024",
  },
]

export function StudentEnrollment() {
  const [searchTerm, setSearchTerm] = useState("")
  const [students] = useState<StudentRecord[]>(studentRecords)

  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.year.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-700"
      case "inactive":
        return "bg-yellow-100 text-yellow-700"
      case "suspended":
        return "bg-red-100 text-red-700"
      default:
        return "bg-gray-100 text-gray-700"
    }
  }

  const enrollmentStats = {
    total: students.length,
    active: students.filter((s) => s.status === "active").length,
    newThisMonth: students.filter((s) => new Date(s.enrollmentDate).getMonth() === 11).length, // December
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-heading text-2xl flex items-center gap-2">
          <GraduationCap className="h-5 w-5" />
          Student Enrollment
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Enrollment Stats */}
        <div className="grid grid-cols-3 gap-3">
          <div className="text-center p-3 bg-muted rounded-lg">
            <div className="font-bold text-lg text-primary">{enrollmentStats.total}</div>
            <div className="text-xs text-muted-foreground">Total Students</div>
          </div>
          <div className="text-center p-3 bg-muted rounded-lg">
            <div className="font-bold text-lg text-green-600">{enrollmentStats.active}</div>
            <div className="text-xs text-muted-foreground">Active</div>
          </div>
          <div className="text-center p-3 bg-muted rounded-lg">
            <div className="font-bold text-lg text-primary">{enrollmentStats.newThisMonth}</div>
            <div className="text-xs text-muted-foreground">New This Month</div>
          </div>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search students by name, email, or year..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Student List */}
        <div className="space-y-2 max-h-64 overflow-y-auto">
          {filteredStudents.map((student) => (
            <div key={student.id} className="p-3 border rounded-lg">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h5 className="font-medium text-sm">{student.name}</h5>
                  <p className="text-xs text-muted-foreground">{student.email}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <Badge variant="outline" className="text-xs">
                      {student.year}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{student.sessionsAttended} sessions</span>
                  </div>
                </div>
                <Badge className={getStatusColor(student.status)}>{student.status}</Badge>
              </div>

              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>Enrolled: {student.enrollmentDate}</span>
                <span>Last active: {student.lastActivity}</span>
              </div>

              <div className="flex gap-2 mt-2">
                <Button size="sm" variant="outline" className="bg-transparent">
                  <Eye className="h-3 w-3 mr-1" />
                  View Profile
                </Button>
                <Button size="sm" variant="outline" className="bg-transparent">
                  <Mail className="h-3 w-3 mr-1" />
                  Contact
                </Button>
              </div>
            </div>
          ))}
        </div>

        {filteredStudents.length === 0 && (
          <div className="text-center py-8 text-muted-foreground">
            <GraduationCap className="h-12 w-12 mx-auto mb-2 opacity-50" />
            <p>No students found matching your search</p>
          </div>
        )}

        {/* Export Button */}
        <Button variant="outline" className="w-full bg-transparent">
          <Download className="h-4 w-4 mr-2" />
          Export Student Data
        </Button>
      </CardContent>
    </Card>
  )
}
