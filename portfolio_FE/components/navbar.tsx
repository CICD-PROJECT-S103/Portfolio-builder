"use client"

import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Palette, User, UserPlus, LogOut, Menu, X } from "lucide-react"
import { useState } from "react"

export function Navbar() {
  const pathname = usePathname()
  const isDashboard = pathname === "/dashboard"
  const showLogout = pathname === "/dashboard" || pathname === "/templates" || pathname === "/about"
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 relative">
        <div className={`flex items-center ${isDashboard ? 'justify-between' : 'justify-between'}`}>
          {/* Logo/Brand */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Palette className="w-3 h-3 sm:w-5 sm:h-5 text-white" />
            </div>
            <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              PortfolioCraft
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className={`hidden lg:flex items-center gap-6 ${isDashboard ? 'absolute left-1/2 transform -translate-x-1/2' : ''}`}>
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

          {/* Desktop Auth Buttons */}
          <div className="hidden sm:flex items-center gap-2 lg:gap-3">
            <ThemeToggle />
            {!showLogout && (
              <>
                <Link href="/login">
                  <Button variant="ghost" size="sm" className="text-sm">
                    <User className="w-4 h-4 mr-1 lg:mr-2" />
                    <span className="hidden md:inline">Sign In</span>
                    <span className="md:hidden">In</span>
                  </Button>
                </Link>
                <Link href="/signup">
                  <Button size="sm" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-sm">
                    <UserPlus className="w-4 h-4 mr-1 lg:mr-2" />
                    <span className="hidden md:inline">Sign Up</span>
                    <span className="md:hidden">Up</span>
                  </Button>
                </Link>
              </>
            )}
            {showLogout && (
              <Button size="sm" variant="outline" className="text-sm">
                <LogOut className="w-4 h-4 mr-1 lg:mr-2" />
                <span className="hidden md:inline">Logout</span>
                <span className="md:hidden">Out</span>
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 sm:hidden">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border sm:hidden">
            <div className="container mx-auto px-4 py-4 space-y-4">
              {/* Mobile Navigation Links */}
              <div className="space-y-2">
                <Link 
                  href="/features" 
                  className="block py-2 text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Features
                </Link>
                <Link 
                  href="/templates" 
                  className="block py-2 text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Templates
                </Link>
                <Link 
                  href="/about" 
                  className="block py-2 text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </Link>
              </div>
              
              {/* Mobile Auth Buttons */}
              <div className="space-y-2 pt-4 border-t border-border">
                {!showLogout && (
                  <>
                    <Link href="/login" className="block" onClick={() => setMobileMenuOpen(false)}>
                      <Button variant="ghost" size="sm" className="w-full justify-start">
                        <User className="w-4 h-4 mr-2" />
                        Sign In
                      </Button>
                    </Link>
                    <Link href="/signup" className="block" onClick={() => setMobileMenuOpen(false)}>
                      <Button size="sm" className="w-full justify-start bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                        <UserPlus className="w-4 h-4 mr-2" />
                        Sign Up
                      </Button>
                    </Link>
                  </>
                )}
                {showLogout && (
                  <Button size="sm" variant="outline" className="w-full justify-start">
                    <LogOut className="w-4 h-4 mr-2" />
                    Logout
                  </Button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}