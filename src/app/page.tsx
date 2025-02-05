import { Header } from "@/components/Header";
import { AboutMe } from "@/components/AboutMe";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {

  // const fadeInUp = {
  //   initial: { opacity: 0, y: 20 },
  //   animate: { opacity: 1, y: 0 },
  //   transition: { duration: 0.5 },
  // };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1A0A0F] to-[#2D111A] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
          <Header />
          <AboutMe />
          <Education />
          <Experience />
          <Skills />
          <Projects />
          <Contact />
      </div>
      <Footer />
    </div>
  );
}
