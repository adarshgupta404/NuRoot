"use client" // This component needs to be a Client Component to use framer-motion

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion"; // Import motion from framer-motion
import { Leaf } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section
      className="relative  h-[100dvh] flex items-center justify-center text-center overflow-hidden"
    >
      <motion.div
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="https://images.squarespace-cdn.com/content/v1/643b1d8a668dcf4c0ba40093/b9c9abec-24a5-41aa-8462-cda496f09077/macadamia-nut-farm-hawaii.jpg"
          alt="Premium Dry Fruits Background"
          layout="fill"
          objectFit="cover"
          quality={90}
        />
      </motion.div>
      <div className="absolute inset-0 bg-sage-green/30 z-10" /> {/* Subtle green overlay */}
      <motion.div
        className="relative z-20 text-white px-4 space-y-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="flex items-center justify-center gap-3">
          <Leaf className="h-10 w-10 text-sage-green-300" />
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold drop-shadow-lg">NuRoot Naturals</h1>
        </motion.div>
        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl lg:text-3xl font-medium max-w-3xl mx-auto drop-shadow-md"
        >
          Wholesome Goodness. Pure by Nature.
        </motion.p>
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            className="bg-sage-green text-white hover:bg-sage-green-600 px-8 py-6 text-lg rounded-full shadow-lg transition-all duration-300 hover:scale-105"
          >
            <Link href="#products">Explore Products</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-walnut-brown px-8 py-6 text-lg rounded-full shadow-lg transition-all duration-300 hover:scale-105 bg-transparent"
          >
            <Link href="#about">Our Story</Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}
