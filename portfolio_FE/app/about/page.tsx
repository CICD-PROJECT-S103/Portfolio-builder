import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  Users, 
  Target, 
  Heart, 
  Award, 
  Zap, 
  Shield, 
  Globe,
  Code,
  Palette,
  Rocket,
  Star,
  Coffee
} from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "User-Centric Design",
      description: "Every feature we build puts our users' needs first. We believe in creating tools that are intuitive, powerful, and delightful to use."
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We're constantly pushing the boundaries of what's possible in portfolio creation, staying ahead of design trends and technology."
    },
    {
      icon: Shield,
      title: "Reliability", 
      description: "Your portfolio is your professional identity. We ensure 99.9% uptime and enterprise-grade security to protect your work."
    },
    {
      icon: Globe,
      title: "Accessibility",
      description: "We believe everyone deserves a beautiful portfolio. Our platform is designed to be accessible and inclusive for all users."
    }
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          About{" "}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            PortfolioCraft
          </span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          We're on a mission to democratize professional portfolio creation. 
          Every designer, developer, and creative professional deserves a portfolio 
          that truly represents their talent and vision.
        </p>
      </div>

      {/* Mission */}
      <Card className="mb-16 border-primary/20">
        <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30">
          <CardTitle className="text-2xl text-center flex items-center justify-center gap-2">
            <Target className="w-6 h-6" />
            Our Mission
          </CardTitle>
        </CardHeader>
        <CardContent className="p-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-muted-foreground leading-relaxed">
              At PortfolioCraft, we believe that exceptional talent should never be hidden behind 
              mediocre presentation. Our platform empowers creators to build stunning, professional 
              portfolios that truly showcase their skills and help them land their dream opportunities. 
              We're committed to making high-quality design accessible to everyone, regardless of 
              their technical background or design experience.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Values */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <value.icon className="w-5 h-5 text-primary" />
                  </div>
                  {value.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Recognition */}
      <Card className="mb-16">
        <CardHeader>
          <CardTitle className="text-center flex items-center justify-center gap-2">
            <Award className="w-6 h-6" />
            Recognition & Awards
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-4">
              <Star className="w-8 h-8 mx-auto mb-3 text-yellow-500" />
              <h3 className="font-semibold mb-2">Product Hunt #1</h3>
              <p className="text-sm text-muted-foreground">Product of the Day, March 2024</p>
            </div>
            <div className="p-4">
              <Rocket className="w-8 h-8 mx-auto mb-3 text-blue-500" />
              <h3 className="font-semibold mb-2">TechCrunch Feature</h3>
              <p className="text-sm text-muted-foreground">Startup Spotlight, June 2024</p>
            </div>
            <div className="p-4">
              <Coffee className="w-8 h-8 mx-auto mb-3 text-amber-600" />
              <h3 className="font-semibold mb-2">Design Awards</h3>
              <p className="text-sm text-muted-foreground">Awwwards Site of the Month</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Call to Action */}
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Build Your Portfolio?</h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Join thousands of creators who have already built stunning portfolios with PortfolioCraft.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
            Get Started Free
          </Button>
          <Link href="/templates">
            <Button size="lg" variant="secondary" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              View Templates
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}