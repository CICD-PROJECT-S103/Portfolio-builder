import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, User, Tag } from "lucide-react"

export default function Tutorials() {
  const tutorials = [
    {
      title: "Getting Started with PortfolioCraft",
      description: "Learn the basics of creating your first portfolio in under 10 minutes",
      duration: "8 min read",
      level: "Beginner",
      category: "Getting Started",
      author: "Sarah Team",
      date: "Sept 15, 2025"
    },
    {
      title: "Choosing the Right Template",
      description: "A comprehensive guide to selecting the perfect template for your profession",
      duration: "12 min read",
      level: "Beginner",
      category: "Design",
      author: "Alex Chen",
      date: "Sept 10, 2025"
    },
    {
      title: "Advanced Customization Techniques",
      description: "Master advanced features to make your portfolio truly unique",
      duration: "15 min read",
      level: "Advanced",
      category: "Customization",
      author: "Marcus Dev",
      date: "Sept 8, 2025"
    },
    {
      title: "SEO Optimization for Portfolios",
      description: "Optimize your portfolio for search engines and get discovered",
      duration: "10 min read",
      level: "Intermediate",
      category: "SEO",
      author: "Emily Marketing",
      date: "Sept 5, 2025"
    },
    {
      title: "Deploying Your Portfolio",
      description: "Step-by-step guide to publishing your portfolio online",
      duration: "6 min read",
      level: "Beginner",
      category: "Deployment",
      author: "David Ops",
      date: "Sept 1, 2025"
    },
    {
      title: "Portfolio Best Practices for Developers",
      description: "Tips and tricks specifically for showcasing development projects",
      duration: "14 min read",
      level: "Intermediate",
      category: "Development",
      author: "Jennifer Code",
      date: "Aug 28, 2025"
    }
  ]

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'bg-green-100 text-green-800'
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800'
      case 'Advanced': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Tutorials & Guides</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Learn how to create stunning portfolios with our comprehensive tutorials and guides
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {tutorials.map((tutorial, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <div className="flex justify-between items-start mb-2">
                <Badge variant="outline">{tutorial.category}</Badge>
                <Badge className={getLevelColor(tutorial.level)}>
                  {tutorial.level}
                </Badge>
              </div>
              <CardTitle className="text-lg line-clamp-2">{tutorial.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4 line-clamp-3">{tutorial.description}</p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  {tutorial.duration}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <User className="w-4 h-4" />
                  {tutorial.author}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Tag className="w-4 h-4" />
                  {tutorial.date}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Start Guide */}
      <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-8">Quick Start Guide</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
              1
            </div>
            <h3 className="font-semibold mb-2">Choose Template</h3>
            <p className="text-muted-foreground text-sm">Select from our collection of professional templates</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
              2
            </div>
            <h3 className="font-semibold mb-2">Customize Content</h3>
            <p className="text-muted-foreground text-sm">Add your information, projects, and personal details</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
              3
            </div>
            <h3 className="font-semibold mb-2">Publish & Share</h3>
            <p className="text-muted-foreground text-sm">Deploy your portfolio and share it with the world</p>
          </div>
        </div>
      </div>
    </div>
  )
}