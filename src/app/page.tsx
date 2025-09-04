//components
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeatureCards from "@/components/FeatureCards";
import FeaturedProperties from "@/components/FeaturedProperties";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import Promo from "@/components/Promo";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <FeatureCards />
      <FeaturedProperties />
      <Testimonials />
      <Faq />
      <Promo />
      <Footer />
    </>
  );
}
