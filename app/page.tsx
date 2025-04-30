"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Mail, Instagram, Twitter, Facebook } from "lucide-react"
import CountdownTimer from "@/components/countdown-timer"

export default function ComingSoonPage() {
  // Launch date - 30 days from now
  const launchDate = new Date()
  launchDate.setDate(launchDate.getDate() + 30)

  return (
    <main className="min-h-screen flex flex-col overflow-x-hidden">
      {/* Background with gradient overlay */}
      <div className="fixed inset-0 bg-white z-[-1]">
        <div className="absolute inset-0 bg-[url('/football-stadium-night.png')] bg-cover bg-center opacity-5 mix-blend-multiply"></div>
      </div>

      <div className="container mx-auto px-4 py-8 flex-1 flex flex-col">
        {/* Header with logo */}
        <header className="py-6 flex justify-center">
          <div className="w-full max-w-[280px]">
            <Image
              src="/images/logo.svg"
              alt="PlayScore.pro"
              width={280}
              height={40}
              priority
              className="w-full h-auto"
            />
          </div>
        </header>

        {/* Main content */}
        <div className="flex-1 flex flex-col items-center justify-center text-center max-w-3xl mx-auto py-12">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
              <span className="block">We're Coming Soon</span>
            </h1>

            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The ultimate football predictions platform that will change how you experience the game. Get ready for
              expert analysis, accurate predictions, and winning strategies.
            </p>

            {/* Countdown timer */}
            <div className="py-8">
              <CountdownTimer targetDate={launchDate} />
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="py-8">
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-gray-500 hover:text-gray-900 hover:bg-gray-100">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-500 hover:text-gray-900 hover:bg-gray-100">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-500 hover:text-gray-900 hover:bg-gray-100">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-500 hover:text-gray-900 hover:bg-gray-100">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </div>
            <div className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} PlayScore.pro. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </main>
  )
}
