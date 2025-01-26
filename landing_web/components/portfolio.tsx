import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Cloud Migration for FinTech",
    description:
      "Seamlessly migrated a financial services company to a secure cloud infrastructure, improving performance and scalability.",
    image: "/placeholder.svg?height=200&width=300",
    link: "https://example.com/fintech-project",
  },
  {
    title: "Cybersecurity Overhaul",
    description:
      "Implemented state-of-the-art security measures for a large e-commerce platform, ensuring customer data protection.",
    image: "/placeholder.svg?height=200&width=300",
    link: "https://example.com/cybersecurity-project",
  },
  {
    title: "AI-Powered Analytics Dashboard",
    description: "Developed a custom analytics solution using AI to provide real-time insights for a marketing agency.",
    image: "/placeholder.svg?height=200&width=300",
    link: "https://example.com/analytics-project",
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 px-4 md:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={300}
                  height={200}
                  className="rounded-t-lg object-cover w-full h-48"
                />
              </CardHeader>
              <CardContent className="flex-grow">
                <CardTitle className="mb-2">{project.title}</CardTitle>
                <p className="text-sm text-gray-600">{project.description}</p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href={project.link} target="_blank" rel="noopener noreferrer">
                    View Project
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

