"use client"

import { useAuth } from "@/components/auth-provider"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChatbotModal } from "@/components/chatbot-modal"
import { MoodSelector } from "@/components/mood-selector"
import { CounsellorBooking } from "@/components/counsellor-booking"
import { ForumsCard } from "@/components/forums-card"
import { RantArea } from "@/components/rant-area"
import { JournalCard } from "@/components/journal-card"
import { MedicalTestsCard } from "@/components/medical-tests-card"
import { ProfileCard } from "@/components/profile-card"
import { ResourcesGrid } from "@/components/resources-grid"
import { MeditationCard } from "@/components/meditation-card"
import { ExploreTopics } from "@/components/explore-topics"
import { MessageCircle, Heart, Brain, Sparkles } from "lucide-react"

export default function StudentDashboard() {
  const { user } = useAuth()
  const router = useRouter()
  const [isChatbotOpen, setIsChatbotOpen] = useState(false)

  useEffect(() => {
    if (!user || user.role !== "Student") {
      router.push("/login")
    }
  }, [user, router])

  if (!user || user.role !== "Student") {
    return null
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">How are you doing today?</h1>
        <p className="text-lg text-muted-foreground mb-6">
          Welcome back, {user.name}. Let's check in with your wellbeing journey.
        </p>

        {/* Chatbot Trigger */}
        <Button onClick={() => setIsChatbotOpen(true)} className="mb-8" size="lg">
          <MessageCircle className="mr-2 h-5 w-5" />
          Chat with MindBot
        </Button>
      </div>

      {/* Main Dashboard Tabs */}
      <Tabs defaultValue="hearme" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="hearme" className="flex items-center gap-2">
            <Heart className="h-4 w-4" />
            HearMe
          </TabsTrigger>
          <TabsTrigger value="knowme" className="flex items-center gap-2">
            <Brain className="h-4 w-4" />
            KnowMe
          </TabsTrigger>
          <TabsTrigger value="healme" className="flex items-center gap-2">
            <Sparkles className="h-4 w-4" />
            HealMe
          </TabsTrigger>
        </TabsList>

        {/* HearMe Tab */}
        <TabsContent value="hearme" className="space-y-6">
          <div className="grid gap-6">
            {/* Mood Selector */}
            <MoodSelector />

            {/* Two Column Layout for Counsellor Booking and Forums */}
            <div className="grid md:grid-cols-2 gap-6">
              <CounsellorBooking />
              <ForumsCard />
            </div>

            {/* Rant Area */}
            <RantArea />
          </div>
        </TabsContent>

        {/* KnowMe Tab */}
        <TabsContent value="knowme" className="space-y-6">
          <div className="grid md:grid-cols-3 gap-6">
            <JournalCard />
            <MedicalTestsCard />
            <ProfileCard />
          </div>
        </TabsContent>

        {/* HealMe Tab */}
        <TabsContent value="healme" className="space-y-6">
          <div className="grid gap-6">
            {/* Resources Grid */}
            <ResourcesGrid />

            {/* Meditation and Topics */}
            <div className="grid md:grid-cols-2 gap-6">
              <MeditationCard />
              <ExploreTopics />
            </div>
          </div>
        </TabsContent>
      </Tabs>

      {/* Chatbot Modal */}
      <ChatbotModal isOpen={isChatbotOpen} onClose={() => setIsChatbotOpen(false)} />
    </div>
  )
}
