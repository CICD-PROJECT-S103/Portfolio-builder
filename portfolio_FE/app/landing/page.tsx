"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { 
  ArrowRight, 
  CheckCircle, 
  Users, 
  Star, 
  Zap, 
  Globe,
  Palette,
  Code,
  Monitor,
  Sparkles
} from "lucide-react"

export default function LandingPage() {
  const features = [
    {
      icon: Palette,
      title: "Professional Templates",
      description: "Choose from stunning, responsive templates designed by professionals"
    },
    {
      icon: Code,
      title: "No Coding Required",
      description: "Build your portfolio with our intuitive drag-and-drop interface"
    },
    {
      icon: Monitor,
      title: "Mobile Responsive",
      description: "Your portfolio looks perfect on all devices and screen sizes"
    },
    {
      icon: Globe,
      title: "Custom Domain",
      description: "Get your own professional domain or use our free subdomain"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized for speed with industry-leading performance"
    },
    {
      icon: Sparkles,
      title: "SEO Optimized",
      description: "Built-in SEO features to help you get discovered online"
    }
  ]

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "UX Designer",
      content: "PortfolioCraft helped me land my dream job at Google. The templates are absolutely stunning!",
      rating: 5
    },
    {
      name: "Marcus Rodriguez",
      role: "Full Stack Developer",
      content: "Best portfolio builder I've used. Clean, professional, and incredibly easy to customize.",
      rating: 5
    },
    {
      name: "Emily Zhang",
      role: "Graphic Designer",
      content: "The creative templates perfectly showcase my work. Highly recommended for designers!",
      rating: 5
    }
  ]

  const stats = [
    { number: "50,000+", label: "Portfolios Created" },
    { number: "180+", label: "Countries" },
    { number: "99.9%", label: "Uptime" },
    { number: "4.9/5", label: "User Rating" }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 py-20 lg:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Build Your Dream Portfolio in Minutes
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Create stunning, professional portfolios that showcase your skills and help you land your dream job. 
              No coding required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/signup">
                <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-lg px-8 py-6">
                  Start Building Free
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/templates">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                  View Examples
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Everything You Need to 
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Succeed</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our platform provides all the tools and features you need to create a portfolio that stands out from the crowd.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Templates Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Choose from 
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Beautiful Templates</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Pick from our collection of professionally designed templates, each crafted to showcase your unique skills and personality.
            </p>
          </div>

          {/* Horizontal Scrollable Template Gallery */}
          <div className="relative">
            <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-none">
              {/* Modern Template */}
              <div className="flex-none w-80">
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer">
                  <div className="relative">
                    <img 
                      src="/Portfolio-builder/modern-portfolio-template-with-dark-theme-and-clea.jpg" 
                      alt="Modern Portfolio Template"
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3">
                      <Badge className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">Popular</Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg">Modern Professional</CardTitle>
                    <CardDescription>Clean, dark theme with modern aesthetics perfect for developers and designers.</CardDescription>
                  </CardHeader>
                </Card>
              </div>

              {/* Minimal Template */}
              <div className="flex-none w-80">
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer">
                  <div className="relative">
                    <img 
                      src="/Portfolio-builder/minimal-portfolio-template-with-white-background-a.jpg" 
                      alt="Minimal Portfolio Template"
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3">
                      <Badge variant="secondary">Minimal</Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg">Clean Minimal</CardTitle>
                    <CardDescription>Simple, elegant design with white background for a professional look.</CardDescription>
                  </CardHeader>
                </Card>
              </div>

              {/* Creative Template */}
              <div className="flex-none w-80">
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer">
                  <div className="relative">
                    <img 
                      src="/Portfolio-builder/creative-portfolio-template-with-colorful-design-a.jpg" 
                      alt="Creative Portfolio Template"
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3">
                      <Badge className="bg-gradient-to-r from-pink-500 to-orange-500 text-white">Creative</Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg">Creative Colorful</CardTitle>
                    <CardDescription>Vibrant, colorful design perfect for artists and creative professionals.</CardDescription>
                  </CardHeader>
                </Card>
              </div>

              {/* Professional Template */}
              <div className="flex-none w-80">
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer">
                  <div className="relative">
                    <img 
                      src="/Portfolio-builder/professional-portfolio-template-with-corporate-des.jpg" 
                      alt="Professional Portfolio Template"
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3">
                      <Badge className="bg-gradient-to-r from-green-500 to-emerald-600 text-white">Corporate</Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg">Corporate Professional</CardTitle>
                    <CardDescription>Business-focused design ideal for executives and consultants.</CardDescription>
                  </CardHeader>
                </Card>
              </div>

              {/* Additional Template Placeholder */}
              <div className="flex-none w-80">
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer border-dashed border-2">
                  <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center">
                    <div className="text-center">
                      <Sparkles className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-500 dark:text-gray-400 font-medium">More Coming Soon</p>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg">New Templates</CardTitle>
                    <CardDescription>We're constantly adding new designs. Stay tuned for updates!</CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>

            {/* Scroll Indicators */}
            <div className="flex justify-center mt-6 gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-500"></div>
              <div className="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-600"></div>
              <div className="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-600"></div>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link href="/templates">
              <Button size="lg" variant="outline" className="group">
                View All Templates
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Build Your Portfolio?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands of professionals who have already created stunning portfolios with PortfolioCraft.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6">
                Get Started Free
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}