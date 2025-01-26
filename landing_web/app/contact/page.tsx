"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevState) => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("idle")

    // Here you would typically send the form data to your server
    // For this example, we'll simulate a successful submission after a short delay
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setStatus("success")
      setFormData({ name: "", email: "", message: "" })
    } catch (error) {
      setStatus("error")
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-primary text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg md:text-xl opacity-90 max-w-3xl">Contact us today to get your project running</p>
        </div>
      </div>

      {/* Contact Form and Info */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Contact Form</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name and Surname
                </label>
                <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  E-mail address
                </label>
                <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                />
              </div>
              <Button type="submit" className="w-full">
                Send
              </Button>
            </form>
            {status === "success" && <p className="mt-4 text-green-600">Success</p>}
            {status === "error" && <p className="mt-4 text-red-600">Failure</p>}
          </div>

          {/* Contact Info */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Title</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-4">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <h3 className="font-medium">Address</h3>
                    <p className="text-sm text-gray-600">123 Tech Street, Innovation City, 12345</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="h-5 w-5 text-primary" />
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-sm text-gray-600">+1 (123) 456-7890</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <h3 className="font-medium">E-mail</h3>
                    <p className="text-sm text-gray-600">info@techsolutions.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Map */}
            <div className="mt-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2559.0689590974116!2d14.388436576235353!3d50.10371621226927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b94e8b61a7d13%3A0x917af83b84a0902!2sNational%20Library%20of%20Technology!5e0!3m2!1sen!2scz!4v1737891147021!5m2!1sen!2scz"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

