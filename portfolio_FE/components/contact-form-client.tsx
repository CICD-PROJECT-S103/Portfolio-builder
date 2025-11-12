"use client"

import * as React from "react"
import emailjs from "@emailjs/browser"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Send } from "lucide-react"

type Props = {
  serviceId?: string
  templateId?: string
  publicKey?: string
}

export function ContactFormClient({ serviceId, templateId, publicKey }: Props) {
  const [submitting, setSubmitting] = React.useState(false)
  // Provide safe defaults from your provided IDs so sending works even if envs are not picked up
  const resolvedService = serviceId || "service_3bxel59"
  const resolvedTemplate = templateId || "template_lyz3fkp"
  const resolvedKey = publicKey || "9PWOyvlTD8ddJbtz3"

  const hasService = Boolean(resolvedService)
  const hasTemplate = Boolean(resolvedTemplate)
  const hasKey = Boolean(resolvedKey)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    const firstName = (data.get("firstName") as string) || ""
    const lastName = (data.get("lastName") as string) || ""
    const fromEmail = (data.get("email") as string) || ""
    const subject = (data.get("subject") as string) || "Feedback from PortfolioCraft"
    const category = (data.get("category") as string) || "General"
    const message = (data.get("message") as string) || ""

    const fullName = [firstName, lastName].filter(Boolean).join(" ")

    if (!(hasService && hasTemplate && hasKey)) {
      alert("Email service not configured. Please set NEXT_PUBLIC_EMAILJS_SERVICE_ID, NEXT_PUBLIC_EMAILJS_TEMPLATE_ID and NEXT_PUBLIC_EMAILJS_PUBLIC_KEY.")
      return
    }

    try {
      setSubmitting(true)
      await emailjs.send(
        resolvedService,
        resolvedTemplate,
        {
          to_email: "2300033535@kluniversity.in",
          from_name: fullName || fromEmail || "Anonymous",
          from_email: fromEmail,
          subject,
          category,
          message,
        },
        { publicKey: resolvedKey }
      )
      form.reset()
      alert("Thanks! Your message was sent.")
    } catch (err) {
      console.error("EmailJS send failed", err)
      alert("Sorry, sending failed. Please try again later.")
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName">First Name *</Label>
            <Input id="firstName" name="firstName" placeholder="John" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">Last Name *</Label>
            <Input id="lastName" name="lastName" placeholder="Doe" required />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email Address *</Label>
          <Input id="email" name="email" type="email" placeholder="john@example.com" required />
        </div>

        <div className="space-y-2">
          <Label htmlFor="subject">Subject *</Label>
          <Input id="subject" name="subject" placeholder="How can we help you?" required />
        </div>

        <div className="space-y-2">
          <Label htmlFor="category">Category</Label>
          <select
            id="category"
            name="category"
            className="w-full px-3 py-2 border border-border rounded-md bg-background"
          >
            <option value="">Select a category</option>
            <option value="general">General Inquiry</option>
            <option value="technical">Technical Support</option>
            <option value="billing">Billing & Accounts</option>
            <option value="feature">Feature Request</option>
            <option value="bug">Bug Report</option>
          </select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Message *</Label>
          <Textarea
            id="message"
            name="message"
            placeholder="Please describe your question or issue in detail..."
            rows={6}
            required
          />
        </div>

        <Button type="submit" disabled={submitting} className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 disabled:opacity-70">
          <Send className="w-4 h-4 mr-2" />
          {submitting ? "Sending..." : "Send Message"}
        </Button>
      </form>

      {process.env.NODE_ENV !== 'production' && (
        <div className="mt-3 text-xs text-muted-foreground">
          <p>Debug (dev only): EmailJS config — Service: {String(hasService)}, Template: {String(hasTemplate)}, Key: {String(hasKey)}</p>
        </div>
      )}
    </>
  )
}
