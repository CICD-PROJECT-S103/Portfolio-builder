'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  type User as FirebaseUser,
} from 'firebase/auth'
import { auth } from '@/lib/firebase'
import { removeAuthToken, setAuthToken } from '@/lib/api'

interface User {
  uid: string
  email: string | null
  fullname: string
  photoURL?: string | null
}

interface AuthContextType {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
  signInWithEmail: (email: string, password: string) => Promise<void>
  signUpWithEmail: (fullname: string, email: string, password: string) => Promise<void>
  signInWithGoogle: () => Promise<void>
  logout: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

const transformUser = (firebaseUser: FirebaseUser): User => {
  const fallbackName = firebaseUser.email?.split('@')[0] ?? 'User'

  return {
    uid: firebaseUser.uid,
    email: firebaseUser.email,
    fullname: firebaseUser.displayName?.trim() || fallbackName,
    photoURL: firebaseUser.photoURL ?? undefined,
  }
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      try {
        if (firebaseUser) {
          const [token] = await Promise.all([firebaseUser.getIdToken()])
          if (token) {
            setAuthToken(token)
          }

          const authUser = transformUser(firebaseUser)
          setUser(authUser)
          localStorage.setItem('user', JSON.stringify(authUser))
        } else {
          setUser(null)
          removeAuthToken()
          localStorage.removeItem('user')
        }
      } catch (error) {
        console.error('Authentication state handling failed:', error)
      } finally {
        setIsLoading(false)
      }
    })

    return () => unsubscribe()
  }, [])

  const signInWithEmail = async (email: string, password: string) => {
    await signInWithEmailAndPassword(auth, email, password)
  }

  const signUpWithEmail = async (fullname: string, email: string, password: string) => {
    const credentials = await createUserWithEmailAndPassword(auth, email, password)

    if (fullname.trim()) {
      await updateProfile(credentials.user, { displayName: fullname })
    }
  }

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider()
    provider.setCustomParameters({ prompt: 'select_account' })
    await signInWithPopup(auth, provider)
  }

  const logout = async () => {
    try {
      await signOut(auth)
    } finally {
      setUser(null)
      removeAuthToken()
      localStorage.removeItem('user')
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        signInWithEmail,
        signUpWithEmail,
        signInWithGoogle,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
