import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

const products = [
  {
    name: "Premium Almonds",
    description: "Sustainably sourced, rich in Vitamin E and healthy fats.",
    image: "https://media.istockphoto.com/id/92268485/photo/almonds.jpg?s=612x612&w=0&k=20&c=AUtmb7GbHIr3kcw2t6SjnFSvoVDCJUEgJea02UOoyXc=",
    link: "#",
  },
  {
    name: "Wholesome Cashews",
    description: "Creamy and nutritious, perfect for snacking or cooking.",
    image: "https://cleanplatemama.com/wp-content/uploads/2023/05/roasted-cashews-thumbnail.jpg",
    link: "#",
  },
  {
    name: "Roasted Pistachios",
    description: "Lightly roasted, a delightful and protein-packed snack.",
    image: "https://www.hkvitals.com/blog/wp-content/uploads/2023/09/900-10.jpg",
    link: "#",
  },
  {
    name: "Sweet Raisins",
    description: "Naturally sweet and chewy, great for energy boosts.",
    image: "https://www.health.com/thmb/Vc3MgBLLxCNOjbsSLkSfgC_l-nw=/2121x0/filters:no_upscale():max_bytes(150000):strip_icc()/Health-GettyImages-1359551755-68e08afd6ffa4e3faaa5096a0bc4e702.jpg",
    link: "#",
  },
  {
    name: "Organic Walnuts",
    description: "Brain-boosting omega-3s, ideal for baking or salads.",
    image: "https://millicanpecan.com/cdn/shop/articles/Pecans-vs-Walnuts_nut-362562_0f0550e7-1bea-46dc-8a69-4e6413cede9e-503725_1600x.jpg?v=1744990031",
    link: "#",
  },
]

export function OurProductsSection() {
  return (
    <section id="products" className="py-16 md:py-24 bg-ivory-beige">

      {/* Changed to new ivory-beige */}
      <div className="container px-4 md:px-6 text-center">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-sage-green-700 mb-12">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <Card
              key={index}
              className="flex flex-col items-center p-6 bg-white shadow-lg rounded-xl transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            >
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                width={200}
                height={200}
                className="rounded-full h-[200px] w-[200px] object-center object-cover mb-4 border-4 border-sage-green-100"
              />
              <CardHeader className="p-0 mb-2">
                <CardTitle className="font-serif text-2xl text-walnut-brown-700">{product.name}</CardTitle>
              </CardHeader>
              <CardContent className="p-0 text-center flex-grow">
                <CardDescription className="text-walnut-brown-600 text-base">{product.description}</CardDescription>
              </CardContent>
              <CardFooter className="p-0 mt-6">
                <Button asChild className="bg-sage-green text-white hover:bg-sage-green-600 rounded-full px-6 py-3">
                  <Link href={product.link}>Learn More</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
