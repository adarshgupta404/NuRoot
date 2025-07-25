"use client"

import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Leaf, Menu } from "lucide-react"
import Link from "next/link"

export function SiteHeader() {
  return (
    <header className="fixed inset-0 h-fit top-0 z-50 w-full border-b border-sage-green-100 bg-white/70 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 font-serif text-2xl font-bold text-sage-green-700">
          <Leaf className="h-6 w-6 text-sage-green-500" />
          NuRoot Naturals
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="#hero" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>Home</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
             <NavigationMenuItem>
              <Link href="#vision-mission" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>Vision & Mission</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="#about" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>About Us</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="#products" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>Products</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="#why-choose-us" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>Why Choose Us</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="#testimonials" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>Testimonials</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="#newsletter" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>Contact</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-2">
          <Button
            asChild
            variant="ghost"
            className="hidden md:flex text-sage-green-700 hover:bg-sage-green-100 hover:text-sage-green-800"
          >
            <Link href="#products">Explore Products</Link>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="lg:hidden bg-transparent">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-white">
              <Link href="/" className="flex items-center gap-2 font-serif text-xl font-bold text-sage-green-700 mb-6">
                <Leaf className="h-5 w-5 text-sage-green-500" />
                NuRoot Naturals
              </Link>
              <nav className="grid gap-4 text-lg font-medium">
                <Link
                  href="#hero"
                  className="hover:text-sage-green-500"
                  onClick={() => document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Home
                </Link>
                <Link
                  href="#vision-mission"
                  className="hover:text-sage-green-500"
                  onClick={() => document.getElementById("vision-mission")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Vision & Mission
                </Link>
                <Link
                  href="#about"
                  className="hover:text-sage-green-500"
                  onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                >
                  About Us
                </Link>
                <Link
                  href="#products"
                  className="hover:text-sage-green-500"
                  onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Products
                </Link>
                <Link
                  href="#why-choose-us"
                  className="hover:text-sage-green-500"
                  onClick={() => document.getElementById("why-choose-us")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Why Choose Us
                </Link>
                <Link
                  href="#testimonials"
                  className="hover:text-sage-green-500"
                  onClick={() => document.getElementById("testimonials")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Testimonials
                </Link>
                <Link
                  href="#newsletter"
                  className="hover:text-sage-green-500"
                  onClick={() => document.getElementById("newsletter")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Contact
                </Link>
                <Button
                  asChild
                  variant="ghost"
                  className="mt-4 text-sage-green-700 hover:bg-sage-green-100 hover:text-sage-green-800"
                >
                  <Link href="#products">Explore Products</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
