'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '@/contexts/auth-context';
import { useRouter } from 'next/navigation';
import { personalInfoApi, projectsApi, workExperienceApi, skillsApi, PersonalInfoData, ProjectData, WorkExperienceData, TechnicalSkillData } from '@/lib/api';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Loader2, User, Briefcase, Code, Award, Edit, Eye } from 'lucide-react';

export default function Dashboard() {
  const { user } = useAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [personalInfo, setPersonalInfo] = useState<PersonalInfoData | null>(null);
  const [projects, setProjects] = useState<ProjectData[]>([]);
  const [experiences, setExperiences] = useState<WorkExperienceData[]>([]);
  const [skills, setSkills] = useState<TechnicalSkillData[]>([]);
  const [hasPortfolio, setHasPortfolio] = useState(false);

  useEffect(() => {
    if (!user) {
      router.push('/login');
      return;
    }
    loadPortfolioData();
  }, [user, router]);

  const loadPortfolioData = async () => {
    if (!user?.email) {
      console.log('No user email found');
      return;
    }

    console.log('Loading portfolio for:', user.email);
    setLoading(true);
    try {
      // Load all portfolio data
      const [personalRes, projectsRes, experiencesRes, skillsRes] = await Promise.all([
        personalInfoApi.get(user.email),
        projectsApi.list(user.email),
        workExperienceApi.list(user.email),
        skillsApi.list(user.email)
      ]);

      console.log('Personal Info Response:', personalRes);
      console.log('Projects Response:', projectsRes);
      console.log('Experiences Response:', experiencesRes);
      console.log('Skills Response:', skillsRes);

      if (personalRes.success && personalRes.data) {
        console.log('Setting personal info:', personalRes.data);
        setPersonalInfo(personalRes.data);
        setHasPortfolio(true);
      } else {
        console.log('Personal info not found or failed:', personalRes.message);
      }

      if (projectsRes.success && projectsRes.data) {
        console.log('Setting projects:', projectsRes.data);
        setProjects(projectsRes.data);
      }

      if (experiencesRes.success && experiencesRes.data) {
        console.log('Setting experiences:', experiencesRes.data);
        setExperiences(experiencesRes.data);
      }

      if (skillsRes.success && skillsRes.data) {
        console.log('Setting skills:', skillsRes.data);
        setSkills(skillsRes.data);
      }
    } catch (error) {
      console.error('Error loading portfolio:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateNew = () => {
    router.push('/builder');
  };

  const handleEdit = () => {
    if (user?.email) {
      router.push(`/builder?mode=edit&email=${user.email}`);
    }
  };

  const handlePreview = () => {
    if (user?.email) {
      router.push(`/portfolio-view?email=${encodeURIComponent(user.email)}`);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
        <span className="ml-2">Loading your portfolio...</span>
      </div>
    );
  }

  if (!hasPortfolio) {
    return (
      <div className="container mx-auto p-6 min-h-screen flex items-center justify-center">
        <Card className="p-8 text-center max-w-md">
          <h2 className="text-2xl font-bold mb-4">Welcome to Portfolio Builder!</h2>
          <p className="text-muted-foreground mb-6">
            You haven't created your portfolio yet. Get started by creating your first portfolio.
          </p>
          <Button onClick={handleCreateNew} size="lg">
            Create Your Portfolio
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6 min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold mb-2">My Portfolios</h1>
          <p className="text-muted-foreground">
            Welcome back, {personalInfo?.fullname || user?.fullname}!
          </p>
        </div>
        <div className="flex gap-3">
          <Button onClick={handleCreateNew} variant="default">
            + Create New Portfolio
          </Button>
        </div>
      </div>

      {/* Portfolio Card */}
      <div className="mb-8">
        <Card className="p-6 hover:shadow-lg transition-shadow">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-2xl font-bold mb-2">
                {personalInfo?.fullname}'s Portfolio
              </h2>
              <p className="text-muted-foreground">
                {personalInfo?.professionalTitle}
              </p>
            </div>
            <div className="flex gap-2">
              <Button onClick={handleEdit} variant="outline" size="sm">
                <Edit className="h-4 w-4 mr-2" />
                Edit
              </Button>
              <Button onClick={handlePreview} size="sm">
                <Eye className="h-4 w-4 mr-2" />
                Preview
              </Button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="flex gap-4 text-sm text-muted-foreground">
            <span>📊 {projects.length} Projects</span>
            <span>💼 {experiences.length} Experiences</span>
            <span>🎯 {skills.length} Skills</span>
            <span>📅 Last updated: {new Date().toLocaleDateString()}</span>
          </div>
        </Card>
      </div>

      {/* Portfolio Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
              <User className="h-6 w-6 text-blue-600 dark:text-blue-300" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Personal Info</p>
              <p className="text-2xl font-bold">{personalInfo ? '✓' : '-'}</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg">
              <Briefcase className="h-6 w-6 text-green-600 dark:text-green-300" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Work Experience</p>
              <p className="text-2xl font-bold">{experiences.length}</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-lg">
              <Code className="h-6 w-6 text-purple-600 dark:text-purple-300" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Projects</p>
              <p className="text-2xl font-bold">{projects.length}</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-orange-100 dark:bg-orange-900 rounded-lg">
              <Award className="h-6 w-6 text-orange-600 dark:text-orange-300" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Skills</p>
              <p className="text-2xl font-bold">{skills.length}</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Personal Info Section */}
      {personalInfo && (
        <Card className="p-6 mb-6">
          <h2 className="text-2xl font-bold mb-4">Personal Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-muted-foreground">Full Name</p>
              <p className="font-medium">{personalInfo.fullname}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Professional Title</p>
              <p className="font-medium">{personalInfo.professionalTitle}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Email</p>
              <p className="font-medium">{personalInfo.email}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Phone</p>
              <p className="font-medium">{personalInfo.phoneNumber}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Location</p>
              <p className="font-medium">{personalInfo.location}</p>
            </div>
            {personalInfo.personalWebsite && (
              <div>
                <p className="text-sm text-muted-foreground">Website</p>
                <a href={personalInfo.personalWebsite} target="_blank" rel="noopener noreferrer" className="font-medium text-blue-600 hover:underline">
                  {personalInfo.personalWebsite}
                </a>
              </div>
            )}
          </div>
          {personalInfo.professionalBio && (
            <div className="mt-4">
              <p className="text-sm text-muted-foreground">Bio</p>
              <p className="font-medium">{personalInfo.professionalBio}</p>
            </div>
          )}
        </Card>
      )}

      {/* Projects Section */}
      {projects.length > 0 && (
        <Card className="p-6 mb-6">
          <h2 className="text-2xl font-bold mb-4">Projects ({projects.length})</h2>
          <div className="space-y-4">
            {projects.map((project, index) => (
              <div key={index} className="border-b last:border-b-0 pb-4 last:pb-0">
                <h3 className="font-bold text-lg">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-2">{project.description}</p>
                <div className="flex gap-2 text-sm">
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      GitHub
                    </a>
                  )}
                </div>
                <p className="text-sm mt-2">
                  <span className="font-medium">Technologies:</span> {project.technologies}
                </p>
              </div>
            ))}
          </div>
        </Card>
      )}

      {/* Work Experience Section */}
      {experiences.length > 0 && (
        <Card className="p-6 mb-6">
          <h2 className="text-2xl font-bold mb-4">Work Experience ({experiences.length})</h2>
          <div className="space-y-4">
            {experiences.map((exp, index) => (
              <div key={index} className="border-b last:border-b-0 pb-4 last:pb-0">
                <h3 className="font-bold text-lg">{exp.position}</h3>
                <p className="text-sm text-muted-foreground">{exp.company} • {exp.duration}</p>
                <p className="text-sm mt-2">{exp.description}</p>
              </div>
            ))}
          </div>
        </Card>
      )}

      {/* Skills Section */}
      {skills.length > 0 && (
        <Card className="p-6">
          <h2 className="text-2xl font-bold mb-4">Skills ({skills.length})</h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <div key={index} className="px-4 py-2 bg-secondary rounded-full">
                <span className="font-medium">{skill.skillName}</span>
                <span className="text-sm text-muted-foreground ml-2">({skill.proficiencyLevel})</span>
              </div>
            ))}
          </div>
        </Card>
      )}
    </div>
  );
}