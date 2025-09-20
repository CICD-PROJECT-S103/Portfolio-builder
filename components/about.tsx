import { Card } from "@/components/ui/card"

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "PostgreSQL",
  "MongoDB",
  "AWS",
  "Docker",
  "Git",
  "Figma",
]

export function About() {
  return (
    <section id="about" className="min-h-screen w-full flex items-center justify-center py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl mx-auto">
        <div className="space-y-8 sm:space-y-12 lg:space-y-16">
          <div className="text-center space-y-3 sm:space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground">About Me</h2>
            <div className="w-20 sm:w-24 lg:w-32 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 xl:gap-16 items-start lg:items-center">
            <div className="space-y-6 sm:space-y-8 lg:space-y-10 order-2 lg:order-1">
              <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-muted-foreground leading-relaxed">
                Currently, I'm a Senior Front-End Engineer at <span className="text-primary font-medium">TechCorp</span>
                , specializing in accessibility. I contribute to the creation and maintenance of UI components that
                power our platform's frontend, ensuring our platform meets web accessibility standards and best
                practices to deliver an inclusive user experience.
              </p>

              <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-muted-foreground leading-relaxed">
                In the past, I've had the opportunity to develop software across a variety of settings — from
                <span className="text-primary font-medium"> advertising agencies</span> and
                <span className="text-primary font-medium"> large corporations</span> to
                <span className="text-primary font-medium"> start-ups</span> and
                <span className="text-primary font-medium"> small digital product studios</span>. Additionally, I also
                released a <span className="text-primary font-medium">comprehensive video course</span> a few years ago,
                guiding learners through building a web app with modern technologies.
              </p>

              <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-muted-foreground leading-relaxed">
                In my spare time, I'm usually climbing, reading, hanging out with my family, or running around searching
                for the perfect coffee.
              </p>
            </div>

            <Card className="p-6 sm:p-8 lg:p-10 xl:p-12 order-1 lg:order-2">
              <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold mb-6 sm:mb-8 lg:mb-10 text-foreground">Technologies I work with</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
                {skills.map((skill) => (
                  <div key={skill} className="flex items-center space-x-3 sm:space-x-4">
                    <div className="w-3 h-3 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-base sm:text-lg lg:text-xl text-muted-foreground">{skill}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
