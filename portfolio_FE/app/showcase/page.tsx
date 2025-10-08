import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Star, Eye, Github } from "lucide-react"
import { getImagePath } from "@/lib/image-utils"

export default function Showcase() {
  const showcaseItems = [
    {
      name: "Sarah Chen",
      title: "UX Designer",
      template: "Creative Showcase",
      image: getImagePath("/placeholder-user.jpg"),
      portfolio: "https://sarahchen.portfoliocraft.com",
      description: "A vibrant portfolio showcasing innovative UX/UI designs and case studies",
      tags: ["UX Design", "Creative", "Case Studies"],
      featured: true
    },
    {
      name: "Marcus Rodriguez",
      title: "Full Stack Developer",
      template: "Modern Developer",
      image: getImagePath("/placeholder-user.jpg"),
      portfolio: "https://marcus.dev",
      description: "Clean, modern portfolio highlighting full-stack development projects",
      tags: ["React", "Node.js", "Full Stack"],
      featured: false
    },
    {
      name: "Emily Watson",
      title: "Product Manager",
      template: "Professional",
      image: getImagePath("/placeholder-user.jpg"),
      portfolio: "https://emilywatson.pro",
      description: "Professional portfolio showcasing product management expertise",
      tags: ["Product Management", "Strategy", "Leadership"],
      featured: true
    },
    {
      name: "Alex Kim",
      title: "Data Scientist",
      template: "Minimal Professional",
      image: getImagePath("/placeholder-user.jpg"),
      portfolio: "https://alexkim.data",
      description: "Minimal design focusing on data science projects and insights",
      tags: ["Data Science", "Python", "Machine Learning"],
      featured: false
    },
    {
      name: "Jennifer Lopez",
      title: "Marketing Director",
      template: "Creative Showcase",
      image: getImagePath("/placeholder-user.jpg"),
      portfolio: "https://jlopez.marketing",
      description: "Dynamic portfolio showcasing marketing campaigns and strategies",
      tags: ["Marketing", "Branding", "Campaigns"],
      featured: false
    },
    {
      name: "David Park",
      title: "DevOps Engineer",
      template: "Modern Developer",
      image: getImagePath("/placeholder-user.jpg"),
      portfolio: "https://davidpark.cloud",
      description: "Technical portfolio highlighting DevOps and cloud infrastructure work",
      tags: ["DevOps", "AWS", "Kubernetes"],
      featured: true
    }
  ]

  const featuredItems = showcaseItems.filter(item => item.featured)
  const regularItems = showcaseItems.filter(item => !item.featured)

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Portfolio Showcase</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          See how professionals are using PortfolioCraft to create stunning portfolios that get results
        </p>
      </div>

      {/* Featured Portfolios */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
          <Star className="w-6 h-6 text-yellow-500" />
          Featured Portfolios
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredItems.map((item) => (
            <Card key={item.name} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-blue-500/10 to-purple-500/10 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-2 flex items-center justify-center text-white font-bold text-xl">
                    {item.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <Badge variant="secondary">Featured</Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-lg">{item.name}</CardTitle>
                <p className="text-muted-foreground">{item.title}</p>
                <Badge variant="outline" className="w-fit">
                  {item.template}
                </Badge>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{item.description}</p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {item.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="secondary" className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    <Eye className="w-4 h-4 mr-1" />
                    Preview
                  </Button>
                  <Button size="sm" className="flex-1">
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Visit
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* All Portfolios */}
      <div>
        <h2 className="text-2xl font-bold mb-8">Community Portfolios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regularItems.map((item) => (
            <Card key={item.name} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full flex items-center justify-center text-white font-semibold">
                    {item.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <CardTitle className="text-base">{item.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{item.title}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3 text-sm">{item.description}</p>
                <div className="flex flex-wrap gap-1 mb-3">
                  {item.tags.slice(0, 2).map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                  {item.tags.length > 2 && (
                    <Badge variant="secondary" className="text-xs">
                      +{item.tags.length - 2}
                    </Badge>
                  )}
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex-1">
                    <Eye className="w-3 h-3 mr-1" />
                    View
                  </Button>
                  <Button size="sm" variant="ghost">
                    <ExternalLink className="w-3 h-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center mt-16 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Ready to Create Your Portfolio?</h2>
        <p className="text-muted-foreground mb-6">
          Join thousands of professionals who've built their careers with PortfolioCraft
        </p>
        <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
          Start Building Today
        </Button>
      </div>
    </div>
  )
}