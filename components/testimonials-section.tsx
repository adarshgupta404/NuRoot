import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    quote:
      "NuRoot Naturals has transformed my snacking habits. The quality is unmatched, and I love knowing they're chemical-free!",
    name: "Sarah J.",
    avatar: "/placeholder.svg?height=64&width=64",
  },
  {
    quote:
      "Finally, a brand that truly cares about sustainability and health. Their walnuts are incredibly fresh and delicious.",
    name: "David L.",
    avatar: "/placeholder.svg?height=64&width=64",
  },
  {
    quote:
      "The best dry fruits I've ever tasted! The eco-friendly packaging is a huge plus. Highly recommend NuRoot Naturals.",
    name: "Maria K.",
    avatar: "/placeholder.svg?height=64&width=64",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-ivory-beige">
      {" "}
      {/* Changed to new ivory-beige */}
      <div className="container px-4 md:px-6 text-center">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-sage-green-700 mb-12">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            >
              {" "}
              {/* Changed to white */}
              <CardContent className="p-0 mb-6">
                <p className="text-lg italic text-walnut-brown-700">"{testimonial.quote}"</p>
              </CardContent>
              <Avatar className="h-16 w-16 mb-4 border-2 border-sage-green-300">
                <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                <AvatarFallback>
                  {testimonial.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <p className="font-semibold text-walnut-brown-800">{testimonial.name}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
