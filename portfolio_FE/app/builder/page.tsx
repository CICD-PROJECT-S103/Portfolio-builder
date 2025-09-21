'use client'

import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
import { ModernTemplate } from '@/components/portfolio-templates/modern-template'
import { MinimalTemplate } from '@/components/portfolio-templates/minimal-template'
import { CreativeTemplate } from '@/components/portfolio-templates/creative-template'
import { ProfessionalTemplate } from '@/components/portfolio-templates/professional-template'

// Sample portfolio data for demonstration
const sampleData = {
  personalInfo: {
    name: "John Doe",
    title: "Full Stack Developer",
    bio: "Passionate developer with 5+ years of experience building web applications. I love creating innovative solutions and bringing ideas to life through code.",
    location: "San Francisco, CA",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    website: "https://johndoe.dev",
    github: "https://github.com/johndoe",
    linkedin: "https://linkedin.com/in/johndoe"
  },
  projects: [
    {
      id: "1",
      title: "E-commerce Platform",
      description: "Full-stack e-commerce solution with React and Node.js",
      technologies: ["React", "Node.js", "MongoDB"],
      githubUrl: "https://github.com/johndoe/ecommerce",
      liveUrl: "https://demo.example.com"
    },
    {
      id: "2",
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates",
      technologies: ["Next.js", "Socket.io", "PostgreSQL"],
      githubUrl: "https://github.com/johndoe/taskapp",
      liveUrl: "https://tasks.example.com"
    }
  ],
  experiences: [
    {
      id: "1",
      company: "Tech Corp",
      position: "Senior Developer",
      duration: "2021 - Present",
      description: "Lead development of core platform features"
    },
    {
      id: "2",
      company: "StartupXYZ",
      position: "Full Stack Developer",
      duration: "2019 - 2021",
      description: "Built scalable web applications from scratch"
    }
  ],
  skills: ["React", "Node.js", "TypeScript", "Python", "AWS"]
}

function BuilderContent() {
  const searchParams = useSearchParams()
  const templateId = searchParams.get('template')

  const renderTemplate = () => {
    switch (templateId) {
      case 'modern':
        return <ModernTemplate {...sampleData} />
      case 'minimal':
        return <MinimalTemplate {...sampleData} />
      case 'creative':
        return <CreativeTemplate {...sampleData} />
      case 'professional':
        return <ProfessionalTemplate {...sampleData} />
      default:
        return (
          <div className="container mx-auto px-4 py-12 text-center">
            <h1 className="text-4xl font-bold mb-4">Portfolio Builder</h1>
            <p className="text-xl text-muted-foreground">
              Please select a template to get started.
            </p>
          </div>
        )
    }
  }

  return (
    <div className="min-h-screen">
      {renderTemplate()}
    </div>
  )
}

export default function Builder() {
  return (
    <Suspense fallback={
      <div className="container mx-auto px-4 py-12 text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
        <p className="mt-4">Loading template...</p>
      </div>
    }>
      <BuilderContent />
    </Suspense>
  )
}