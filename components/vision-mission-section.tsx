"use client";

import { motion, type Variants } from "framer-motion"; // Import type Variants
import { Sparkles, Target } from "lucide-react";

export function VisionMissionSection() {
  const sectionVariants: Variants = {
    // Explicitly type as Variants
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    // Explicitly type as Variants
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      id="vision-mission"
      className="py-16 md:py-24 md:h-dvh bg-ivory-beige md:flex md:flex-col md:items-center md:justify-center text-walnut-brown-700"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="container px-4 md:px-6 text-center">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-sage-green-700 mb-12">
          Our Vision & Mission
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            variants={itemVariants}
            className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center text-center h-full"
          >
            <Target className="h-16 w-16 text-sage-green-500 mb-6" />
            <h3 className="font-serif text-3xl font-bold text-walnut-brown-700 mb-4">
              Our Vision
            </h3>
            <p className="text-lg text-walnut-brown-600 leading-relaxed">
              We want to be the top brand for high-quality, natural dry fruits.
              Our goal is to help people live healthier lives and take better
              care of the planet.
            </p>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center text-center h-full"
          >
            <Sparkles className="h-16 w-16 text-sage-green-500 mb-6" />
            <h3 className="font-serif text-3xl font-bold text-walnut-brown-700 mb-4">
              Our Mission
            </h3>
            <p className="text-lg text-walnut-brown-600 leading-relaxed">
              We carefully choose the best, chemical-free dry fruits and bring
              them to you. We aim to support healthy eating, use eco-friendly
              methods, and always do the right thing when sourcing our products.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
