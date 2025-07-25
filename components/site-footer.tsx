import Link from "next/link"
import { Leaf, Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-walnut-brown text-white py-12 md:py-16">
      <div className="container px-4 md:px-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <div className="space-y-4">
          <Link href="/" className="flex items-center gap-2 font-serif text-2xl font-bold text-sage-green-300">
            <Leaf className="h-6 w-6 text-sage-green-500" />
            NuRoot Naturals
          </Link>
          <p className="text-sm text-walnut-brown-200">
            Wholesome Goodness. Pure by Nature. Committed to purity, health, and eco-consciousness.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="font-serif text-lg font-semibold text-sage-green-300">Quick Links</h3>
          <nav className="flex flex-col space-y-2">
            <Link href="#hero" className="text-walnut-brown-200 hover:text-sage-green-500 transition-colors">
              Home
            </Link>
            <Link href="#about" className="text-walnut-brown-200 hover:text-sage-green-500 transition-colors">
              About Us
            </Link>
            <Link href="#products" className="text-walnut-brown-200 hover:text-sage-green-500 transition-colors">
              Products
            </Link>
            <Link href="#newsletter" className="text-walnut-brown-200 hover:text-sage-green-500 transition-colors">
              Contact
            </Link>
          </nav>
        </div>

        <div className="space-y-4">
          <h3 className="font-serif text-lg font-semibold text-sage-green-300">Contact Info</h3>
          <div className="flex flex-col space-y-2">
            <div className="flex items-center gap-2 text-walnut-brown-200">
              <Mail className="h-4 w-4" />
              <span>info@nurootnaturals.com</span>
            </div>
            <div className="flex items-center gap-2 text-walnut-brown-200">
              <Phone className="h-4 w-4" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-2 text-walnut-brown-200">
              <MapPin className="h-4 w-4" />
              <span>123 Nature's Way, Green Valley, CA 90210</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-serif text-lg font-semibold text-sage-green-300">Follow Us</h3>
          <div className="flex gap-4">
            <Link href="#" className="text-walnut-brown-200 hover:text-sage-green-500 transition-colors">
              <Instagram className="h-6 w-6" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="text-walnut-brown-200 hover:text-sage-green-500 transition-colors">
              <Facebook className="h-6 w-6" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-walnut-brown-200 hover:text-sage-green-500 transition-colors">
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="container px-4 md:px-6 border-t border-sage-green-700 pt-8 mt-8 text-center text-sm text-walnut-brown-400">
        <p>Copyright © 2025 NuRoot Naturals. All rights reserved.</p>
      </div>
    </footer>
  )
}
