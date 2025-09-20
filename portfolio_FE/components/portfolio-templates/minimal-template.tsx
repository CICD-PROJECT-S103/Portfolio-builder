import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, ExternalLink, Mail, MapPin, Phone } from "lucide-react"

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

export function MinimalTemplate({ personalInfo, projects, experiences, skills }: TemplateProps) {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="border-b border-gray-200 px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-light mb-2">{personalInfo.name || "Your Name"}</h1>
          <h2 className="text-xl text-gray-600 mb-4">{personalInfo.title || "Your Professional Title"}</h2>
          <p className="text-gray-700 max-w-2xl leading-relaxed">
            {personalInfo.bio || "Your professional bio will appear here..."}
          </p>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Experience Section */}
        {experiences.length > 0 && (
          <section className="mb-16">
            <h3 className="text-2xl font-light mb-8 border-b border-gray-200 pb-2">Experience</h3>
            <div className="space-y-8">
              {experiences.map((exp) => (
                <div key={exp.id} className="border-l-2 border-gray-200 pl-6">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="text-lg font-medium">{exp.position}</h4>
                      <p className="text-gray-600">{exp.company}</p>
                    </div>
                    <span className="text-sm text-gray-500">{exp.duration}</span>
                  </div>
                  <p className="text-gray-700 mt-2">{exp.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Projects Section */}
        {projects.length > 0 && (
          <section className="mb-16">
            <h3 className="text-2xl font-light mb-8 border-b border-gray-200 pb-2">Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project) => (
                <Card key={project.id} className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-medium mb-3">{project.title}</h4>
                    <p className="text-gray-700 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, index) => (
                        <Badge key={index} variant="secondary" className="bg-gray-100 text-gray-700">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      {project.liveUrl && (
                        <Button size="sm" variant="outline">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </Button>
                      )}
                      {project.githubUrl && (
                        <Button size="sm" variant="outline">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* Skills Section */}
        {skills.length > 0 && (
          <section className="mb-16">
            <h3 className="text-2xl font-light mb-8 border-b border-gray-200 pb-2">Skills</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="bg-gray-100 text-gray-700 px-3 py-1">
                  {skill}
                </Badge>
              ))}
            </div>
          </section>
        )}

        {/* Contact Section */}
        <section>
          <h3 className="text-2xl font-light mb-8 border-b border-gray-200 pb-2">Contact</h3>
          <div className="flex flex-wrap gap-6">
            {personalInfo.email && (
              <div className="flex items-center gap-2 text-gray-700">
                <Mail className="w-5 h-5" />
                <span>{personalInfo.email}</span>
              </div>
            )}
            {personalInfo.phone && (
              <div className="flex items-center gap-2 text-gray-700">
                <Phone className="w-5 h-5" />
                <span>{personalInfo.phone}</span>
              </div>
            )}
            {personalInfo.location && (
              <div className="flex items-center gap-2 text-gray-700">
                <MapPin className="w-5 h-5" />
                <span>{personalInfo.location}</span>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  )
}
