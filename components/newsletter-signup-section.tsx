import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function NewsletterSignupSection() {
  return (
    <section id="newsletter" className="py-16 md:py-24 bg-walnut-brown text-white text-center">
      <div className="container px-4 md:px-6">
        <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">Stay Rooted in Wellness</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Get updates, exclusive offers & wellness tips delivered straight to your inbox.
        </p>
        <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Enter your email"
            className="flex-grow p-3 rounded-full bg-white text-walnut-brown border-none focus:ring-2 focus:ring-sage-green-500"
          />
          <Button
            type="submit"
            className="bg-sage-green text-white hover:bg-sage-green-600 px-8 py-3 rounded-full text-lg transition-all duration-300 hover:scale-105"
          >
            Subscribe Now
          </Button>
        </form>
      </div>
    </section>
  )
}
