import Image from "next/image"

export function AboutUsSection() {
  return (
    <section id="about" className="py-16 md:min-h-[100dvh] md:flex md:justify-center md:items-center md:py-24 bg-white relative overflow-hidden">
      <div className="container px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-center md:text-left">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-sage-green-700 leading-tight">
            Rooted in Purity, Committed to Nature
          </h2>
          <p className="text-lg text-walnut-brown-700 max-w-xl mx-auto md:mx-0">
            At NutRoot Naturals, we believe in the power of nature's bounty. We are dedicated to sustainably sourcing the
            finest dry fruits, ensuring every product is 100% chemical-free and packed with natural goodness. Our
            mission is to bring health and wholesomeness directly from nature to your home, with a deep commitment to
            eco-consciousness.
          </p>
        </div>
        <div className="relative h-64 md:h-96 w-full rounded-xl overflow-hidden shadow-xl">
          <Image
            src="https://www.itoozhiayurveda.in/wp-content/uploads/2023/10/set-pecan-pistachios-almond-peanut-cashew-pine-nuts-lined-up-assorted-nuts-dried-fruits-mini-different-bowls-1536x1044.jpg"
            alt="Sustainable Sourcing"
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
          />
        </div>
      </div>
      {/* Optional background illustration */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-sage-green-50 to-transparent -z-0" />
    </section>
  )
}
