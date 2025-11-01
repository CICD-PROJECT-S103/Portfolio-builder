'use client';

import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { personalInfoApi, projectsApi, workExperienceApi, skillsApi, PersonalInfoData, ProjectData, WorkExperienceData, TechnicalSkillData } from '@/lib/api';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Loader2, Mail, Phone, MapPin, Globe, Github, Linkedin, ArrowLeft } from 'lucide-react';

export default function PortfolioView() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const email = searchParams.get('email');
  
  const [loading, setLoading] = useState(true);
  const [personalInfo, setPersonalInfo] = useState<PersonalInfoData | null>(null);
  const [projects, setProjects] = useState<ProjectData[]>([]);
  const [experiences, setExperiences] = useState<WorkExperienceData[]>([]);
  const [skills, setSkills] = useState<TechnicalSkillData[]>([]);

  useEffect(() => {
    if (email) {
      loadPortfolio();
    } else {
      router.push('/dashboard');
    }
  }, [email]);

  const loadPortfolio = async () => {
    if (!email) return;

    setLoading(true);
    try {
      const [personalRes, projectsRes, experiencesRes, skillsRes] = await Promise.all([
        personalInfoApi.get(email),
        projectsApi.list(email),
        workExperienceApi.list(email),
        skillsApi.list(email)
      ]);

      if (personalRes.success && personalRes.data) {
        setPersonalInfo(personalRes.data);
      }
      if (projectsRes.success && projectsRes.data) {
        setProjects(projectsRes.data);
      }
      if (experiencesRes.success && experiencesRes.data) {
        setExperiences(experiencesRes.data);
      }
      if (skillsRes.success && skillsRes.data) {
        setSkills(skillsRes.data);
      }
    } catch (error) {
      console.error('Error loading portfolio:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  if (!personalInfo) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Portfolio Not Found</h2>
          <Button onClick={() => router.push('/dashboard')}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Header */}
      <div className="container mx-auto px-4 py-8">
        <Button 
          variant="ghost" 
          onClick={() => router.push('/dashboard')}
          className="mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Dashboard
        </Button>

        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">{personalInfo.fullname}</h1>
          <p className="text-2xl text-muted-foreground mb-6">{personalInfo.professionalTitle}</p>
          
          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <a href={`mailto:${personalInfo.email}`} className="hover:underline">
                {personalInfo.email}
              </a>
            </div>
            {personalInfo.phoneNumber && (
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>{personalInfo.phoneNumber}</span>
              </div>
            )}
            {personalInfo.location && (
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>{personalInfo.location}</span>
              </div>
            )}
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 mt-6">
            {personalInfo.personalWebsite && (
              <a href={personalInfo.personalWebsite} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm">
                  <Globe className="h-4 w-4 mr-2" />
                  Website
                </Button>
              </a>
            )}
            {personalInfo.githubProfile && (
              <a href={personalInfo.githubProfile} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm">
                  <Github className="h-4 w-4 mr-2" />
                  GitHub
                </Button>
              </a>
            )}
            {personalInfo.linkedinProfile && (
              <a href={personalInfo.linkedinProfile} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm">
                  <Linkedin className="h-4 w-4 mr-2" />
                  LinkedIn
                </Button>
              </a>
            )}
          </div>
        </div>

        {/* About Section */}
        {personalInfo.professionalBio && (
          <Card className="p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4">About Me</h2>
            <p className="text-lg leading-relaxed">{personalInfo.professionalBio}</p>
          </Card>
        )}

        {/* Work Experience */}
        {experiences.length > 0 && (
          <Card className="p-6 mb-8">
            <h2 className="text-2xl font-bold mb-6">Work Experience</h2>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div key={index} className="border-l-2 border-primary pl-4">
                  <h3 className="text-xl font-bold">{exp.position}</h3>
                  <p className="text-muted-foreground">{exp.company}</p>
                  <p className="text-sm text-muted-foreground mb-2">{exp.duration}</p>
                  <p className="text-base">{exp.description}</p>
                </div>
              ))}
            </div>
          </Card>
        )}

        {/* Projects */}
        {projects.length > 0 && (
          <Card className="p-6 mb-8">
            <h2 className="text-2xl font-bold mb-6">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <Card key={index} className="p-4 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.split(',').map((tech, i) => (
                      <span key={i} className="px-2 py-1 bg-secondary text-xs rounded">
                        {tech.trim()}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="sm">
                          Live Demo
                        </Button>
                      </a>
                    )}
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="sm">
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </Button>
                      </a>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </Card>
        )}

        {/* Skills */}
        {skills.length > 0 && (
          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-6">Skills</h2>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <div key={index} className="px-4 py-2 bg-primary/10 rounded-full">
                  <span className="font-medium">{skill.skillName}</span>
                  <span className="text-sm text-muted-foreground ml-2">
                    {skill.proficiencyLevel}
                  </span>
                </div>
              ))}
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}
