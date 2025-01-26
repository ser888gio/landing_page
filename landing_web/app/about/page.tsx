import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Users, Lightbulb, Target } from "lucide-react"
import Link from "next/link"

const teamMembers = [
  {
    name: "Jane Doe",
    role: "CEO & Founder",
    image: "/placeholder.svg?height=400&width=400",
    bio: "With over 20 years of experience in IT, Jane founded TechSolutions with a vision to transform businesses through technology.",
  },
  {
    name: "John Smith",
    role: "CTO",
    image: "/placeholder.svg?height=400&width=400",
    bio: "John leads our technical strategy, ensuring we stay at the forefront of emerging technologies and deliver cutting-edge solutions.",
  },
  {
    name: "Emily Brown",
    role: "Head of Client Relations",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Emily ensures our clients receive exceptional service and that our solutions align perfectly with their business needs.",
  },
  {
    name: "Michael Chen",
    role: "Lead Developer",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Michael oversees our development team, bringing innovative ideas to life through robust and scalable software solutions.",
  },
]

const values = [
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Client-Centric Approach",
    description: "We prioritize our clients' needs and tailor our solutions to their unique challenges and goals.",
  },
  {
    icon: <Lightbulb className="h-8 w-8 text-primary" />,
    title: "Innovation",
    description: "We constantly explore new technologies and methodologies to provide cutting-edge solutions.",
  },
  {
    icon: <Target className="h-8 w-8 text-primary" />,
    title: "Excellence",
    description: "We strive for excellence in every project, delivering high-quality results that exceed expectations.",
  },
  {
    icon: <CheckCircle className="h-8 w-8 text-primary" />,
    title: "Integrity",
    description: "We operate with transparency and honesty, building trust with our clients and partners.",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-primary text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About TechSolutions</h1>
          <p className="text-lg md:text-xl opacity-90 max-w-3xl">
            Empowering businesses through innovative IT solutions since 2005. Discover our journey, mission, and the
            team behind our success.
          </p>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-lg text-gray-600 mb-4">
              Founded in 2005, TechSolutions began with a vision to bridge the gap between complex technology and
              business needs. Our journey started in a small office with a team of five dedicated IT professionals.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              Over the years, we've grown into a leading IT services provider, serving clients across various industries
              globally. Our commitment to innovation, excellence, and client satisfaction has been the cornerstone of
              our success.
            </p>
            <p className="text-lg text-gray-600">
              Today, with a team of over 200 experts, we continue to push the boundaries of what's possible in IT,
              helping businesses thrive in the digital age.
            </p>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=800&width=600"
              alt="TechSolutions office"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Our Mission & Values Section */}
      <div className="bg-gray-100 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Mission & Values</h2>
          <div className="mb-12 text-center">
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our mission is to empower businesses through innovative and reliable IT solutions, enabling them to thrive
              in an ever-evolving digital landscape.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="mb-4">{value.icon}</div>
                  <CardTitle>{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Our Team Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Meet Our Leadership Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="relative h-48 w-48 mx-auto rounded-full overflow-hidden mb-4">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <CardTitle className="text-center">{member.name}</CardTitle>
                <p className="text-center text-gray-600">{member.role}</p>
              </CardHeader>
              <CardContent>
                <p className="text-center text-gray-600">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Let's work together to bring your vision to life. Our team of experts is ready to help you navigate the
            complexities of modern IT and drive your business forward.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="#contact">Get in Touch</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

