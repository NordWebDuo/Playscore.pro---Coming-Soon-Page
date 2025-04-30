import type React from "react"
import type { Metadata } from "next"
import { Geist } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "PlayScore.pro - Coming Soon | Football Predictions",
  description:
    "The ultimate football predictions platform. Get expert analysis, accurate predictions, and winning strategies. Coming soon!",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={geist.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
