//components
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeatureCards from "@/components/FeatureCards";
import FeaturedProperties from "@/components/FeaturedProperties";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <FeatureCards />
      <FeaturedProperties />
      <Testimonials />
      <Faq />
    </>
  );
}
