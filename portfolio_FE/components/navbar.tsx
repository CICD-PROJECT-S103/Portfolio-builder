"use client"

import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Palette, User, UserPlus, LogOut } from "lucide-react"

export function Navbar() {
  const pathname = usePathname()
  const isDashboard = pathname === "/dashboard"
  const showLogout = pathname === "/dashboard" || pathname === "/templates" || pathname === "/about"

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-3 relative">
        <div className={`flex items-center ${isDashboard ? 'justify-between' : 'justify-between'}`}>
          {/* Logo/Brand */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Palette className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              PortfolioCraft
            </span>
          </Link>

          {/* Navigation Links */}
          <div className={`hidden md:flex items-center gap-6 ${isDashboard ? 'absolute left-1/2 transform -translate-x-1/2' : ''}`}>
            <Link href="/features" className="text-muted-foreground hover:text-foreground transition-colors">
              Features
            </Link>
            <Link href="/templates" className="text-muted-foreground hover:text-foreground transition-colors">
              Templates
            </Link>
            <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            {!showLogout && (
              <>
                <Link href="/login">
                  <Button variant="ghost" size="sm" className="hidden sm:flex">
                    <User className="w-4 h-4 mr-2" />
                    Sign In
                  </Button>
                </Link>
                <Link href="/signup">
                  <Button size="sm" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                    <UserPlus className="w-4 h-4 mr-2" />
                    Sign Up
                  </Button>
                </Link>
              </>
            )}
            {showLogout && (
              <Link href="/">
                <Button variant="ghost" size="sm" className="flex items-center">
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}