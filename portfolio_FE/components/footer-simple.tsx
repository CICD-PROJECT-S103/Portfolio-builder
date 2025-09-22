"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Github, 
  Twitter, 
  Linkedin,
  Palette,
  Heart
} from "lucide-react"
import { useState } from "react"

export function FooterSimple() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter signup
    setEmail("")
  }

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 py-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-md flex items-center justify-center">
                <Palette className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                PortfolioCraft
              </span>
            </div>
            <p className="text-sm text-muted-foreground mb-4 max-w-md">
              Create stunning professional portfolios that showcase your skills and impress employers.
            </p>
            
            {/* Newsletter */}
            <form onSubmit={handleSubmit} className="flex gap-2 max-w-sm">
              <Input
                type="email"
                placeholder="Enter email for updates"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="text-sm"
                required
              />
              <Button type="submit" size="sm">
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-medium text-foreground mb-3">Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#templates" className="text-muted-foreground hover:text-primary transition-colors">Templates</a></li>
              <li><a href="#features" className="text-muted-foreground hover:text-primary transition-colors">Features</a></li>
              <li><a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors">Pricing</a></li>
              <li><a href="#help" className="text-muted-foreground hover:text-primary transition-colors">Help</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-medium text-foreground mb-3">Contact</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-3 h-3" />
                <a href="mailto:hello@portfoliocraft.com" className="hover:text-primary transition-colors">
                  2300030442@kluniversity.in
                </a>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-3 h-3" />
                <span>+91 9515029710</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-3 h-3" />
                <span>Vijayawada, AP</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-4 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground flex items-center gap-1">
              © 2025 PortfolioCraft. Made with <Heart className="w-3 h-3 text-red-500 fill-current" /> for professionals.
            </div>
            <div className="flex items-center gap-4">
              <div className="flex gap-3">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Github className="w-4 h-4" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
              <div className="flex gap-3 text-xs">
                <a href="#privacy" className="text-muted-foreground hover:text-primary transition-colors">Privacy</a>
                <a href="#terms" className="text-muted-foreground hover:text-primary transition-colors">Terms</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}