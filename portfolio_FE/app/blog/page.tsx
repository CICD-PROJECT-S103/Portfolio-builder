import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, Clock, ArrowRight } from "lucide-react"

export default function Blog() {
  const blogPosts = [
    {
      title: "The Future of Portfolio Design in 2025",
      excerpt: "Explore the latest trends and technologies shaping portfolio design this year",
      content: "As we advance through 2025, portfolio design continues to evolve with new technologies and changing employer expectations...",
      author: "Sarah Designer",
      date: "September 20, 2025",
      readTime: "5 min read",
      category: "Design Trends",
      featured: true
    },
    {
      title: "10 Portfolio Mistakes That Cost You Job Opportunities",
      excerpt: "Avoid these common pitfalls that prevent your portfolio from making a great first impression",
      content: "Your portfolio is often the first impression you make on potential employers. Here are the most common mistakes...",
      author: "Marcus Recruiter",
      date: "September 18, 2025",
      readTime: "8 min read",
      category: "Career Tips",
      featured: false
    },
    {
      title: "Building a Portfolio as a Career Changer",
      excerpt: "Strategies for showcasing transferable skills when switching careers",
      content: "Changing careers can be challenging, but a well-crafted portfolio can help bridge the gap...",
      author: "Emily Career",
      date: "September 15, 2025",
      readTime: "7 min read",
      category: "Career Change",
      featured: true
    },
    {
      title: "The Psychology of Color in Portfolio Design",
      excerpt: "How color choices impact perception and what colors work best for different professions",
      content: "Color psychology plays a crucial role in how your portfolio is perceived by viewers...",
      author: "Alex Psychology",
      date: "September 12, 2025",
      readTime: "6 min read",
      category: "Design",
      featured: false
    },
    {
      title: "Accessibility in Portfolio Design",
      excerpt: "Creating inclusive portfolios that work for everyone",
      content: "Accessibility isn't just about compliance—it's about creating portfolios that everyone can use and appreciate...",
      author: "Jennifer Access",
      date: "September 10, 2025",
      readTime: "9 min read",
      category: "Accessibility",
      featured: false
    },
    {
      title: "Remote Work Portfolio: Showcasing Virtual Collaboration",
      excerpt: "How to highlight remote work skills and virtual project experience",
      content: "As remote work becomes more prevalent, portfolios need to adapt to showcase virtual collaboration skills...",
      author: "David Remote",
      date: "September 8, 2025",
      readTime: "6 min read",
      category: "Remote Work",
      featured: false
    }
  ]

  const featuredPosts = blogPosts.filter(post => post.featured)
  const regularPosts = blogPosts.filter(post => !post.featured)

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Design Trends': return 'bg-purple-100 text-purple-800'
      case 'Career Tips': return 'bg-blue-100 text-blue-800'
      case 'Career Change': return 'bg-green-100 text-green-800'
      case 'Design': return 'bg-pink-100 text-pink-800'
      case 'Accessibility': return 'bg-orange-100 text-orange-800'
      case 'Remote Work': return 'bg-cyan-100 text-cyan-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">PortfolioCraft Blog</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Insights, tips, and inspiration for creating portfolios that advance your career
        </p>
      </div>

      {/* Featured Posts */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8">Featured Articles</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {featuredPosts.map((post, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
              <div className="h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                <Badge className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                  Featured
                </Badge>
              </div>
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge className={getCategoryColor(post.category)}>
                    {post.category}
                  </Badge>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </div>
                </div>
                <CardTitle className="text-xl line-clamp-2">{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-primary" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Recent Posts */}
      <div>
        <h2 className="text-2xl font-bold mb-8">Recent Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regularPosts.map((post, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge className={getCategoryColor(post.category)}>
                    {post.category}
                  </Badge>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </div>
                </div>
                <CardTitle className="text-lg line-clamp-2">{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 text-sm line-clamp-3">{post.excerpt}</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <User className="w-3 h-3" />
                    {post.author}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="text-center mt-16 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
        <p className="text-muted-foreground mb-6">
          Get the latest articles and portfolio tips delivered to your inbox
        </p>
        <div className="flex gap-2 max-w-md mx-auto">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="flex-1 px-4 py-2 rounded-md border border-border bg-background"
          />
          <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-md hover:from-blue-600 hover:to-purple-700 transition-colors">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  )
}