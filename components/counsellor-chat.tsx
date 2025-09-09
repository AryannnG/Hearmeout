"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, Send, User, UserCheck } from "lucide-react"

interface ChatMessage {
  id: string
  text: string
  sender: "volunteer" | "counsellor"
  timestamp: Date
  senderName: string
}

const initialMessages: ChatMessage[] = [
  {
    id: "1",
    text: "Hi! I wanted to check in about the student who was struggling with exam anxiety. How did the forum discussion go?",
    sender: "counsellor",
    timestamp: new Date(Date.now() - 3600000), // 1 hour ago
    senderName: "Dr. Sarah Johnson",
  },
  {
    id: "2",
    text: "Hello Dr. Johnson! The discussion went really well. Several students shared their coping strategies and the original poster seemed much more hopeful by the end.",
    sender: "volunteer",
    timestamp: new Date(Date.now() - 3000000), // 50 minutes ago
    senderName: "You",
  },
  {
    id: "3",
    text: "That's wonderful to hear! Peer support can be incredibly powerful. Did you notice any students who might benefit from one-on-one counseling?",
    sender: "counsellor",
    timestamp: new Date(Date.now() - 2400000), // 40 minutes ago
    senderName: "Dr. Sarah Johnson",
  },
]

const availableCounsellors = [
  { id: "sarah", name: "Dr. Sarah Johnson", status: "online", specialty: "Anxiety & Depression" },
  { id: "michael", name: "Dr. Michael Chen", status: "busy", specialty: "Stress Management" },
  { id: "emily", name: "Dr. Emily Rodriguez", status: "offline", specialty: "Academic Pressure" },
]

export function CounsellorChat() {
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages)
  const [inputValue, setInputValue] = useState("")
  const [selectedCounsellor, setSelectedCounsellor] = useState("sarah")

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "volunteer",
      timestamp: new Date(),
      senderName: "You",
    }

    setMessages((prev) => [...prev, newMessage])

    // Simulate counsellor response
    setTimeout(() => {
      const responses = [
        "Thank you for the update! That's really helpful information.",
        "I appreciate you keeping me informed about the forum activities.",
        "Great work facilitating that discussion. Your support makes a real difference.",
        "That sounds like a positive outcome. Let me know if you notice any concerning patterns.",
      ]

      const counsellorResponse: ChatMessage = {
        id: (Date.now() + 1).toString(),
        text: responses[Math.floor(Math.random() * responses.length)],
        sender: "counsellor",
        timestamp: new Date(),
        senderName: availableCounsellors.find((c) => c.id === selectedCounsellor)?.name || "Counsellor",
      }

      setMessages((prev) => [...prev, counsellorResponse])
    }, 1500)

    setInputValue("")
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "online":
        return "bg-green-100 text-green-700"
      case "busy":
        return "bg-yellow-100 text-yellow-700"
      case "offline":
        return "bg-gray-100 text-gray-700"
      default:
        return "bg-gray-100 text-gray-700"
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-heading text-2xl flex items-center gap-2">
          <MessageCircle className="h-5 w-5" />
          Chat with Counsellor
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Counsellor Selection */}
        <div>
          <h4 className="font-medium mb-2 text-sm">Available Counsellors</h4>
          <div className="space-y-2">
            {availableCounsellors.map((counsellor) => (
              <button
                key={counsellor.id}
                onClick={() => setSelectedCounsellor(counsellor.id)}
                className={`w-full p-2 rounded-lg text-left transition-colors ${
                  selectedCounsellor === counsellor.id
                    ? "bg-primary/10 border border-primary"
                    : "bg-muted hover:bg-muted/80"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium text-sm">{counsellor.name}</div>
                    <div className="text-xs text-muted-foreground">{counsellor.specialty}</div>
                  </div>
                  <Badge className={getStatusColor(counsellor.status)}>{counsellor.status}</Badge>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Chat Messages */}
        <div>
          <h4 className="font-medium mb-2 text-sm">
            Conversation with {availableCounsellors.find((c) => c.id === selectedCounsellor)?.name}
          </h4>
          <ScrollArea className="h-64 border rounded-lg p-3">
            <div className="space-y-3">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex items-start gap-2 ${message.sender === "volunteer" ? "flex-row-reverse" : ""}`}
                >
                  <div
                    className={`p-2 rounded-full ${
                      message.sender === "volunteer"
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-secondary-foreground"
                    }`}
                  >
                    {message.sender === "volunteer" ? <User className="h-3 w-3" /> : <UserCheck className="h-3 w-3" />}
                  </div>
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.sender === "volunteer" ? "bg-primary text-primary-foreground ml-auto" : "bg-muted"
                    }`}
                  >
                    <div className="text-xs opacity-70 mb-1">{message.senderName}</div>
                    <p className="text-sm">{message.text}</p>
                    <div className="text-xs opacity-70 mt-1">
                      {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>

        {/* Message Input */}
        <div className="flex gap-2">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type your message..."
            onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
            disabled={availableCounsellors.find((c) => c.id === selectedCounsellor)?.status === "offline"}
          />
          <Button
            onClick={handleSendMessage}
            size="icon"
            disabled={
              !inputValue.trim() || availableCounsellors.find((c) => c.id === selectedCounsellor)?.status === "offline"
            }
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>

        {availableCounsellors.find((c) => c.id === selectedCounsellor)?.status === "offline" && (
          <p className="text-xs text-muted-foreground text-center">
            This counsellor is currently offline. Your message will be delivered when they're available.
          </p>
        )}
      </CardContent>
    </Card>
  )
}
