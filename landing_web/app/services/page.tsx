import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Server, Shield, Code, Database, Headphones, BarChart, Cloud, Settings, Clock } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: <Cloud className="h-12 w-12 text-primary" />,
    title: "Cloud Solutions",
    description: "Transform your business with scalable cloud infrastructure",
    features: [
      "Cloud migration and deployment",
      "Infrastructure optimization",
      "Cloud security implementation",
      "24/7 cloud monitoring",
    ],
    details:
      "Our cloud solutions help businesses leverage the power of cloud computing to improve scalability, reduce costs, and enhance operational efficiency. We provide end-to-end cloud services, from migration to maintenance.",
  },
  {
    icon: <Shield className="h-12 w-12 text-primary" />,
    title: "Cybersecurity",
    description: "Protect your digital assets with enterprise-grade security",
    features: [
      "Security audits and assessments",
      "Threat detection and prevention",
      "Data encryption solutions",
      "Security training programs",
    ],
    details:
      "Our cybersecurity services provide comprehensive protection against evolving digital threats. We implement robust security measures to safeguard your sensitive data and maintain business continuity.",
  },
  {
    icon: <Code className="h-12 w-12 text-primary" />,
    title: "Custom Software Development",
    description: "Build tailored solutions for your unique needs",
    features: [
      "Web and mobile applications",
      "Enterprise software solutions",
      "API development and integration",
      "Legacy system modernization",
    ],
    details:
      "We develop custom software solutions that align perfectly with your business objectives. Our experienced team uses cutting-edge technologies to create scalable, maintainable, and efficient applications.",
  },
  {
    icon: <Database className="h-12 w-12 text-primary" />,
    title: "Data Analytics",
    description: "Transform data into actionable insights",
    features: ["Business intelligence solutions", "Predictive analytics", "Data visualization", "Big data processing"],
    details:
      "Our data analytics services help you make data-driven decisions. We implement sophisticated analytics solutions that turn your raw data into valuable business insights.",
  },
  {
    icon: <Headphones className="h-12 w-12 text-primary" />,
    title: "IT Support & Maintenance",
    description: "Round-the-clock technical support for your systems",
    features: ["24/7 help desk support", "System maintenance", "Network management", "Hardware support"],
    details:
      "We provide comprehensive IT support services to ensure your systems run smoothly. Our dedicated team is available 24/7 to resolve technical issues and maintain optimal performance.",
  },
  {
    icon: <Settings className="h-12 w-12 text-primary" />,
    title: "IT Consulting",
    description: "Strategic technology guidance for your business",
    features: [
      "Technology roadmap planning",
      "Digital transformation strategy",
      "IT infrastructure assessment",
      "Technology stack optimization",
    ],
    details:
      "Our IT consulting services help businesses make informed technology decisions. We provide strategic guidance to align your IT infrastructure with your business goals.",
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-primary text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-lg md:text-xl opacity-90 max-w-3xl">
            Comprehensive IT solutions tailored to your business needs. We combine expertise with cutting-edge
            technology to deliver exceptional results.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-gray-600 mb-6">{service.details}</p>
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can help you achieve your business goals. Contact us for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="#contact">Get Started</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-gray-100 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Clock className="h-8 w-8 text-primary mb-4" />
                <CardTitle>24/7 Support</CardTitle>
                <CardDescription>
                  Round-the-clock technical support and monitoring for your peace of mind.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Server className="h-8 w-8 text-primary mb-4" />
                <CardTitle>Latest Technology</CardTitle>
                <CardDescription>Access to cutting-edge technology and industry-leading solutions.</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <BarChart className="h-8 w-8 text-primary mb-4" />
                <CardTitle>Proven Results</CardTitle>
                <CardDescription>Track record of delivering successful projects and satisfied clients.</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

