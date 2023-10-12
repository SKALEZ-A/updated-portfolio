import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import About from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen gradient-bg-welcome">
      <Navbar />
      <div className="container mt-32 px-8 py-6 mx-auto">
        <HeroSection />
        <About />
        <ProjectSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
