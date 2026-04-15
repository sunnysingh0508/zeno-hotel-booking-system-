import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SearchBar from "./components/SearchBar";
import Features from "./components/Features";
import Hotels from "./components/Hotels";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <SearchBar />
      <Features />
      <Hotels />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
