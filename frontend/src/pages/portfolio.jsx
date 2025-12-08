"use client";

import React from "react";
import { motion } from "framer-motion";

import travelfly_img from "../assets/Screenshot Capture - 2025-12-07 - 09-07-25.png"
import vibly from "../assets/vibely.png"
import zerodha from '../assets/zerodha.png'
import Particles from '../particles.jsx';
// Sample project data
const projectData = [
  {
    title: "Zerodha Clone- Online Stock Trading Platform",
    description: "A full-stack replica of Zerodha that allows users to register, track portfolios, and simulate buying/selling stocks with real-time market data. Built with MERN stack, featuring a responsive design and interactive charts for seamless trading experience.",
    image:zerodha,
    github:"https://github.com/Krishnajeena02/zerodha-clone",
    demo: "/",
    features: ["React", "Bootstrap", "Framer Motion"],
  },
  {
    title: "Vibly",
    description: "A platform to connect professionals, share updates, and build a network. Features include profiles, posts, and messaging. Built with MERN stack for real-time interactions and seamless user experience.",
    image:vibly,
    github: "https://github.com/Krishnajeena02/vibe_connect",
    demo: "https://vibe-connect-roan.vercel.app/",
    features: ["Next.js", "API Integration","Oauth","Node.js","MongoDb", "Responsive Design"],
  },
  {
    title: "travelFly",
    description: "A sleek and responsive frontend website for booking and exploring travel destinations. Users can browse destinations, view details, and plan their trips with an intuitive and modern UI.",
    image:travelfly_img,
    github: "https://github.com/Krishnajeena02/travelFly",
    demo: "https://travel-fly-six.vercel.app/",
    features: ["React.js", "Taiwind CSS", "React Router"],
  },
  {
    title: "Wanderlust",
    description: "Wanderlust is a dynamic travel discovery platform that lets users explore destinations, filter options, and plan trips effortlessly with an interactive and user-friendly interface.",
    image:
      "https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6?q=80&w=2560&auto=format&fit=crop",
    github: "https://github.com/Krishnajeena02/wanderlust_project",
    demo: " https://wanderlust-project-nexe.onrender.com/listings",
    features: ["React.js", "MongoDB","Mapbox Api","Bootstrap", "JWT Authentication"],
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, type: "spring" },
  },
};

// Individual Project Card
const ProjectCard = ({ title, description, image, github, demo, features }) => (
  <motion.div
  initial={{ rotate: -5 }}
  whileHover={{ rotate: 0, scale: 1.05 }}
  transition={{ type: "spring", stiffness: 180, damping:12,mass:0.9 }}
    variants={cardVariants}
    // whileHover={{ scale: 1.05, rotate: -1 }}
    whileTap={{ scale: 0.97 }}
    className="w-85 min-h-[400px]  bg-white border rounded-xl shadow-md p-4 flex flex-col justify-start hover:shadow-3xl transition-all duration-300 cursor-pointer dark:bg-gray-900 dark:border-gray-700"
  >
    <div className="w-full h-40 mb-4 overflow-hidden rounded-lg transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:-translate-y-1">
      <img src={image} alt={title} className="w-full h-full object-cover  " />
    </div>
    <h2 className="text-2xl font-bold text-center mb-2 text-[#FF4F72]">{title}</h2>
    <p className="text-sm text-center text-gray-700 dark:text-gray-300 mb-3 px-1">{description}</p>
    <ul className="text-sm font-semibold flex gap-2 flex-wrap text-gray-800 dark:text-gray-200  ml-3 space-y-1 mb-4">
      {features.map((feature, i) => (
        <li key={i}>{feature} ,</li>
      ))}
    </ul>
    <div className="flex justify-between mt-auto">
      <a
        href={demo}
        target="_blank"
        rel="noopener noreferrer"
        className="px-3 py-1 rounded-md text-xs font-semibold border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-white"
      >
        Demo
      </a>
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="px-3 py-1 rounded-md text-xs font-bold bg-black dark:bg-white text-white dark:text-black"
      >
        Github
      </a>
    </div>
  </motion.div>
);

export default function ProjectShowcase() {
  return (
    <div className="relative z-10">
      {/* Particle background */}
      <div className="absolute inset-0 z-0">
        <Particles
          particleColors={['#d8b4fe', '#c084fc']} // light purple bubbles
          particleCount={300}
          particleSpread={20}
          speed={0.1}
          particleBaseSize={300}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Projects container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-wrap justify-center gap-8 p-8 relative z-10"
      >
        {projectData.map((project, i) => (
          <ProjectCard key={i} {...project} />
        ))}
      </motion.div>
    </div>
  );
}
