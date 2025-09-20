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

export function ModernTemplate({ personalInfo, projects, experiences, skills }: TemplateProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="relative px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mx-auto mb-8 flex items-center justify-center text-4xl font-bold">
            {personalInfo.name
              .split(" ")
              .map((n) => n[0])
              .join("")
              .toUpperCase() || "JD"}
          </div>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            {personalInfo.name || "Your Name"}
          </h1>
          <h2 className="text-2xl text-blue-200 mb-6">{personalInfo.title || "Your Professional Title"}</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            {personalInfo.bio || "Your professional bio will appear here..."}
          </p>

          <div className="flex justify-center gap-4 mt-8">
            {personalInfo.email && (
              <Button variant="outline" size="sm" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                <Mail className="w-4 h-4 mr-2" />
                Contact
              </Button>
            )}
            {personalInfo.github && (
              <Button variant="outline" size="sm" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
            )}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      {experiences.length > 0 && (
        <section className="px-6 py-16 bg-black/20">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-12 text-center">Experience</h3>
            <div className="space-y-8">
              {experiences.map((exp) => (
                <Card key={exp.id} className="bg-white/5 border-white/10 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="text-xl font-semibold text-white">{exp.position}</h4>
                        <p className="text-blue-300">{exp.company}</p>
                      </div>
                      <Badge variant="secondary" className="bg-blue-500/20 text-blue-200">
                        {exp.duration}
                      </Badge>
                    </div>
                    <p className="text-gray-300">{exp.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Projects Section */}
      {projects.length > 0 && (
        <section className="px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl font-bold mb-12 text-center">Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project) => (
                <Card
                  key={project.id}
                  className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all"
                >
                  <CardContent className="p-6">
                    <h4 className="text-xl font-semibold text-white mb-3">{project.title}</h4>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, index) => (
                        <Badge key={index} variant="secondary" className="bg-purple-500/20 text-purple-200">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      {project.liveUrl && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </Button>
                      )}
                      {project.githubUrl && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Skills Section */}
      {skills.length > 0 && (
        <section className="px-6 py-16 bg-black/20">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-12">Skills</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {skills.map((skill) => (
                <Badge
                  key={skill}
                  className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 text-sm"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact Section */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-8">Get In Touch</h3>
          <div className="flex justify-center gap-6 flex-wrap">
            {personalInfo.email && (
              <div className="flex items-center gap-2 text-gray-300">
                <Mail className="w-5 h-5" />
                <span>{personalInfo.email}</span>
              </div>
            )}
            {personalInfo.phone && (
              <div className="flex items-center gap-2 text-gray-300">
                <Phone className="w-5 h-5" />
                <span>{personalInfo.phone}</span>
              </div>
            )}
            {personalInfo.location && (
              <div className="flex items-center gap-2 text-gray-300">
                <MapPin className="w-5 h-5" />
                <span>{personalInfo.location}</span>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
