"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { MessageCircleHeart } from "lucide-react"

export function RantArea() {
  const [rantText, setRantText] = useState("")

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-heading text-2xl flex items-center gap-2">
          <MessageCircleHeart className="h-5 w-5" />I Want to Rant
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <p className="text-sm text-muted-foreground">
            Sometimes you just need to let it all out. This is your safe space to express whatever is on your mind. No
            judgment, no pressure - just write freely.
          </p>
          <Textarea
            value={rantText}
            onChange={(e) => setRantText(e.target.value)}
            placeholder="Let it all out... What's bothering you today? What's on your mind? This is your space to vent freely."
            rows={6}
            className="resize-none"
          />
          <p className="text-xs text-muted-foreground">
            This is a private space for you to express yourself. Your thoughts won't be saved or shared.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
