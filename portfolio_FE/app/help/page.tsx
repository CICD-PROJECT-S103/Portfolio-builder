import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search, Book, MessageCircle, Video, FileText } from "lucide-react"

export default function HelpCenter() {
  const helpCategories = [
    {
      icon: Book,
      title: "Getting Started",
      description: "Learn the basics of creating your first portfolio",
      articles: [
        "How to create your first portfolio",
        "Choosing the right template",
        "Understanding the dashboard",
        "Account setup and verification"
      ]
    },
    {
      icon: FileText,
      title: "Templates & Design",
      description: "Customization and design guidance",
      articles: [
        "Template customization options",
        "Color scheme selection",
        "Font and typography choices",
        "Adding custom CSS"
      ]
    },
    {
      icon: MessageCircle,
      title: "Content Management",
      description: "Adding and organizing your portfolio content",
      articles: [
        "Adding projects and work samples",
        "Writing effective descriptions",
        "Organizing portfolio sections",
        "SEO optimization tips"
      ]
    },
    {
      icon: Video,
      title: "Publishing & Sharing",
      description: "Deploy and share your portfolio",
      articles: [
        "Publishing your portfolio",
        "Custom domain setup",
        "Social media integration",
        "Analytics and tracking"
      ]
    }
  ]

  const popularArticles = [
    {
      title: "How to create your first portfolio in 5 minutes",
      category: "Getting Started",
      views: "12.5K views"
    },
    {
      title: "Best practices for portfolio design",
      category: "Design",
      views: "8.2K views"
    },
    {
      title: "Troubleshooting common issues",
      category: "Technical",
      views: "6.8K views"
    },
    {
      title: "Setting up a custom domain",
      category: "Publishing",
      views: "5.4K views"
    }
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Help Center</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Find answers to your questions and get the help you need to create amazing portfolios
        </p>
        
        {/* Search Bar */}
        <div className="max-w-md mx-auto relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input 
            placeholder="Search for help articles..." 
            className="pl-10 h-12 text-lg"
          />
        </div>
      </div>

      {/* Help Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {helpCategories.map((category) => {
          const Icon = category.icon
          return (
            <Card key={category.title} className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                    <p className="text-muted-foreground text-sm">{category.description}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {category.articles.map((article, index) => (
                    <li key={index} className="text-muted-foreground hover:text-primary cursor-pointer transition-colors">
                      • {article}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Popular Articles */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8">Popular Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {popularArticles.map((article, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">{article.title}</h3>
                <div className="flex justify-between items-center text-sm text-muted-foreground">
                  <span>{article.category}</span>
                  <span>{article.views}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Support CTA removed per request */}
    </div>
  )
}