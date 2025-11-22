"use client";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import FallingShapes from "@/components/FallingShapes";
import FloatingParticles from "@/components/FloatingParticles";
import { projects, blenderProjects } from "./data";
import ContactForm from "../components/ContactForm"
import SoftParticles from "@/components/SoftParticles";


// section color map — used to give each section an accent bar that matches the navbar color
const SECTION_COLORS = {
  projects: "#851b1b", // blue
  CAD: "#FB923C", // orange
  music: "#A78BFA", // purple
  about: "#34D399", // green
  contact: "#F472B6", // pink
};

export default function Home() {
  return (
   <main className="relative flex flex-col items-center justify-center min-h-screen bg-neutral-950 text-white">
  <SoftParticles />
  <Navbar />

      {/* Hero Section */}
    <section
  id="home"
  className="relative flex flex-col items-center justify-center min-h-screen px-6 overflow-hidden"
>
  {/* Floating particles behind the text */}
  <FloatingParticles />

  {/* Animated Name */}
  <motion.h1
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="text-6xl font-extrabold tracking-tight mb-3 mt-24 text-transparent bg-clip-text bg-linear-to-r from-red-700 via-purple-600 to-red-700 animate-pulse-slow drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]"
>
  Divine Obienu
</motion.h1>


  {/* Floating Subtitle */}
  <motion.h2
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 2, delay: 0.5}}
    className="text-lg md:text-xl text-white max-w-xl text-center z-10 relative"
  >
    Design Engineer • Creator • Innovator
  </motion.h2>
</section>


 {/* Projects Section */}
<section
  id="projects"
  className="min-h-screen flex flex-col justify-center items-center px-8 py-20 border-t border-neutral-800"
>
  <h2 className="text-4xl font-bold mb-2 text-transparent bg-clip-text bg-linear-to-r from-red-600 to-purple-600">
    Projects
  </h2>
  <div className="section-accent mb-10" style={{ background: "#3B82F6" }} />

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {/* Transitional Chess */}
    <a
      href="https://1drv.ms/p/c/f5bd0da8c5428b6f/EdmV14zrVQNDo9OLi6NbbgkBsy614qP7DozEm5fwVdV7xA?e=33pYzf"
      target="_blank"
      rel="noopener noreferrer"
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 200, damping: 12 }}
        className="bg-linear-to-br from-[#1c0f0f]/60 to-[#301010]/60 border border-red-900/20 rounded-2xl p-6 backdrop-blur-md shadow-lg hover:shadow-[0_0_25px_rgba(255,215,0,0.3)] hover:border-yellow-400/40 transition cursor-pointer"
      >
        <h3 className="text-xl font-semibold text-yellow-400 mb-2 drop-shadow-[0_0_6px_rgba(255,215,0,0.3)]">
          Educational Games and Toys: Transitional Chess
        </h3>
        <p className="text-gray-300 text-sm leading-relaxed">
          A chess set design that transitions different "dimensions" of play. 
          This 4D chess concept challenges traditional gameplay by introducing 
          an additional spatial dimension, enhancing strategic depth and cognitive engagement.
        </p>
      </motion.div>
    </a>

    {/* Skating Tunnel Concept */}
    <a
      href="https://wrenacademylondon.sharepoint.com/:p:/r/sites/WENF12E3DDesign-6Divine/Shared%20Documents/6%20Divine/Improving%20Urban%20spaces.pptx?d=w614863df012044dfb6a0da0e13b1ae2e&csf=1&web=1&e=ntDLY5"
      target="_blank"
      rel="noopener noreferrer"
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 200, damping: 12 }}
        className="bg-linear-to-br from-[#1a0f2a]/60 to-[#2b1040]/60 border border-purple-900/20 rounded-2xl p-6 backdrop-blur-md shadow-lg hover:shadow-[0_0_25px_rgba(186,85,211,0.3)] hover:border-purple-400/40 transition cursor-pointer"
      >
        <h3 className="text-xl font-semibold text-purple-300 mb-2 drop-shadow-[0_0_6px_rgba(186,85,211,0.3)]">
          Improving Urban Spaces: Skating Tunnel Concept
        </h3>
        <p className="text-gray-300 text-sm leading-relaxed">
          A concept inspired by flowing organic forms. Merged
          architecture and community art in a tunnel structure.
        </p>
      </motion.div>
    </a>

    {/* LED Lamp */}
    <a
      href="https://1drv.ms/p/c/f5bd0da8c5428b6f/EbAq4qFF95ZKmnc7aFObCv4BjB_rHf3NJmEZID0bu7Ltag?e=h0poN3"
      target="_blank"
      rel="noopener noreferrer"
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 200, damping: 12 }}
        className="bg-linear-to-br from-[#1c1a0f]/60 to-[#332b10]/60 border border-yellow-900/20 rounded-2xl p-6 backdrop-blur-md shadow-lg hover:shadow-[0_0_25px_rgba(255,215,0,0.3)] hover:border-yellow-400/40 transition cursor-pointer"
      >
        <h3 className="text-xl font-semibold text-yellow-300 mb-2 drop-shadow-[0_0_6px_rgba(255,215,0,0.3)]">
          LED Lamp
        </h3>
        <p className="text-gray-300 text-sm leading-relaxed">
          A design of an LED lamp with a focus on sleek aesthetics and
          user-friendly functionality. Emphasized minimalism and modern design
          principles.
        </p>
      </motion.div>
    </a>
  </div>
</section>




      {/* CAD Skills Section */}
      <section id="CAD" className="min-h-screen flex flex-col justify-center px-8 py-20 border-t border-neutral-800">
  <h2 className="text-4xl font-bold mb-2">CAD Skills</h2>
  <div className="section-accent mb-6" style={{ background: SECTION_COLORS.CAD }} />

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {blenderProjects.map((proj) => (
      <a
        key={proj.id}
        href={proj.link}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-neutral-900 hover:bg-neutral-800 rounded-lg p-4 transition transform hover:scale-105 shadow-lg"
      >
        <img src={proj.thumbnail} alt={proj.title} className="rounded-md mb-2 w-full" />
        <h3 className="font-bold text-lg">{proj.title}</h3>
        <p className="text-gray-400 text-sm">{proj.description}</p>
      </a>
    ))}
  </div>
</section>

      {/* Music Section */}
      <section
        id="music"
        className="min-h-screen flex flex-col justify-center px-8 py-20 border-t border-neutral-800 relative z-10"
      >
        <h2 className="text-4xl font-bold mb-2">Music</h2>
        <div
          className="section-accent mb-6"
          style={{ background: SECTION_COLORS.music }}
        />
        <p className="text-gray-100 max-w-2xl mx-auto">
          A section containing my track list.
        </p>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="min-h-screen flex flex-col justify-center px-8 py-20 border-t border-neutral-800 relative z-10"
      >
        <h2 className="text-4xl font-bold mb-2">About</h2>
        <div
          className="section-accent mb-6"
          style={{ background: SECTION_COLORS.about }}
        />
        <p className="text-gray-100 max-w-2xl mx-auto">
          A short story about who I am, as well as a link to my CV, and my desired path to becoming a Design Engineer.
        </p>
      </section>

      {/* Contact Section */}
<section id="contact" className="min-h-screen flex flex-col justify-center px-8 py-20 border-t border-neutral-800 mb-20">
  <ContactForm />
</section>


    </main>
  );
}

