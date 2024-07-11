import Link from "next/link";
import About from "./components/About";
import ContactMe from "./components/ContactMe";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Project from "./components/Project";
import Skills from "./components/Skills";
import { ArrowUpIcon } from "@heroicons/react/24/solid";

export default function Home() {
  return (
    <main
      className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0
    overflow-y-scroll overflow-x-hidden scrollbar scrollbar-track-gray-400/20"
    >
      <Header />
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      <section id="about" className="snap-center">
        <About />
      </section>
      <section id="experience" className="snap-center">
        <Experience />
      </section>
      <section id="skills" className="snap-start">
        <Skills />
      </section>
      <section id="projects" className="snap-start">
        <Project />
      </section>
      <section id="contact" className="snap-start">
        <ContactMe />
      </section>
      <Link href="#hero">
        <footer className="sticky bottom-5 max-w-fit cursor-pointer">
          <ArrowUpIcon className="w-6 h-6 xl:h-10 xl:w-10 rounded-full bg-white text-[#F7AB0A] mr-5 filter grayscale
           hover:grayscale-0 cursor-pointer ml-[20px]" />
        </footer>
      </Link>
    </main>
  );
}
