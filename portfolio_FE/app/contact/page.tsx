import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, MessageCircle, Clock, Send } from "lucide-react"
import { ContactFormClient } from "@/components/contact-form-client"

export default function ContactUs() {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_3bxel59"
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Get in touch with our team. We're here to help you succeed with your portfolio
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Send className="w-5 h-5" />
              Send us a Message
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ContactFormClient serviceId={serviceId} templateId={templateId} publicKey={publicKey} />
            <div className="text-center mt-3 text-sm text-muted-foreground">
              Or email us directly at
              {" "}
              <a className="underline" href="mailto:2300033535@kluniversity.in">2300033535@kluniversity.in</a>
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <div className="space-y-8">
          {/* Contact Details */}
          <Card>
            <CardHeader>
              <CardTitle>Get in Touch</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-muted-foreground">2300033535@kluniversity.in</p>
                  <p className="text-sm text-muted-foreground">We'll respond within 24 hours</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-muted-foreground">+91 9876543210</p>
                  <p className="text-sm text-muted-foreground">Mon-Fri, 9AM-6PM PST</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold">Address</h3>
                  <p className="text-muted-foreground">
                    K L University<br />
                    Guntur District, Vijayawada<br />
                    AP 520001, India
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Support Hours */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Support Hours
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="text-muted-foreground">9:00 AM - 6:00 PM PST</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="text-muted-foreground">10:00 AM - 4:00 PM PST</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-muted-foreground">Closed</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Live Chat */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                Live Chat
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Need immediate help? Chat with our support team for real-time assistance.
              </p>
              <Button className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground" variant="secondary">
                <MessageCircle className="w-4 h-4 mr-2" />
                Start Live Chat
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">How quickly will I receive a response?</h3>
              <p className="text-muted-foreground text-sm">
                We aim to respond to all inquiries within 24 hours during business days. 
                For urgent issues, please use our live chat feature.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">What information should I include in my message?</h3>
              <p className="text-muted-foreground text-sm">
                Please include your account email, a detailed description of your issue, 
                and any relevant screenshots or error messages.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">Do you offer phone support?</h3>
              <p className="text-muted-foreground text-sm">
                Yes, phone support is available for Pro and Enterprise customers during 
                business hours. Free users can access email and chat support.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">Can you help with portfolio design advice?</h3>
              <p className="text-muted-foreground text-sm">
                Absolutely! Our team includes design experts who can provide guidance 
                on portfolio structure, content, and best practices.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}