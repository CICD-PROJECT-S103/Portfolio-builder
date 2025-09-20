"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { User, Briefcase, Code, FileText, Eye, Palette, Monitor, Settings, Plus, X } from "lucide-react"
import { ModernTemplate } from "../components/portfolio-templates/modern-template"
import { MinimalTemplate } from "../components/portfolio-templates/minimal-template"
import { CreativeTemplate } from "../components/portfolio-templates/creative-template"
import { ProfessionalTemplate } from "../components/portfolio-templates/professional-template"

interface PersonalInfo {
  name: string
  title: string
  email: string
  phone: string
  location: string
  bio: string
  github: string
  linkedin: string
  website: string
}

interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  liveUrl: string
  githubUrl: string
}

interface Experience {
  id: string
  company: string
  position: string
  duration: string
  description: string
}

interface Template {
  id: string
  name: string
  description: string
  preview: string
  style: "modern" | "minimal" | "creative" | "professional"
  color: string
}

interface TemplateCustomization {
  colorScheme: string
  fontFamily: string
  accentColor: string
  layout: string
  showContactInfo: boolean
  showSocialLinks: boolean
}

export function PortfolioBuilder() {
  const [currentStep, setCurrentStep] = useState(0)
  const [selectedTemplate, setSelectedTemplate] = useState<string>("")
  const [isExporting, setIsExporting] = useState(false)
  const [exportComplete, setExportComplete] = useState(false)
  const [exportType, setExportType] = useState<"download" | "deploy" | null>(null)
  const [customization, setCustomization] = useState<TemplateCustomization>({
    colorScheme: "default",
    fontFamily: "inter",
    accentColor: "blue",
    layout: "standard",
    showContactInfo: true,
    showSocialLinks: true,
  })
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo>({
    name: "",
    title: "",
    email: "",
    phone: "",
    location: "",
    bio: "",
    github: "",
    linkedin: "",
    website: "",
  })
  const [projects, setProjects] = useState<Project[]>([])
  const [experiences, setExperiences] = useState<Experience[]>([])
  const [skills, setSkills] = useState<string[]>([])
  const [newSkill, setNewSkill] = useState("")

  const steps = [
    { title: "Template", icon: Palette },
    { title: "Customize", icon: Settings },
    { title: "Personal Info", icon: User },
    { title: "Experience", icon: Briefcase },
    { title: "Projects", icon: Code },
    { title: "Skills", icon: FileText },
    { title: "Preview", icon: Eye },
  ]

  const templates: Template[] = [
    {
      id: "modern",
      name: "Modern Developer",
      description: "Clean, contemporary design with bold typography and smooth animations",
      preview: "/modern-portfolio-template-with-dark-theme-and-clea.jpg",
      style: "modern",
      color: "bg-gradient-to-br from-blue-600 to-purple-600",
    },
    {
      id: "minimal",
      name: "Minimal Professional",
      description: "Simple, elegant layout focusing on content and readability",
      preview: "/minimal-portfolio-template-with-white-background-a.jpg",
      style: "minimal",
      color: "bg-gradient-to-br from-gray-600 to-gray-800",
    },
    {
      id: "creative",
      name: "Creative Showcase",
      description: "Vibrant, artistic design perfect for designers and creative professionals",
      preview: "/creative-portfolio-template-with-colorful-design-a.jpg",
      style: "creative",
      color: "bg-gradient-to-br from-pink-500 to-orange-500",
    },
    {
      id: "professional",
      name: "Corporate Professional",
      description: "Traditional, business-focused design ideal for corporate environments",
      preview: "/professional-portfolio-template-with-corporate-des.jpg",
      style: "professional",
      color: "bg-gradient-to-br from-slate-600 to-slate-800",
    },
  ]

  const colorSchemes = [
    { id: "default", name: "Default", description: "Original template colors" },
    { id: "monochrome", name: "Monochrome", description: "Black and white with gray accents" },
    { id: "warm", name: "Warm", description: "Warm oranges and reds" },
    { id: "cool", name: "Cool", description: "Cool blues and greens" },
    { id: "earth", name: "Earth", description: "Natural browns and greens" },
  ]

  const fontFamilies = [
    { id: "inter", name: "Inter", description: "Modern and clean sans-serif" },
    { id: "roboto", name: "Roboto", description: "Google's friendly sans-serif" },
    { id: "poppins", name: "Poppins", description: "Geometric sans-serif with personality" },
    { id: "playfair", name: "Playfair Display", description: "Elegant serif for headings" },
    { id: "source", name: "Source Sans Pro", description: "Professional and readable" },
  ]

  const accentColors = [
    { id: "blue", name: "Blue", color: "bg-blue-500" },
    { id: "green", name: "Green", color: "bg-green-500" },
    { id: "purple", name: "Purple", color: "bg-purple-500" },
    { id: "red", name: "Red", color: "bg-red-500" },
    { id: "orange", name: "Orange", color: "bg-orange-500" },
    { id: "pink", name: "Pink", color: "bg-pink-500" },
  ]

  const layoutOptions = [
    { id: "standard", name: "Standard", description: "Traditional top-to-bottom layout" },
    { id: "sidebar", name: "Sidebar", description: "Side navigation with main content" },
    { id: "grid", name: "Grid", description: "Card-based grid layout" },
    { id: "timeline", name: "Timeline", description: "Chronological timeline layout" },
  ]

  const addProject = () => {
    const newProject: Project = {
      id: Date.now().toString(),
      title: "",
      description: "",
      technologies: [],
      liveUrl: "",
      githubUrl: "",
    }
    setProjects([...projects, newProject])
  }

  const updateProject = (id: string, field: keyof Project, value: string | string[]) => {
    setProjects(projects.map((project) => (project.id === id ? { ...project, [field]: value } : project)))
  }

  const removeProject = (id: string) => {
    setProjects(projects.filter((project) => project.id !== id))
  }

  const addExperience = () => {
    const newExperience: Experience = {
      id: Date.now().toString(),
      company: "",
      position: "",
      duration: "",
      description: "",
    }
    setExperiences([...experiences, newExperience])
  }

  const updateExperience = (id: string, field: keyof Experience, value: string) => {
    setExperiences(experiences.map((exp) => (exp.id === id ? { ...exp, [field]: value } : exp)))
  }

  const removeExperience = (id: string) => {
    setExperiences(experiences.filter((exp) => exp.id !== id))
  }

  const addSkill = () => {
    if (newSkill.trim() && !skills.includes(newSkill.trim())) {
      setSkills([...skills, newSkill.trim()])
      setNewSkill("")
    }
  }

  const removeSkill = (skill: string) => {
    setSkills(skills.filter((s) => s !== skill))
  }

  const generatePortfolioFiles = () => {
    const selectedTemplateData = templates.find((t) => t.id === selectedTemplate)

    // Generate the main portfolio page based on selected template
    const portfolioPageContent = `import { ${selectedTemplate.charAt(0).toUpperCase() + selectedTemplate.slice(1)}Template } from '../components/portfolio-templates/${selectedTemplate}-template'

const portfolioData = {
  personalInfo: ${JSON.stringify(personalInfo, null, 2)},
  projects: ${JSON.stringify(projects, null, 2)},
  experiences: ${JSON.stringify(experiences, null, 2)},
  skills: ${JSON.stringify(skills, null, 2)},
  customization: ${JSON.stringify(customization, null, 2)}
}

export default function Portfolio() {
  return (
    <${selectedTemplate.charAt(0).toUpperCase() + selectedTemplate.slice(1)}Template
      personalInfo={portfolioData.personalInfo}
      projects={portfolioData.projects}
      experiences={portfolioData.experiences}
      skills={portfolioData.skills}
      customization={portfolioData.customization}
    />
  )
}`

    // Generate package.json
    const packageJson = {
      name: `${personalInfo.name.toLowerCase().replace(/\s+/g, "-")}-portfolio`,
      version: "1.0.0",
      description: `Professional portfolio for ${personalInfo.name}`,
      scripts: {
        dev: "next dev",
        build: "next build",
        start: "next start",
        lint: "next lint",
      },
      dependencies: {
        next: "^14.0.0",
        react: "^18.0.0",
        "react-dom": "^18.0.0",
        tailwindcss: "^3.0.0",
        "lucide-react": "^0.263.1",
      },
      devDependencies: {
        "@types/node": "^20.0.0",
        "@types/react": "^18.0.0",
        "@types/react-dom": "^18.0.0",
        typescript: "^5.0.0",
      },
    }

    return {
      "app/page.tsx": portfolioPageContent,
      "package.json": JSON.stringify(packageJson, null, 2),
      "README.md": `# ${personalInfo.name}'s Portfolio

This is a professional portfolio built with Next.js and Tailwind CSS.

## Getting Started

1. Install dependencies:
\`\`\`bash
npm install
\`\`\`

2. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Customization

This portfolio includes the following customizations:
- Color Scheme: ${colorSchemes.find((c) => c.id === customization.colorScheme)?.name}
- Font Family: ${fontFamilies.find((f) => f.id === customization.fontFamily)?.name}
- Accent Color: ${accentColors.find((a) => a.id === customization.accentColor)?.name}
- Layout: ${layoutOptions.find((l) => l.id === customization.layout)?.name}

## Deployment

This portfolio can be easily deployed to Vercel, Netlify, or any other hosting platform that supports Next.js.

## Template

This portfolio uses the ${selectedTemplateData?.name} template.
`,
    }
  }

  const handleExport = async (type: "download" | "deploy") => {
    setIsExporting(true)
    setExportType(type)

    try {
      // Simulate export process
      await new Promise((resolve) => setTimeout(resolve, 3000))

      if (type === "download") {
        // Generate files and create download
        const files = generatePortfolioFiles()

        // In a real implementation, you would create a ZIP file here
        // For now, we'll simulate the download
        console.log("Generated files:", files)

        // Create a simple download simulation
        const blob = new Blob([JSON.stringify(files, null, 2)], { type: "application/json" })
        const url = URL.createObjectURL(blob)
        const a = document.createElement("a")
        a.href = url
        a.download = `${personalInfo.name.toLowerCase().replace(/\s+/g, "-")}-portfolio.json`
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
        URL.revokeObjectURL(url)
      }

      setExportComplete(true)
    } catch (error) {
      console.error("Export failed:", error)
    } finally {
      setIsExporting(false)
    }
  }

  const resetExport = () => {
    setExportComplete(false)
    setExportType(null)
  }

  const renderExperienceStep = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Work Experience</h3>
        <Button onClick={addExperience} variant="outline" size="sm">
          <Plus className="w-4 h-4 mr-2" />
          Add Experience
        </Button>
      </div>

      {experiences.map((exp) => (
        <Card key={exp.id} className="relative">
          <Button onClick={() => removeExperience(exp.id)} variant="ghost" size="sm" className="absolute top-2 right-2">
            <X className="w-4 h-4" />
          </Button>
          <CardContent className="pt-6 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Company *</Label>
                <Input
                  value={exp.company}
                  onChange={(e) => updateExperience(exp.id, "company", e.target.value)}
                  placeholder="Company Name"
                />
              </div>
              <div className="space-y-2">
                <Label>Position *</Label>
                <Input
                  value={exp.position}
                  onChange={(e) => updateExperience(exp.id, "position", e.target.value)}
                  placeholder="Job Title"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label>Duration *</Label>
              <Input
                value={exp.duration}
                onChange={(e) => updateExperience(exp.id, "duration", e.target.value)}
                placeholder="Jan 2020 - Present"
              />
            </div>
            <div className="space-y-2">
              <Label>Description *</Label>
              <Textarea
                value={exp.description}
                onChange={(e) => updateExperience(exp.id, "description", e.target.value)}
                placeholder="Describe your role, responsibilities, and achievements..."
                rows={3}
              />
            </div>
          </CardContent>
        </Card>
      ))}

      {experiences.length === 0 && (
        <div className="text-center py-8 text-muted-foreground">
          <Briefcase className="w-12 h-12 mx-auto mb-4 opacity-50" />
          <p>No work experience added yet.</p>
          <p className="text-sm">Click "Add Experience" to get started.</p>
        </div>
      )}
    </div>
  )

  const renderProjectsStep = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Projects</h3>
        <Button onClick={addProject} variant="outline" size="sm">
          <Plus className="w-4 h-4 mr-2" />
          Add Project
        </Button>
      </div>

      {projects.map((project) => (
        <Card key={project.id} className="relative">
          <Button
            onClick={() => removeProject(project.id)}
            variant="ghost"
            size="sm"
            className="absolute top-2 right-2"
          >
            <X className="w-4 h-4" />
          </Button>
          <CardContent className="pt-6 space-y-4">
            <div className="space-y-2">
              <Label>Project Title *</Label>
              <Input
                value={project.title}
                onChange={(e) => updateProject(project.id, "title", e.target.value)}
                placeholder="My Awesome Project"
              />
            </div>
            <div className="space-y-2">
              <Label>Description *</Label>
              <Textarea
                value={project.description}
                onChange={(e) => updateProject(project.id, "description", e.target.value)}
                placeholder="Describe what this project does and your role in building it..."
                rows={3}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Live URL</Label>
                <Input
                  value={project.liveUrl}
                  onChange={(e) => updateProject(project.id, "liveUrl", e.target.value)}
                  placeholder="https://myproject.com"
                />
              </div>
              <div className="space-y-2">
                <Label>GitHub URL</Label>
                <Input
                  value={project.githubUrl}
                  onChange={(e) => updateProject(project.id, "githubUrl", e.target.value)}
                  placeholder="https://github.com/username/project"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label>Technologies (comma-separated)</Label>
              <Input
                value={project.technologies.join(", ")}
                onChange={(e) =>
                  updateProject(
                    project.id,
                    "technologies",
                    e.target.value
                      .split(",")
                      .map((t) => t.trim())
                      .filter(Boolean),
                  )
                }
                placeholder="React, Node.js, MongoDB, TypeScript"
              />
              <div className="flex flex-wrap gap-2 mt-2">
                {project.technologies.map((tech, index) => (
                  <Badge key={index} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}

      {projects.length === 0 && (
        <div className="text-center py-8 text-muted-foreground">
          <Code className="w-12 h-12 mx-auto mb-4 opacity-50" />
          <p>No projects added yet.</p>
          <p className="text-sm">Click "Add Project" to showcase your work.</p>
        </div>
      )}
    </div>
  )

  const renderSkillsStep = () => (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Technical Skills</h3>
        <div className="flex gap-2">
          <Input
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            placeholder="Add a skill (e.g., JavaScript, React, Python)"
            onKeyPress={(e) => e.key === "Enter" && addSkill()}
          />
          <Button onClick={addSkill} variant="outline">
            <Plus className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="font-medium">Your Skills</h4>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Badge key={skill} variant="secondary" className="text-sm">
              {skill}
              <Button
                onClick={() => removeSkill(skill)}
                variant="ghost"
                size="sm"
                className="ml-2 h-auto p-0 hover:bg-transparent"
              >
                <X className="w-3 h-3" />
              </Button>
            </Badge>
          ))}
        </div>
        {skills.length === 0 && (
          <div className="text-center py-8 text-muted-foreground">
            <FileText className="w-12 h-12 mx-auto mb-4 opacity-50" />
            <p>No skills added yet.</p>
            <p className="text-sm">Add your technical skills to showcase your expertise.</p>
          </div>
        )}
      </div>
    </div>
  )

  const renderPreviewStep = () => {
    const selectedTemplateData = templates.find((t) => t.id === selectedTemplate)
    const isPortfolioComplete =
      personalInfo.name &&
      personalInfo.title &&
      personalInfo.bio &&
      experiences.length > 0 &&
      projects.length > 0 &&
      skills.length > 0

    return (
      <div className="space-y-6">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-2">Portfolio Preview</h3>
          <p className="text-muted-foreground">
            See how your portfolio will look with the {selectedTemplateData?.name} template
          </p>
        </div>

        {/* Template Preview */}
        <Card className="border-2 border-primary/20">
          <CardHeader className="bg-primary/5">
            <CardTitle className="flex items-center gap-2">
              <Monitor className="w-5 h-5" />
              Live Preview - {selectedTemplateData?.name}
            </CardTitle>
            <CardDescription>This is how your portfolio will appear to visitors</CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <div className="border rounded-lg overflow-hidden bg-white">
              <div className="h-96 overflow-y-auto">
                {selectedTemplate === "modern" && (
                  <div className="transform scale-50 origin-top-left w-[200%] h-[200%]">
                    <ModernTemplate
                      personalInfo={personalInfo}
                      projects={projects}
                      experiences={experiences}
                      skills={skills}
                    />
                  </div>
                )}
                {selectedTemplate === "minimal" && (
                  <div className="transform scale-50 origin-top-left w-[200%] h-[200%]">
                    <MinimalTemplate
                      personalInfo={personalInfo}
                      projects={projects}
                      experiences={experiences}
                      skills={skills}
                    />
                  </div>
                )}
                {selectedTemplate === "creative" && (
                  <div className="transform scale-50 origin-top-left w-[200%] h-[200%]">
                    <CreativeTemplate
                      personalInfo={personalInfo}
                      projects={projects}
                      experiences={experiences}
                      skills={skills}
                    />
                  </div>
                )}
                {selectedTemplate === "professional" && (
                  <div className="transform scale-50 origin-top-left w-[200%] h-[200%]">
                    <ProfessionalTemplate
                      personalInfo={personalInfo}
                      projects={projects}
                      experiences={experiences}
                      skills={skills}
                    />
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-sm">
                <User className="w-4 h-4" />
                Personal Info
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{personalInfo.name ? "✓" : "○"}</div>
              <p className="text-xs text-muted-foreground">
                {personalInfo.name && personalInfo.title && personalInfo.bio ? "Complete" : "Incomplete"}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-sm">
                <Briefcase className="w-4 h-4" />
                Experience
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{experiences.length}</div>
              <p className="text-xs text-muted-foreground">
                {experiences.length === 0
                  ? "No experience added"
                  : `${experiences.length} position${experiences.length > 1 ? "s" : ""}`}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-sm">
                <Code className="w-4 h-4" />
                Projects
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{projects.length}</div>
              <p className="text-xs text-muted-foreground">
                {projects.length === 0
                  ? "No projects added"
                  : `${projects.length} project${projects.length > 1 ? "s" : ""}`}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-sm">
                <FileText className="w-4 h-4" />
                Skills
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{skills.length}</div>
              <p className="text-xs text-muted-foreground">
                {skills.length === 0 ? "No skills added" : `${skills.length} skill${skills.length > 1 ? "s" : ""}`}
              </p>
            </CardContent>
          </Card>
        </div>

        {!exportComplete ? (
          <Card
            className={`${isPortfolioComplete ? "bg-green-50 border-green-200" : "bg-yellow-50 border-yellow-200"}`}
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="w-5 h-5" />
                {isPortfolioComplete ? "Ready to Export!" : "Portfolio Status"}
              </CardTitle>
              <CardDescription>
                {isPortfolioComplete
                  ? "Your portfolio is complete and ready to be generated."
                  : "Complete all sections to unlock export options."}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {isPortfolioComplete ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Button
                    onClick={() => handleExport("download")}
                    disabled={isExporting}
                    className="h-auto p-4 flex flex-col items-start gap-2"
                  >
                    <div className="flex items-center gap-2">
                      <Monitor className="w-5 h-5" />
                      <span className="font-semibold">Download ZIP</span>
                    </div>
                    <span className="text-sm opacity-90 text-left">
                      Get a complete Next.js project ready for deployment
                    </span>
                    {isExporting && exportType === "download" && <div className="text-xs">Generating files...</div>}
                  </Button>

                  <Button
                    onClick={() => handleExport("deploy")}
                    disabled={isExporting}
                    variant="outline"
                    className="h-auto p-4 flex flex-col items-start gap-2"
                  >
                    <div className="flex items-center gap-2">
                      <Settings className="w-5 h-5" />
                      <span className="font-semibold">Deploy to Vercel</span>
                    </div>
                    <span className="text-sm opacity-90 text-left">Automatically deploy your portfolio online</span>
                    {isExporting && exportType === "deploy" && <div className="text-xs">Deploying...</div>}
                  </Button>
                </div>
              ) : (
                <div className="text-sm text-muted-foreground">
                  <p className="mb-2">To complete your portfolio, please:</p>
                  <ul className="list-disc list-inside space-y-1">
                    {!personalInfo.name && <li>Add your personal information</li>}
                    {experiences.length === 0 && <li>Add at least one work experience</li>}
                    {projects.length === 0 && <li>Add at least one project</li>}
                    {skills.length === 0 && <li>Add your technical skills</li>}
                  </ul>
                </div>
              )}
            </CardContent>
          </Card>
        ) : (
          <Card className="bg-green-50 border-green-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-800">
                <Settings className="w-5 h-5" />
                Export Complete!
              </CardTitle>
              <CardDescription className="text-green-700">
                Your portfolio has been successfully {exportType === "download" ? "downloaded" : "deployed"}.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-white rounded-lg border">
                  <h4 className="font-semibold mb-2">What's included:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Complete Next.js project structure</li>
                    <li>• {selectedTemplateData?.name} template with your content</li>
                    <li>• Responsive design optimized for all devices</li>
                    <li>• SEO-friendly meta tags and structure</li>
                    <li>• Ready for deployment to any hosting platform</li>
                  </ul>
                </div>
                <Button onClick={resetExport} variant="outline" className="w-full bg-transparent">
                  Create Another Portfolio
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    )
  }

  const renderTemplateStep = () => (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-2">Choose Your Template</h3>
        <p className="text-muted-foreground">Select a template that best represents your professional style</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {templates.map((template) => (
          <Card
            key={template.id}
            className={`cursor-pointer transition-all duration-200 hover:shadow-lg ${
              selectedTemplate === template.id
                ? "ring-2 ring-primary border-primary shadow-lg"
                : "hover:border-primary/50"
            }`}
            onClick={() => setSelectedTemplate(template.id)}
          >
            <div className={`h-32 rounded-t-lg ${template.color} relative overflow-hidden`}>
              <img
                src={template.preview || "/placeholder.svg"}
                alt={template.name}
                className="w-full h-full object-cover opacity-80"
              />
              {selectedTemplate === template.id && (
                <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                  <div className="bg-white rounded-full p-2">
                    <Eye className="w-6 h-6 text-primary" />
                  </div>
                </div>
              )}
            </div>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                {template.name}
                {selectedTemplate === template.id && <Badge variant="default">Selected</Badge>}
              </CardTitle>
              <CardDescription>{template.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>

      {!selectedTemplate && (
        <div className="text-center py-4">
          <p className="text-muted-foreground">Please select a template to continue</p>
        </div>
      )}
    </div>
  )

  const renderCustomizeStep = () => (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-2">Customize Your Template</h3>
        <p className="text-muted-foreground">
          Personalize the {templates.find((t) => t.id === selectedTemplate)?.name} template
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Color Scheme */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Palette className="w-5 h-5" />
              Color Scheme
            </CardTitle>
            <CardDescription>Choose the overall color palette for your portfolio</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {colorSchemes.map((scheme) => (
              <div
                key={scheme.id}
                className={`p-3 rounded-lg border cursor-pointer transition-all ${
                  customization.colorScheme === scheme.id
                    ? "border-primary bg-primary/5"
                    : "border-border hover:border-primary/50"
                }`}
                onClick={() => setCustomization({ ...customization, colorScheme: scheme.id })}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">{scheme.name}</div>
                    <div className="text-sm text-muted-foreground">{scheme.description}</div>
                  </div>
                  {customization.colorScheme === scheme.id && (
                    <Badge variant="default" size="sm">
                      Selected
                    </Badge>
                  )}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Font Family */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="w-5 h-5" />
              Typography
            </CardTitle>
            <CardDescription>Select the font family for your portfolio</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {fontFamilies.map((font) => (
              <div
                key={font.id}
                className={`p-3 rounded-lg border cursor-pointer transition-all ${
                  customization.fontFamily === font.id
                    ? "border-primary bg-primary/5"
                    : "border-border hover:border-primary/50"
                }`}
                onClick={() => setCustomization({ ...customization, fontFamily: font.id })}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">{font.name}</div>
                    <div className="text-sm text-muted-foreground">{font.description}</div>
                  </div>
                  {customization.fontFamily === font.id && (
                    <Badge variant="default" size="sm">
                      Selected
                    </Badge>
                  )}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Accent Color */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Palette className="w-5 h-5" />
              Accent Color
            </CardTitle>
            <CardDescription>Choose an accent color for highlights and buttons</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-3">
              {accentColors.map((color) => (
                <div
                  key={color.id}
                  className={`p-3 rounded-lg border cursor-pointer transition-all text-center ${
                    customization.accentColor === color.id
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/50"
                  }`}
                  onClick={() => setCustomization({ ...customization, accentColor: color.id })}
                >
                  <div className={`w-8 h-8 rounded-full ${color.color} mx-auto mb-2`}></div>
                  <div className="text-sm font-medium">{color.name}</div>
                  {customization.accentColor === color.id && (
                    <Badge variant="default" size="sm" className="mt-1">
                      Selected
                    </Badge>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Layout Options */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Monitor className="w-5 h-5" />
              Layout Style
            </CardTitle>
            <CardDescription>Choose how your content is organized</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {layoutOptions.map((layout) => (
              <div
                key={layout.id}
                className={`p-3 rounded-lg border cursor-pointer transition-all ${
                  customization.layout === layout.id
                    ? "border-primary bg-primary/5"
                    : "border-border hover:border-primary/50"
                }`}
                onClick={() => setCustomization({ ...customization, layout: layout.id })}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">{layout.name}</div>
                    <div className="text-sm text-muted-foreground">{layout.description}</div>
                  </div>
                  {customization.layout === layout.id && (
                    <Badge variant="default" size="sm">
                      Selected
                    </Badge>
                  )}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Display Options */}
      <Card>
        <CardHeader>
          <CardTitle>Display Options</CardTitle>
          <CardDescription>Choose what information to show on your portfolio</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium">Show Contact Information</div>
              <div className="text-sm text-muted-foreground">Display email and phone number</div>
            </div>
            <Button
              variant={customization.showContactInfo ? "default" : "outline"}
              size="sm"
              onClick={() => setCustomization({ ...customization, showContactInfo: !customization.showContactInfo })}
            >
              {customization.showContactInfo ? "Enabled" : "Disabled"}
            </Button>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium">Show Social Links</div>
              <div className="text-sm text-muted-foreground">Display GitHub, LinkedIn, and website links</div>
            </div>
            <Button
              variant={customization.showSocialLinks ? "default" : "outline"}
              size="sm"
              onClick={() => setCustomization({ ...customization, showSocialLinks: !customization.showSocialLinks })}
            >
              {customization.showSocialLinks ? "Enabled" : "Disabled"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderPersonalInfoStep = () => (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-2">Personal Information</h3>
        <p className="text-muted-foreground">Tell us about yourself to create a compelling introduction</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name *</Label>
          <Input
            id="name"
            value={personalInfo.name}
            onChange={(e) => setPersonalInfo({ ...personalInfo, name: e.target.value })}
            placeholder="John Doe"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="title">Professional Title *</Label>
          <Input
            id="title"
            value={personalInfo.title}
            onChange={(e) => setPersonalInfo({ ...personalInfo, title: e.target.value })}
            placeholder="Full Stack Developer"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email Address *</Label>
          <Input
            id="email"
            type="email"
            value={personalInfo.email}
            onChange={(e) => setPersonalInfo({ ...personalInfo, email: e.target.value })}
            placeholder="john@example.com"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            value={personalInfo.phone}
            onChange={(e) => setPersonalInfo({ ...personalInfo, phone: e.target.value })}
            placeholder="+1 (555) 123-4567"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="location">Location</Label>
          <Input
            id="location"
            value={personalInfo.location}
            onChange={(e) => setPersonalInfo({ ...personalInfo, location: e.target.value })}
            placeholder="San Francisco, CA"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="website">Personal Website</Label>
          <Input
            id="website"
            value={personalInfo.website}
            onChange={(e) => setPersonalInfo({ ...personalInfo, website: e.target.value })}
            placeholder="https://johndoe.com"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="bio">Professional Bio *</Label>
        <Textarea
          id="bio"
          value={personalInfo.bio}
          onChange={(e) => setPersonalInfo({ ...personalInfo, bio: e.target.value })}
          placeholder="Write a compelling bio that highlights your expertise, experience, and what makes you unique as a professional..."
          rows={4}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="github">GitHub Profile</Label>
          <Input
            id="github"
            value={personalInfo.github}
            onChange={(e) => setPersonalInfo({ ...personalInfo, github: e.target.value })}
            placeholder="https://github.com/johndoe"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="linkedin">LinkedIn Profile</Label>
          <Input
            id="linkedin"
            value={personalInfo.linkedin}
            onChange={(e) => setPersonalInfo({ ...personalInfo, linkedin: e.target.value })}
            placeholder="https://linkedin.com/in/johndoe"
          />
        </div>
      </div>
    </div>
  )

  const nextStep = () => {
    if (currentStep === 0 && !selectedTemplate) return
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const canProceed = () => {
    if (currentStep === 0) return selectedTemplate !== ""
    return true
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">Portfolio Builder</h1>
            <p className="text-xl text-muted-foreground">
              Create a professional portfolio that showcases your skills and experience
            </p>
          </div>

          {/* Progress Steps */}
          <div className="flex items-center justify-between mb-8 overflow-x-auto">
            {steps.map((step, index) => {
              const Icon = step.icon
              const isActive = index === currentStep
              const isCompleted = index < currentStep
              const isAccessible = index <= currentStep

              return (
                <div key={index} className="flex items-center">
                  <div
                    className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all ${
                      isActive
                        ? "border-primary bg-primary text-primary-foreground"
                        : isCompleted
                          ? "border-primary bg-primary/10 text-primary"
                          : isAccessible
                            ? "border-muted-foreground/30 text-muted-foreground"
                            : "border-muted-foreground/20 text-muted-foreground/50"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="ml-2 min-w-0">
                    <div
                      className={`text-sm font-medium ${
                        isActive ? "text-primary" : isCompleted ? "text-primary" : "text-muted-foreground"
                      }`}
                    >
                      {step.title}
                    </div>
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`w-8 h-px mx-4 ${isCompleted ? "bg-primary" : "bg-muted-foreground/20"}`} />
                  )}
                </div>
              )
            })}
          </div>

          {/* Step Content */}
          <Card className="mb-8">
            <CardContent className="p-8">
              {currentStep === 0 && renderTemplateStep()}
              {currentStep === 1 && renderCustomizeStep()}
              {currentStep === 2 && renderPersonalInfoStep()}
              {currentStep === 3 && renderExperienceStep()}
              {currentStep === 4 && renderProjectsStep()}
              {currentStep === 5 && renderSkillsStep()}
              {currentStep === 6 && renderPreviewStep()}
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-between">
            <Button onClick={prevStep} disabled={currentStep === 0} variant="outline">
              Previous
            </Button>
            <Button onClick={nextStep} disabled={currentStep === steps.length - 1 || !canProceed()}>
              {currentStep === steps.length - 1 ? "Complete" : "Next"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
