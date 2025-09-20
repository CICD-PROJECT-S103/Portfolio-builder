import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, ArrowRight } from "lucide-react"

const blogPosts = [
  {
    title: "Building Accessible React Components",
    excerpt:
      "A comprehensive guide to creating inclusive user interfaces that work for everyone, covering ARIA patterns, keyboard navigation, and screen reader compatibility.",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Accessibility",
    slug: "building-accessible-react-components",
  },
  {
    title: "Modern CSS Techniques for Better Performance",
    excerpt:
      "Exploring the latest CSS features and optimization techniques to improve web performance and user experience in modern browsers.",
    date: "2024-01-08",
    readTime: "6 min read",
    category: "CSS",
    slug: "modern-css-techniques",
  },
  {
    title: "State Management in React: A 2024 Guide",
    excerpt:
      "Comparing different state management solutions for React applications, from built-in hooks to external libraries like Zustand and Redux Toolkit.",
    date: "2024-01-01",
    readTime: "12 min read",
    category: "React",
    slug: "react-state-management-2024",
  },
]

export function Blog() {
  return (
    <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Latest Articles</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
            <p className="text-lg text-muted-foreground">Thoughts on web development, design, and technology trends.</p>
          </div>

          <div className="space-y-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow group cursor-pointer">
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </div>
                    <span>•</span>
                    <span>{post.readTime}</span>
                    <Badge variant="outline" className="text-xs">
                      {post.category}
                    </Badge>
                  </div>

                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">{post.excerpt}</p>

                  <Button variant="ghost" className="p-0 h-auto font-medium group-hover:text-primary">
                    Read more
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline" size="lg">
              View All Articles
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
