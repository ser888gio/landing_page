"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Header() {

  return (
    <header className="py-4 px-4 md:px-6 lg:px-8 flex items-center justify-between bg-white shadow-sm">
      <Link href="/" className="text-2xl font-bold text-primary">
        TechSolutions
      </Link>
      <nav className="hidden md:flex space-x-4">
        <Link href="/services" className="text-sm font-medium hover:text-primary">
          Services
        </Link>
        <Link href="/portfolio" className="text-sm font-medium hover:text-primary">
          Our work
        </Link>
        <Link href="/about" className="text-sm font-medium hover:text-primary">
          About Us
        </Link>
        <Link href="/contact" className="text-sm font-medium hover:text-primary">
          Contact Us
        </Link>
      </nav>
      <Button className="md:hidden">Menu</Button>
    </header>
  )
}

