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

export function CreativeTemplate({ personalInfo, projects, experiences, skills }: TemplateProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-orange-50 to-yellow-50">
      {/* Hero Section */}
      <section className="relative px-6 py-20 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-orange-500/10 to-yellow-500/10"></div>
        <div className="relative max-w-4xl mx-auto">
          <div className="w-40 h-40 bg-gradient-to-br from-pink-400 via-orange-400 to-yellow-400 rounded-full mx-auto mb-8 flex items-center justify-center text-5xl font-bold text-white shadow-2xl">
            {personalInfo.name
              .split(" ")
              .map((n) => n[0])
              .join("")
              .toUpperCase() || "JD"}
          </div>
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-pink-600 via-orange-600 to-yellow-600 bg-clip-text text-transparent">
            {personalInfo.name || "Your Name"}
          </h1>
          <h2 className="text-3xl text-orange-700 mb-6 font-medium">
            {personalInfo.title || "Your Professional Title"}
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            {personalInfo.bio || "Your professional bio will appear here..."}
          </p>
        </div>
      </section>

      {/* Experience Section */}
      {experiences.length > 0 && (
        <section className="px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent">
              Experience
            </h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <Card
                  key={exp.id}
                  className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
                >
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold ${
                          index % 3 === 0
                            ? "bg-gradient-to-br from-pink-500 to-orange-500"
                            : index % 3 === 1
                              ? "bg-gradient-to-br from-orange-500 to-yellow-500"
                              : "bg-gradient-to-br from-yellow-500 to-pink-500"
                        }`}
                      >
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h4 className="text-xl font-bold text-gray-800">{exp.position}</h4>
                            <p className="text-orange-600 font-medium">{exp.company}</p>
                          </div>
                          <Badge className="bg-gradient-to-r from-pink-500 to-orange-500 text-white">
                            {exp.duration}
                          </Badge>
                        </div>
                        <p className="text-gray-700">{exp.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Projects Section */}
      {projects.length > 0 && (
        <section className="px-6 py-16 bg-white/30">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
              Projects
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card
                  key={project.id}
                  className="bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2"
                >
                  <CardContent className="p-6">
                    <div
                      className={`w-full h-2 rounded-full mb-4 ${
                        index % 3 === 0
                          ? "bg-gradient-to-r from-pink-500 to-orange-500"
                          : index % 3 === 1
                            ? "bg-gradient-to-r from-orange-500 to-yellow-500"
                            : "bg-gradient-to-r from-yellow-500 to-pink-500"
                      }`}
                    ></div>
                    <h4 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h4>
                    <p className="text-gray-700 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          className={`${
                            techIndex % 3 === 0
                              ? "bg-pink-100 text-pink-700"
                              : techIndex % 3 === 1
                                ? "bg-orange-100 text-orange-700"
                                : "bg-yellow-100 text-yellow-700"
                          }`}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      {project.liveUrl && (
                        <Button
                          size="sm"
                          className="bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </Button>
                      )}
                      {project.githubUrl && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-orange-300 text-orange-600 hover:bg-orange-50 bg-transparent"
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
        <section className="px-6 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-4xl font-bold mb-12 bg-gradient-to-r from-yellow-600 to-pink-600 bg-clip-text text-transparent">
              Skills
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {skills.map((skill, index) => (
                <Badge
                  key={skill}
                  className={`px-4 py-2 text-sm font-medium ${
                    index % 3 === 0
                      ? "bg-gradient-to-r from-pink-500 to-orange-500"
                      : index % 3 === 1
                        ? "bg-gradient-to-r from-orange-500 to-yellow-500"
                        : "bg-gradient-to-r from-yellow-500 to-pink-500"
                  } text-white shadow-lg hover:shadow-xl transition-all transform hover:scale-105`}
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact Section */}
      <section className="px-6 py-16 bg-gradient-to-r from-pink-500/10 via-orange-500/10 to-yellow-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-8 bg-gradient-to-r from-pink-600 to-yellow-600 bg-clip-text text-transparent">
            Let's Connect
          </h3>
          <div className="flex justify-center gap-8 flex-wrap">
            {personalInfo.email && (
              <div className="flex items-center gap-3 text-gray-700 bg-white/80 px-4 py-2 rounded-full shadow-md">
                <Mail className="w-5 h-5 text-orange-600" />
                <span>{personalInfo.email}</span>
              </div>
            )}
            {personalInfo.phone && (
              <div className="flex items-center gap-3 text-gray-700 bg-white/80 px-4 py-2 rounded-full shadow-md">
                <Phone className="w-5 h-5 text-pink-600" />
                <span>{personalInfo.phone}</span>
              </div>
            )}
            {personalInfo.location && (
              <div className="flex items-center gap-3 text-gray-700 bg-white/80 px-4 py-2 rounded-full shadow-md">
                <MapPin className="w-5 h-5 text-yellow-600" />
                <span>{personalInfo.location}</span>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
