import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { AuthProvider } from "@/components/auth-provider"
import { Header } from "@/components/header"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "MindCare - Mental Health Support",
  description: "A comprehensive mental health platform for students, counsellors, volunteers, and administrators",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Suspense fallback={<div>Loading...</div>}>
          <AuthProvider>
            <Header />
            <main className="min-h-screen">{children}</main>
          </AuthProvider>
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
