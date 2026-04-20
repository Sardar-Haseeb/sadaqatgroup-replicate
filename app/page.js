import AboutSection from "../components/AboutSection";
import Divisions from "../components/Divisions";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Infrastructure from "../components/Infrastructure";
import MessageVision from "../components/MessageVision";
import Navbar from "../components/Navbar";

export default function HomePage() {
  return (
    <main className="bg-[#0f0f0f] text-white">
      <Navbar />
      <Hero />
      <Divisions />
      <AboutSection />
      <Infrastructure />
      <MessageVision />
      <Footer />
    </main>
  );
}
