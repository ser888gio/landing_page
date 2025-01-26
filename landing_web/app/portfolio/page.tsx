"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"

type Project = {
  id: number
  title: string
  description: string
  image: string
  link: string
  category: string
  technologies: string[]
}

const projects: Project[] = [
  {
    id: 1,
    title: "Healthcare Portal Modernization",
    description:
      "Complete redesign and modernization of a healthcare provider's patient portal, improving accessibility and user experience while maintaining strict security standards.",
    image: "/placeholder.svg?height=600&width=800",
    link: "https://example.com/healthcare",
    category: "Web Apps",
    technologies: ["React", "Node.js", "PostgreSQL", "Docker", "AWS"],
  },
  {
    id: 2,
    title: "E-commerce Platform",
    description:
      "Built a scalable e-commerce solution with advanced inventory management, real-time analytics, and seamless payment integration.",
    image: "/placeholder.svg?height=600&width=800",
    link: "https://example.com/ecommerce",
    category: "E-commerce",
    technologies: ["Next.js", "TypeScript", "Stripe", "MongoDB", "Redis"],
  },
  {
    id: 3,
    title: "Smart City Dashboard",
    description:
      "Developed an IoT dashboard for city administrators to monitor and manage urban infrastructure in real-time.",
    image: "/placeholder.svg?height=600&width=800",
    link: "https://example.com/smart-city",
    category: "Web Apps",
    technologies: ["Vue.js", "Python", "TensorFlow", "GraphQL", "Azure"],
  },
  {
    id: 4,
    title: "Financial Services Platform",
    description:
      "Created a secure financial services platform enabling real-time transactions, portfolio management, and automated reporting.",
    image: "/placeholder.svg?height=600&width=800",
    link: "https://example.com/fintech",
    category: "Web Apps",
    technologies: ["Angular", "Java", "Spring Boot", "MySQL", "Kubernetes"],
  },
  {
    id: 5,
    title: "Retail Analytics Solution",
    description:
      "Implemented a comprehensive retail analytics platform with AI-powered insights and inventory optimization.",
    image: "/placeholder.svg?height=600&width=800",
    link: "https://example.com/retail",
    category: "E-commerce",
    technologies: ["React", "Python", "TensorFlow", "BigQuery", "GCP"],
  },
  {
    id: 6,
    title: "Educational Platform",
    description:
      "Built an interactive learning platform with video conferencing, course management, and progress tracking features.",
    image: "/placeholder.svg?height=600&width=800",
    link: "https://example.com/education",
    category: "Web Apps",
    technologies: ["Next.js", "WebRTC", "Node.js", "MongoDB", "Redis"],
  },
]

const categories = ["All", "Web Apps", "E-commerce", "Mobile Apps"]

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredProjects = projects.filter((project) =>
    selectedCategory === "All" ? true : project.category === selectedCategory,
  )

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-primary text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Portfolio</h1>
          <p className="text-lg md:text-xl opacity-90">Discover our successful projects and digital solutions</p>
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="overflow-hidden flex flex-col">
              <CardHeader className="p-0">
                <div className="relative h-48 w-full">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                </div>
              </CardHeader>
              <CardContent className="flex-grow p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button asChild className="w-full">
                  <Link href={project.link} target="_blank" rel="noopener noreferrer">
                    View Project <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

