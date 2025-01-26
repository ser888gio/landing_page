import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Server, Shield, Zap } from "lucide-react"

const services = [
  {
    icon: <Server className="h-8 w-8 mb-4 text-primary" />,
    title: "Cloud Solutions",
    description: "Scalable and secure cloud infrastructure to power your business.",
  },
  {
    icon: <Shield className="h-8 w-8 mb-4 text-primary" />,
    title: "Cybersecurity",
    description: "Protect your digital assets with our advanced security measures.",
  },
  {
    icon: <Zap className="h-8 w-8 mb-4 text-primary" />,
    title: "IT Consulting",
    description: "Expert advice to align your IT strategy with business goals.",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 md:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <div className="flex justify-center">{service.icon}</div>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

