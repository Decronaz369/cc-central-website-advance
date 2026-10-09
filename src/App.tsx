import { useEffect } from "react";
import { initSmoothScroll } from "./lib/scroll";
import Loader from "./components/Loader";
import CursorGlow from "./components/CursorGlow";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Categories from "./components/Categories";
import DurianShowcase from "./components/DurianShowcase";
import FruitCatalog from "./components/FruitCatalog";
import PromoSection from "./components/PromoSection";
import WhyUs from "./components/WhyUs";
import Guarantee from "./components/Guarantee";
import Delivery from "./components/Delivery";
import LocationSection from "./components/LocationSection";
import HoursContact from "./components/HoursContact";
import Testimonials from "./components/Testimonials";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

export default function App() {
  useEffect(() => initSmoothScroll(), []);

  return (
    <div className="relative min-h-screen overflow-x-clip bg-cream-50 font-sans text-leaf-950 antialiased">
      <Loader />
      <div className="noise-overlay" aria-hidden />
      <CursorGlow />
      <Navbar />

      <main>
        <Hero />
        <Marquee />
        <About />
        <Categories />
        <DurianShowcase />
        <FruitCatalog />
        <PromoSection />
        <WhyUs />
        <Guarantee />
        <Delivery />
        <LocationSection />
        <HoursContact />
        <Testimonials />
        <Faq />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
