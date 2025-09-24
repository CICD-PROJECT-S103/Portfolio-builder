"use client"

import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import { Palette, User, UserPlus, LogOut } from "lucide-react"

export function Navbar() {
  const pathname = usePathname()
  const router = useRouter()
  
  // Check if user is actually logged in
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isClient, setIsClient] = useState(false)
  
  useEffect(() => {
    // Set client flag to true after hydration
    setIsClient(true)
    
    // Check for authentication token or user data in localStorage
    const checkAuthStatus = () => {
      if (typeof window !== 'undefined') {
        const authToken = localStorage.getItem('authToken')
        const userData = localStorage.getItem('userData')
        const loggedIn = !!(authToken || userData)
        console.log('Auth check:', { authToken: !!authToken, userData: !!userData, loggedIn })
        setIsLoggedIn(loggedIn)
      }
    }
    
    // Check on mount
    checkAuthStatus()
    
    // Listen for storage changes (when user logs in/out in another tab)
    window.addEventListener('storage', checkAuthStatus)
    
    // Listen for custom auth events
    window.addEventListener('authStateChange', checkAuthStatus)
    
    return () => {
      window.removeEventListener('storage', checkAuthStatus)
      window.removeEventListener('authStateChange', checkAuthStatus)
    }
  }, [])
  
  // Remove trailing slashes for consistent comparison
  const normalizedPath = pathname.replace(/\/$/, '') || '/'
  const isDashboard = normalizedPath === "/dashboard" || normalizedPath === "/builder"
  
  // Only show logout if user is actually logged in AND on protected routes
  const protectedRoutes = ['/dashboard', '/builder']
  const isOnProtectedRoute = protectedRoutes.includes(normalizedPath)
  const showLogout = isClient && isLoggedIn && (isOnProtectedRoute || normalizedPath === '/templates' || normalizedPath === '/about')
  
  // Debug logging
  console.log('Navbar state:', { 
    isClient, 
    isLoggedIn, 
    normalizedPath, 
    isOnProtectedRoute, 
    showLogout 
  })
  


  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-3 relative">
        <div className={`flex items-center ${isDashboard ? 'justify-between' : 'justify-between'}`}>
          {/* Logo/Brand */}
          <Link href={isClient && isLoggedIn ? "/dashboard" : "/landing"} className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Palette className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              PortfolioCraft
            </span>
          </Link>

          {/* Navigation Links */}
          <div className={`hidden md:flex items-center gap-6 ${isDashboard ? 'absolute left-1/2 transform -translate-x-1/2' : ''}`}>
            {isClient && isLoggedIn ? (
              // Authenticated navigation
              <>
                <Link href="/dashboard" className="text-muted-foreground hover:text-foreground transition-colors">
                  Dashboard
                </Link>
                <Link href="/templates" className="text-muted-foreground hover:text-foreground transition-colors">
                  Templates
                </Link>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About
                </Link>
              </>
            ) : (
              // Public navigation
              <>
                <Link href="/features" className="text-muted-foreground hover:text-foreground transition-colors">
                  Features
                </Link>
                <Link href="/templates" className="text-muted-foreground hover:text-foreground transition-colors">
                  Templates
                </Link>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About
                </Link>
              </>
            )}
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
              <Button 
                variant="ghost" 
                size="sm" 
                className="flex items-center"
                onClick={() => {
                  // Handle logout logic here (clear session, localStorage, etc.)
                  // Clear any authentication tokens or user data
                  localStorage.removeItem('authToken')
                  localStorage.removeItem('userData')
                  
                  // Update authentication state
                  setIsLoggedIn(false)
                  
                  // Dispatch custom event for other components
                  window.dispatchEvent(new CustomEvent('authStateChange'))
                  
                  // Redirect to landing page
                  router.push('/landing')
                }}
              >
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}