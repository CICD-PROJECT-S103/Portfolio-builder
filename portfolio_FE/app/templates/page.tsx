import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Eye, Star, Download, Code } from "lucide-react"
import Link from "next/link"
import { getImagePath } from "@/lib/image-utils"

export default function Templates() {
  const templates = [
    {
      id: "modern",
      name: "Modern Developer",
      description: "Clean, contemporary design with bold typography and smooth animations",
      preview: getImagePath("/modern-portfolio-template-with-dark-theme-and-clea.jpg"),
      category: "Developer",
      rating: 4.9,
      downloads: "2.3K",
      tags: ["Dark Theme", "Animations", "Modern"]
    },
    {
      id: "minimal",
      name: "Minimal Professional",
      description: "Simple, elegant layout focusing on content and readability",
      preview: getImagePath("/minimal-portfolio-template-with-white-background-a.jpg"),
      category: "Professional",
      rating: 4.8,
      downloads: "1.8K",
      tags: ["Clean", "Minimal", "Typography"]
    },
    {
      id: "creative",
      name: "Creative Showcase",
      description: "Vibrant, artistic design perfect for designers and creative professionals",
      preview: getImagePath("/creative-portfolio-template-with-colorful-design-a.jpg"),
      category: "Creative",
      rating: 4.9,
      downloads: "2.1K",
      tags: ["Colorful", "Creative", "Artistic"]
    },
    {
      id: "professional",
      name: "Corporate Professional",
      description: "Traditional, business-focused design ideal for corporate environments",
      preview: getImagePath("/professional-portfolio-template-with-corporate-des.jpg"),
      category: "Business",
      rating: 4.7,
      downloads: "1.5K",
      tags: ["Corporate", "Traditional", "Business"]
    }
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Portfolio Templates</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Choose from our collection of professionally designed templates to create your perfect portfolio
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {templates.map((template) => (
          <Card key={template.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 overflow-hidden">
              <img
                src={template.preview}
                alt={template.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg">{template.name}</CardTitle>
                  <Badge variant="secondary" className="mt-1">
                    {template.category}
                  </Badge>
                </div>
                <div className="flex items-center gap-1 text-sm">
                  <Star className="w-4 h-4 fill-current text-yellow-500" />
                  {template.rating}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{template.description}</p>
              <div className="flex flex-wrap gap-1 mb-4">
                {template.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground flex items-center gap-1">
                  <Download className="w-3 h-3" />
                  {template.downloads} downloads
                </span>
                <div className="flex gap-2">
                  <Button size="sm" variant="secondary" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    <Eye className="w-4 h-4 mr-1" />
                    Preview
                  </Button>
                  <Link href={`/builder?template=${template.id}`}>
                    <Button size="sm">
                      <Code className="w-4 h-4 mr-1" />
                      Use Template
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}