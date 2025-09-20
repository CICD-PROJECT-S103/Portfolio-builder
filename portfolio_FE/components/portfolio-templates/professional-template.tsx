import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, ExternalLink, Mail, MapPin, Phone, Linkedin } from "lucide-react"

interface TemplateProps {
  personalInfo: {
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
  projects: Array<{
    id: string
    title: string
    description: string
    technologies: string[]
    liveUrl: string
    githubUrl: string
  }>
  experiences: Array<{
    id: string
    company: string
    position: string
    duration: string
    description: string
  }>
  skills: string[]
}

export function ProfessionalTemplate({ personalInfo, projects, experiences, skills }: TemplateProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-slate-800 text-white px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-8">
            <div className="w-32 h-32 bg-slate-600 rounded-lg flex items-center justify-center text-3xl font-bold">
              {personalInfo.name
                .split(" ")
                .map((n) => n[0])
                .join("")
                .toUpperCase() || "JD"}
            </div>
            <div className="flex-1">
              <h1 className="text-4xl font-bold mb-2">{personalInfo.name || "Your Name"}</h1>
              <h2 className="text-xl text-slate-300 mb-4">{personalInfo.title || "Your Professional Title"}</h2>
              <p className="text-slate-200 max-w-2xl leading-relaxed">
                {personalInfo.bio || "Your professional bio will appear here..."}
              </p>
              <div className="flex gap-4 mt-6">
                {personalInfo.email && (
                  <Button variant="secondary" size="sm">
                    <Mail className="w-4 h-4 mr-2" />
                    Contact
                  </Button>
                )}
                {personalInfo.linkedin && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-slate-400 text-slate-300 hover:bg-slate-700 bg-transparent"
                  >
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Experience Section */}
            {experiences.length > 0 && (
              <section>
                <h3 className="text-2xl font-bold text-slate-800 mb-6 border-b-2 border-slate-800 pb-2">
                  Professional Experience
                </h3>
                <div className="space-y-6">
                  {experiences.map((exp) => (
                    <Card key={exp.id} className="border-l-4 border-slate-600">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h4 className="text-lg font-semibold text-slate-800">{exp.position}</h4>
                            <p className="text-slate-600 font-medium">{exp.company}</p>
                          </div>
                          <Badge variant="secondary" className="bg-slate-100 text-slate-700">
                            {exp.duration}
                          </Badge>
                        </div>
                        <p className="text-slate-700">{exp.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            )}

            {/* Projects Section */}
            {projects.length > 0 && (
              <section>
                <h3 className="text-2xl font-bold text-slate-800 mb-6 border-b-2 border-slate-800 pb-2">
                  Key Projects
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {projects.map((project) => (
                    <Card key={project.id} className="border border-slate-200 hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <h4 className="text-lg font-semibold text-slate-800 mb-3">{project.title}</h4>
                        <p className="text-slate-700 mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.technologies.map((tech, index) => (
                            <Badge key={index} variant="outline" className="border-slate-300 text-slate-600">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex gap-3">
                          {project.liveUrl && (
                            <Button size="sm" className="bg-slate-700 hover:bg-slate-800">
                              <ExternalLink className="w-4 h-4 mr-2" />
                              View Project
                            </Button>
                          )}
                          {project.githubUrl && (
                            <Button
                              size="sm"
                              variant="outline"
                              className="border-slate-300 text-slate-600 bg-transparent"
                            >
                              <Github className="w-4 h-4 mr-2" />
                              Source Code
                            </Button>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Contact Info */}
            <Card className="border border-slate-200">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-slate-800 mb-4">Contact Information</h3>
                <div className="space-y-3">
                  {personalInfo.email && (
                    <div className="flex items-center gap-3 text-slate-700">
                      <Mail className="w-4 h-4" />
                      <span className="text-sm">{personalInfo.email}</span>
                    </div>
                  )}
                  {personalInfo.phone && (
                    <div className="flex items-center gap-3 text-slate-700">
                      <Phone className="w-4 h-4" />
                      <span className="text-sm">{personalInfo.phone}</span>
                    </div>
                  )}
                  {personalInfo.location && (
                    <div className="flex items-center gap-3 text-slate-700">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{personalInfo.location}</span>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Skills */}
            {skills.length > 0 && (
              <Card className="border border-slate-200">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-slate-800 mb-4">Technical Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <Badge key={skill} className="bg-slate-100 text-slate-700 hover:bg-slate-200">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
