import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Palette, Code, Download, Zap, Shield, Globe } from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: Palette,
      title: "Professional Templates",
      description: "Choose from 500+ professionally designed templates for every industry and style",
      category: "Design"
    },
    {
      icon: Code,
      title: "No Coding Required",
      description: "Build stunning portfolios without writing a single line of code using our intuitive builder",
      category: "Ease of Use"
    },
    {
      icon: Download,
      title: "Export & Deploy",
      description: "Download your portfolio as a complete website or deploy directly to the web",
      category: "Deployment"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized for speed and performance with modern web technologies",
      category: "Performance"
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Your data is protected with enterprise-grade security and regular backups",
      category: "Security"
    },
    {
      icon: Globe,
      title: "SEO Optimized",
      description: "Built-in SEO features to help your portfolio rank higher in search results",
      category: "SEO"
    }
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Features</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Everything you need to create a professional portfolio that stands out from the crowd
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {features.map((feature) => {
          const Icon = feature.icon
          return (
            <Card key={feature.title} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
                <Badge variant="secondary" className="w-fit">
                  {feature.category}
                </Badge>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Additional Features Section */}
      <div className="bg-muted/30 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-8">Why Choose PortfolioCraft?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">For Professionals</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Showcase your work professionally</li>
              <li>• Impress potential employers</li>
              <li>• Stand out in competitive markets</li>
              <li>• Mobile-responsive designs</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">For Developers</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Clean, modern code output</li>
              <li>• Customizable components</li>
              <li>• Integration with popular frameworks</li>
              <li>• Version control friendly</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}