import { AboutUsSection } from "@/components/about-us-section";
import { HeroSection } from "@/components/hero-section";
import { NewsletterSignupSection } from "@/components/newsletter-signup-section";
import { OurProductsSection } from "@/components/our-products-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { VisionMissionSection } from "@/components/vision-mission-section";
import { WhyChooseUsSection } from "@/components/why-choose-us-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <VisionMissionSection />
      <AboutUsSection />
      <OurProductsSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <NewsletterSignupSection />
    </>
  );
}
