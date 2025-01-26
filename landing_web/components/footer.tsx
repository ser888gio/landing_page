import Link from "next/link"
import { Facebook, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="py-12 px-4 md:px-6 lg:px-8 bg-[#0B1423] text-gray-300">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Locations Column */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-white relative inline-block">
            <span className="after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-12 after:h-0.5 after:bg-red-500">
              Where We Operate
            </span>
          </h3>
          <div className="space-y-4">
            <div>
              <p className="font-medium">New York</p>
              <p>123 Tech Avenue</p>
              <Link href="tel:+1234567890" className="text-red-500 hover:text-red-400">
                +1 (234) 567-890
              </Link>
            </div>
            <div>
              <p className="font-medium">San Francisco</p>
              <p>456 Innovation Street</p>
              <Link href="tel:+1234567891" className="text-red-500 hover:text-red-400">
                +1 (234) 567-891
              </Link>
            </div>
          </div>
        </div>

        {/* Services Column */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-white relative inline-block">
            <span className="after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-12 after:h-0.5 after:bg-red-500">
              Services
            </span>
          </h3>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="hover:text-white">
                Cloud Solutions
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                IT Consulting
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Cybersecurity
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Software Development
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                IT Support
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Data Analytics
              </Link>
            </li>
          </ul>
        </div>

        {/* Resources Column */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-white relative inline-block">
            <span className="after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-12 after:h-0.5 after:bg-red-500">
              Resources
            </span>
          </h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-white mb-2">Case Studies</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-white">
                    Cloud Migration
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Security Implementation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Digital Transformation
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Practical Column */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-white relative inline-block">
            <span className="after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-12 after:h-0.5 after:bg-red-500">
              Practical
            </span>
          </h3>
          <ul className="space-y-2 mb-6">
            <li>
              <Link href="#" className="hover:text-white">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Cookie Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
          <div className="flex space-x-4">
            <Link href="#" className="hover:text-white">
              <Facebook className="h-6 w-6" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="hover:text-white">
              <Instagram className="h-6 w-6" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="hover:text-white">
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

