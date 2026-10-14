import { useEffect } from "react";
import { initSmoothScroll } from "./lib/scroll";
import Loader from "./components/Loader";
import CursorGlow from "./components/CursorGlow";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import HarvestGallery from "./components/HarvestGallery";
import CompanyDirection from "./components/CompanyDirection";
import CorporateServices from "./components/CorporateServices";
import Categories from "./components/Categories";
import DurianShowcase from "./components/DurianShowcase";
import FruitCatalog from "./components/FruitCatalog";
import LocationSection from "./components/LocationSection";
import HoursContact from "./components/HoursContact";
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
        <HarvestGallery />
        <CompanyDirection />
        <CorporateServices />
        <Categories />
        <DurianShowcase />
        <FruitCatalog />
        <LocationSection />
        <HoursContact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
