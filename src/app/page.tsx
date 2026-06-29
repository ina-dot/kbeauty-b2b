import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import BrandsSection from "@/components/BrandsSection";
import CategoriesSection from "@/components/CategoriesSection";
import ShippingSection from "@/components/ShippingSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <BrandsSection />
      <CategoriesSection />
      <ShippingSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
