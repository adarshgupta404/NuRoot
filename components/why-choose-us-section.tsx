import { CheckCircle, Leaf, Package, Handshake } from "lucide-react"

export function WhyChooseUsSection() {
  const features = [
    {
      icon: CheckCircle,
      label: "100% Chemical-Free",
      description: "Pure and natural, just as nature intended.",
    },
    {
      icon: Leaf,
      label: "Sustainably Sourced",
      description: "Ethically harvested with respect for the planet.",
    },
    {
      icon: Handshake,
      label: "Premium Grade Only",
      description: "Hand-picked for superior quality and taste.",
    },
    {
      icon: Package,
      label: "Eco-Friendly Packaging",
      description: "Committed to reducing our environmental footprint.",
    },
  ]

  return (
    <section id="why-choose-us" className="py-16 md:py-24 bg-white">
      {" "}
      {/* Changed to white */}
      <div className="container px-4 md:px-6 text-center">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-sage-green-700 mb-12">
          Why Choose NutRoot Naturals?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 bg-ivory-beige rounded-xl shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            >
              {" "}
              {/* Changed to new ivory-beige */}
              <feature.icon className="h-12 w-12 text-sage-green-500 mb-4" />
              <h3 className="font-serif text-xl font-semibold text-walnut-brown-700 mb-2">{feature.label}</h3>
              <p className="text-walnut-brown-600 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
