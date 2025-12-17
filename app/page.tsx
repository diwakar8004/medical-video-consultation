"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Video, Shield, Lock, CheckCircle2, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function Home() {
  const [showConsultationModal, setShowConsultationModal] = useState(false)
  const [showDetailsForm, setShowDetailsForm] = useState(true)
  const [userDetails, setUserDetails] = useState({
    name: "",
    age: "",
    phone: "",
    symptoms: "",
  })

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setShowDetailsForm(false)
  }

  const handleStartVideoCall = () => {
    // Replace this with your actual Google Meet or Zoom link
    const meetingLink = "https://meet.google.com/your-meeting-link"
    window.open(meetingLink, "_blank")
  }

  const handleCloseModal = () => {
    setShowConsultationModal(false)
    setShowDetailsForm(true)
    setUserDetails({ name: "", age: "", phone: "", symptoms: "" })
  }

  return (
    <div className="min-h-screen bg-background">
      {showConsultationModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <Card className="w-full max-w-md border-border relative">
            <button
              onClick={handleCloseModal}
              className="absolute right-4 top-4 rounded-full p-2 hover:bg-muted transition-colors z-10"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
            <CardContent className="p-8 space-y-6">
              {showDetailsForm ? (
                <>
                  <div className="text-center space-y-2">
                    <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Video className="h-10 w-10 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold text-foreground">Start Your Consultation</h2>
                    <p className="text-muted-foreground">Please provide your basic information</p>
                  </div>

                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Enter your full name"
                        value={userDetails.name}
                        onChange={(e) => setUserDetails({ ...userDetails, name: e.target.value })}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="age">Age *</Label>
                      <Input
                        id="age"
                        type="number"
                        placeholder="Enter your age"
                        value={userDetails.age}
                        onChange={(e) => setUserDetails({ ...userDetails, age: e.target.value })}
                        required
                        min="1"
                        max="120"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+91 XXXXXXXXXX"
                        value={userDetails.phone}
                        onChange={(e) => setUserDetails({ ...userDetails, phone: e.target.value })}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="symptoms">Symptoms / Reason for Consultation *</Label>
                      <Textarea
                        id="symptoms"
                        placeholder="Briefly describe your symptoms or reason for consultation"
                        value={userDetails.symptoms}
                        onChange={(e) => setUserDetails({ ...userDetails, symptoms: e.target.value })}
                        required
                        rows={4}
                      />
                    </div>

                    <div className="space-y-3 pt-2">
                      <Button type="submit" className="w-full text-base font-semibold" size="lg">
                        Continue to Counselor
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        onClick={handleCloseModal}
                        className="w-full text-base bg-transparent"
                        size="lg"
                      >
                        Cancel
                      </Button>
                    </div>
                  </form>

                  <p className="text-xs text-center text-muted-foreground">
                    By continuing, you agree to our Terms of Service and Privacy Policy
                  </p>
                </>
              ) : (
                <>
                  <div className="text-center space-y-2">
                    <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Video className="h-10 w-10 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold text-foreground">Connect with Your Counselor</h2>
                    <p className="text-muted-foreground">Your assigned medical professional</p>
                  </div>

                  <div className="bg-muted/50 rounded-lg p-6 space-y-4">
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-muted-foreground">Counselor Name</p>
                      <p className="text-lg font-semibold text-foreground">Dhyanchand Gond</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Button onClick={handleStartVideoCall} className="w-full text-base font-semibold" size="lg">
                      Start Video Call
                    </Button>
                    <Button
                      variant="outline"
                      onClick={handleCloseModal}
                      className="w-full text-base bg-transparent"
                      size="lg"
                    >
                      Cancel
                    </Button>
                  </div>

                  <p className="text-xs text-center text-muted-foreground">
                    You will be redirected to a secure Google Meet video call
                  </p>
                </>
              )}
            </CardContent>
          </Card>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-block">
                <span className="text-sm font-medium text-primary bg-primary/10 px-4 py-1.5 rounded-full">
                  Healthcare You Can Trust
                </span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-balance text-foreground">
                Talk to a Licensed Medical Counselor — Anytime, Anywhere
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed text-pretty max-w-xl">
                Secure video consultations with trained counselors, enhanced by AI-powered medical insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-base font-semibold" onClick={() => setShowConsultationModal(true)}>
                  Start Video Consultation
                </Button>
              </div>
              <div className="flex items-center gap-6 text-sm text-muted-foreground pt-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>Licensed Professionals</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="h-5 w-5 text-primary" />
                  <span>HIPAA Compliant</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-muted/50 border border-border shadow-2xl">
                <img
                  src="/professional-video-call-consultation-between-patie.jpg"
                  alt="Video consultation interface"
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Safety */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance text-foreground">
              Your Privacy & Safety Come First
            </h2>

            <div className="grid gap-6 sm:grid-cols-3 text-center">
              <div className="space-y-3">
                <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto">
                  <Lock className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">End-to-End Encrypted</h3>
                <p className="text-sm text-muted-foreground">
                  All video calls are protected with military-grade encryption
                </p>
              </div>

              <div className="space-y-3">
                <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto">
                  <Shield className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">HIPAA Compliant</h3>
                <p className="text-sm text-muted-foreground">Your medical data is protected and confidential</p>
              </div>

              <div className="space-y-3">
                <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">Licensed Professionals</h3>
                <p className="text-sm text-muted-foreground">All counselors are certified medical experts</p>
              </div>
            </div>

            <div className="pt-6">
              <div className="inline-block bg-muted border border-border rounded-lg p-6 text-left max-w-2xl">
                <p className="text-sm font-semibold text-foreground mb-2">⚕️ Medical Disclaimer</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  This platform provides medical consultations for non-emergency health concerns. It does not replace
                  emergency medical services. If you are experiencing a medical emergency, please call 911 or visit your
                  nearest emergency room immediately.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-balance text-foreground">
              Connect with a Medical Counselor Now
            </h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Professional healthcare support is just one click away. Start your secure video consultation today.
            </p>
            <div>
              <Button size="lg" className="text-base font-semibold px-8" onClick={() => setShowConsultationModal(true)}>
                Start Secure Video Call
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30">
        <div className="container mx-auto px-4 py-12">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">MediConnect</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                AI-assisted medical consultations with licensed professionals.
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-foreground">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    HIPAA Compliance
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-foreground">Support</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-foreground">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Press
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
              <p>© 2025 MediConnect. All rights reserved.</p>
              <p className="text-center sm:text-right">This platform does not replace emergency medical services.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
